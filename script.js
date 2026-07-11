// ==========================================
// HAMBURGER MENU
// ==========================================
const menuIcon = document.querySelector('#menu-icon');
const navbar   = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Close menu when a link is clicked (mobile UX)
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Close menu when clicking outside (mobile UX)
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});

// ==========================================
// SCROLL: ACTIVE NAV LINK + STICKY HEADER
// ==========================================
const sections  = document.querySelectorAll('section');
const navLinks  = document.querySelectorAll('.navbar a');
const header    = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Sticky header
    header.classList.toggle('sticky', scrollY > 80);

    // Active nav link
    sections.forEach(section => {
        const top    = section.offsetTop - 180;
        const height = section.offsetHeight;
        const id     = section.getAttribute('id');

        if (scrollY >= top && scrollY < top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ==========================================
// TYPING ANIMATION
// ==========================================
const multipleText = document.querySelector('.multiple-text');
const words = (window.getTranslation && window.getTranslation('typing_words')) || ['Étudiant BTS SIO – SISR'];
let wordIndex  = 0;
let charIndex  = 0;
let isErasing  = false;
const typingDelay   = 120;
const erasingDelay  = 65;
const newWordDelay  = 2200;
const startDelay    = 800;

function typeLoop() {
    const currentWord = words[wordIndex];

    if (!isErasing) {
        // Typing
        multipleText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
            isErasing = true;
            setTimeout(typeLoop, newWordDelay);
            return;
        }
        setTimeout(typeLoop, typingDelay);
    } else {
        // Erasing
        multipleText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isErasing = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeLoop, typingDelay);
            return;
        }
        setTimeout(typeLoop, erasingDelay);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (multipleText && words.length) {
        setTimeout(typeLoop, startDelay);
    }
});

// ==========================================
// SCROLL REVEAL (lightweight, no library)
// ==========================================
const revealElements = document.querySelectorAll(
    '.skills-card, .bts-card, .company-card, .tech-card, .project-card, .cert-graphic, .timeline-item, .exam-list li, .swot-card, .mission-card, .rss-card, .doc-card, .skills-matrix tr'
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            // Slight stagger based on DOM order
            const delay = (Array.from(revealElements).indexOf(entry.target) % 6) * 60;
            setTimeout(() => {
                entry.target.style.opacity    = '1';
                entry.target.style.transform  = 'translateY(0)';
            }, delay);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

revealElements.forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    revealObserver.observe(el);
});

// ==========================================
// CONTACT FORM
// ==========================================
const contactForm = document.getElementById('contactForm');
const submitBtn   = document.getElementById('submitBtn');
const btnText     = submitBtn?.querySelector('.btn-text');
const btnLoading  = submitBtn?.querySelector('.btn-loading');
const formSuccess = document.getElementById('formSuccess');
const formError   = document.getElementById('formError');

function setLoading(loading) {
    submitBtn.disabled = loading;
    btnText.style.display    = loading ? 'none'         : 'inline-flex';
    btnLoading.style.display = loading ? 'inline-flex'  : 'none';
}

function hideMessages() {
    formSuccess.style.display = 'none';
    formError.style.display   = 'none';
}

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        hideMessages();

        const firstname = contactForm.firstname.value.trim();
        const lastname  = contactForm.lastname.value.trim();
        const email     = contactForm.email.value.trim();
        const subject   = contactForm.subject.value.trim();
        const message   = contactForm.message.value.trim();
        const website   = contactForm.website.value.trim(); // honeypot — must stay empty

        // Basic validation
        if (!firstname || !lastname || !email || !subject || !message) {
            formError.style.display = 'flex';
            formError.querySelector('p').textContent = (window.getTranslation && window.getTranslation('form_err_empty')) || 'Please fill in all fields.';
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formError.style.display = 'flex';
            formError.querySelector('p').textContent = (window.getTranslation && window.getTranslation('form_err_email')) || 'Please enter a valid email address.';
            return;
        }

        setLoading(true);

        // Send via the Cloudflare Pages Function (/api/contact), backed by Resend
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstname, lastname, email, subject, message, website })
            });

            if (!res.ok) throw new Error('request_failed');

            formSuccess.style.display = 'flex';
            formSuccess.querySelector('p').textContent = (window.getTranslation && window.getTranslation('form_success')) || 'Message sent successfully!';
            contactForm.reset();
        } catch (err) {
            console.error('Contact form error:', err);
            // Fallback: open default mail client
            const mailtoBody = `Name: ${firstname} ${lastname}\nEmail: ${email}\n\n${message}`;
            window.location.href = `mailto:contact.sahedarshedalikhan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailtoBody)}`;
            formError.style.display = 'flex';
            formError.querySelector('p').textContent = (window.getTranslation && window.getTranslation('form_error')) || "Une erreur s'est produite. Votre client mail par défaut a été ouvert en secours.";
        } finally {
            setLoading(false);
        }
    });

    // Hide messages when user starts typing
    contactForm.addEventListener('input', hideMessages);
}