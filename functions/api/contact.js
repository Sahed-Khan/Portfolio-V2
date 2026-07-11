const DESTINATION_EMAIL = 'contact.sahedarshedalikhan@gmail.com';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(data, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: { 'Content-Type': 'application/json' }
    });
}

export async function onRequestPost({ request, env }) {
    let body;
    try {
        body = await request.json();
    } catch {
        return json({ error: 'invalid_body' }, 400);
    }

    const firstname = (body.firstname || '').trim();
    const lastname  = (body.lastname || '').trim();
    const email     = (body.email || '').trim();
    const subject   = (body.subject || '').trim();
    const message   = (body.message || '').trim();

    if (!firstname || !lastname || !email || !subject || !message) {
        return json({ error: 'missing_fields' }, 400);
    }
    if (!EMAIL_REGEX.test(email)) {
        return json({ error: 'invalid_email' }, 400);
    }

    const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${env.RESEND_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            from: 'Portfolio <onboarding@resend.dev>',
            to: [DESTINATION_EMAIL],
            reply_to: email,
            subject: `[Portfolio] ${subject} — ${firstname} ${lastname}`,
            text: `Nom : ${firstname} ${lastname}\nEmail : ${email}\n\n${message}`
        })
    });

    if (!resendRes.ok) {
        return json({ error: 'send_failed' }, 502);
    }

    return json({ ok: true });
}
