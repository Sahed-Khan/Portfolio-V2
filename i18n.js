// ==========================================
// MULTI-LANGUAGE SUPPORT (i18n) — FR / EN
// ==========================================

const translations = {

    // ── FRANÇAIS (langue par défaut — jury E5) ──
    fr: {
        nav_home: 'Accueil',
        nav_parcours: 'Parcours',
        nav_competences: 'Compétences',
        nav_entreprise: 'Entreprise',
        nav_missions: 'Missions',
        nav_projects: 'Projets',
        nav_veille: 'Veille Tech',
        nav_docs: 'Documents',
        nav_contact: 'Contact',

        greeting: 'Bonjour, je suis',
        home_desc: "Étudiant en BTS SIO, spécialité SISR — passionné par les réseaux, l'administration système et la cybersécurité.",
        download_cv: 'Télécharger mon CV',
        typing_words: ['Étudiant BTS SIO – SISR', 'Futur Administrateur Systèmes & Réseaux', 'Passionné de Cybersécurité', 'À la recherche d\'une alternance'],
        terminal_output: 'étudiant BTS SIO – SISR',

        // ── Parcours (À propos + Timeline) ──
        parcours_heading: 'Mon',
        parcours_heading_span: 'Parcours',
        parcours_subtitle: 'Étudiant BTS SIO – SISR',
        parcours_p1: "Je m'appelle Sahed Arshed Ali Khan. Je suis actuellement inscrit en BTS SIO (Services Informatiques aux Organisations), spécialité SISR (Solutions d'Infrastructure, Systèmes et Réseaux) au CFA Aurlom à Paris.",
        parcours_p2: "Je suis passionné par les réseaux, l'administration système et la cybersécurité. Après une réorientation depuis un parcours scientifique (BUT Mesures Physiques), j'ai choisi l'informatique pour allier rigueur analytique et goût du concret : configurer, dépanner, sécuriser.",
        parcours_p3: "Mon objectif : devenir administrateur systèmes et réseaux, avec une spécialisation progressive vers la cybersécurité (détection d'intrusion, durcissement d'infrastructures).",
        parcours_btn: 'Voir mon parcours académique',

        timeline_heading: 'Mon',
        timeline_heading_span: 'Parcours Académique',
        tl1_title: 'BTS SIO – SISR',
        tl1_desc: "En cours de formation BTS SIO – SISR, axée sur l'administration système, la gestion réseau, l'infrastructure IT et la cybersécurité.",
        tl2_title: 'BTS CIEL – Option A',
        tl2_desc: "Première année en BTS CIEL (Cybersécurité), apprentissage des fondamentaux de la sécurité informatique, de la protection réseau et de l'administration système.",
        tl3_title: 'BUT Mesures Physiques',
        tl3_desc: "Programme BUT en Physique (3 ans) à l'IUT d'Orsay. Développement d'une pensée analytique qui a guidé ma réorientation vers l'IT et les réseaux.",
        tl4_title: 'Baccalauréat Général',
        tl4_desc: 'Baccalauréat général, spécialités Mathématiques et Physique — Lycée Henri Wallon, Aubervilliers.',

        // ── BTS SIO ──
        bts_heading: 'BTS',
        bts_heading_span: 'SIO',
        bts_main_title: "Qu'est-ce que le BTS SIO ?",
        bts_main_p1: "Le BTS SIO (Brevet de Technicien Supérieur Services Informatiques aux Organisations) est un diplôme de l'enseignement supérieur de deux ans, reconnu par l'État (RNCP niveau 5). Il forme des professionnels IT capables de gérer et développer les systèmes d'information d'une organisation.",
        bts_main_p2: "Le programme combine connaissances théoriques et projets pratiques : administration système, réseaux, développement logiciel, bases de données et cybersécurité.",
        bts_slam_title: 'Option SLAM',
        bts_slam_p: '"Solutions Logicielles et Applications Métiers" — développement logiciel et conception d\'applications : langages de programmation, développement web, bases de données, sécurité applicative.',
        bts_sisr_title: 'Option SISR',
        bts_sisr_badge: 'Ma spécialité',
        bts_sisr_p: '"Solutions d\'Infrastructure, Systèmes et Réseaux" — installation, administration et sécurisation des infrastructures IT : configuration réseau, gestion de serveurs, supervision des systèmes, sécurité des services numériques.',

        // ── Compétences ──
        competences_heading: 'Mes',
        competences_heading_span: 'Compétences',
        competences_intro: "Compétences rattachées au bloc <strong>« Support et mise à disposition de services informatiques »</strong> (Épreuve E5), acquises en formation et en stage.",
        skill_prog_title: 'Programmation',
        skill_prog_p: 'Maîtrise de <strong>JavaScript, C et Python</strong>. Expérience pratique en scripting et résolution de problèmes.',
        skill_web_title: 'Développement Web',
        skill_web_p: "Développement d'applications web avec <strong>HTML, CSS et JavaScript</strong>. Création de sites responsives.",
        skill_db_title: 'Base de données',
        skill_db_p: 'Connaissance des bases relationnelles et <strong>MySQL</strong> pour stocker, gérer et interroger des données.',
        skill_design_title: 'Logiciels & Modélisation',
        skill_design_p: 'Modélisation 3D avec <strong>SolidWorks</strong>. Développement de jeux 2D avec <strong>Godot Engine</strong>.',
        skill_net_title: 'Réseau & Virtualisation',
        skill_net_p: 'Environnements virtuels avec <strong>VMware</strong>. Configuration de <strong>pfSense, Kali Linux, Debian</strong>. Analyse réseau avec <strong>Wireshark & Nmap</strong>. Gestion des incidents avec <strong>GLPI</strong>.',
        skill_lang_title: 'Langues',
        skill_lang_p: 'Bengali / Bangla – Langue maternelle<br>Français – Langue maternelle<br>Anglais – Niveau B2 (certifié EF SET)',

        comp_table_title: 'Tableau de synthèse des compétences',
        comp_table_col1: 'Compétence (référentiel BTS SIO)',
        comp_table_col2: 'Acquise via',
        comp_table_col3: 'Niveau',
        comp_row1_c1: "Administrer les systèmes informatiques",
        comp_row1_c2: 'TP Linux/Windows Server, formation',
        comp_row1_c3: 'En cours d\'acquisition',
        comp_row2_c1: 'Gérer le patrimoine informatique (GLPI)',
        comp_row2_c2: 'Formation, projets pratiques',
        comp_row2_c3: 'En cours d\'acquisition',
        comp_row3_c1: "Répondre aux incidents et demandes d'assistance",
        comp_row3_c2: 'À compléter avec le stage',
        comp_row3_c3: 'À évaluer en entreprise',
        comp_row4_c1: 'Développer la présence en ligne (site, sécurité)',
        comp_row4_c2: 'Projet personnel — ce portfolio',
        comp_row4_c3: 'Acquise',
        comp_row5_c1: 'Travailler en mode projet',
        comp_row5_c2: 'Projets académiques (honeypot, cryptographie)',
        comp_row5_c3: 'En cours d\'acquisition',
        comp_table_note: '⚠️ Tableau à mettre à jour avec le tableau de synthèse officiel (format PDF/XLSX) exigé pour l\'épreuve E5.',

        certs_heading: 'Mes',
        certs_heading_span: 'Certifications',
        cert1_title: 'Certificat EF SET Anglais',
        cert1_desc: 'Niveau B2 – Compétence en anglais',
        cert_view: 'Voir le certificat',
        cert2_title: 'Cisco Introduction à la Cybersécurité',
        cert2_desc: 'Cisco Networking Academy',

        // ── Entreprise / Stage ──
        entreprise_heading: 'Entreprise',
        entreprise_heading_span: "d'Accueil",
        entreprise_notice: "⚠️ Section à compléter dès la signature de la convention de stage/alternance. Structure conforme aux exigences de l'épreuve E5 (fiche entreprise + SWOT).",
        entreprise_id_title: 'Identification',
        entreprise_id_denomination: 'Dénomination : ',
        entreprise_id_adresse: 'Adresse : ',
        entreprise_id_forme: 'Forme juridique : ',
        entreprise_id_taille: 'Taille : ',
        entreprise_id_effectif: 'Effectif : ',
        entreprise_id_secteur: "Secteur d'activité : ",
        entreprise_id_placeholder: 'À compléter',
        entreprise_hist_title: 'Historique',
        entreprise_hist_p: "À compléter : date de création, évolution de l'entreprise, faits marquants.",
        entreprise_rgpd_title: 'RGPD',
        entreprise_rgpd_p: "À compléter : politique de protection des données personnelles de l'entreprise, DPO désigné ou non, outils de conformité utilisés.",
        entreprise_strategie_title: 'Orientations stratégiques',
        entreprise_strategie_p: "À compléter : axes de développement, positionnement marché, transformation numérique en cours.",
        entreprise_rse_title: 'RSE',
        entreprise_rse_p: "À compléter : démarche de responsabilité sociétale (environnement, social, gouvernance).",
        swot_title: 'Analyse SWOT',
        swot_forces: 'Forces',
        swot_forces_p: 'À compléter',
        swot_faiblesses: 'Faiblesses',
        swot_faiblesses_p: 'À compléter',
        swot_opportunites: 'Opportunités',
        swot_opportunites_p: 'À compléter',
        swot_menaces: 'Menaces',
        swot_menaces_p: 'À compléter',

        // ── Missions ──
        missions_heading: 'Mes',
        missions_heading_span: 'Missions',
        missions_entreprise_title: 'Missions réalisées en entreprise',
        missions_entreprise_notice: '⚠️ À compléter après le début du stage/alternance.',
        mission_field_objectifs: 'Objectifs',
        mission_field_moyens: 'Moyens utilisés',
        mission_field_resultats: 'Résultats obtenus',
        mission_field_difficultes: 'Difficultés rencontrées',
        mission_field_competences: 'Compétences acquises',
        mission_placeholder: 'À compléter',
        missions_conclusion_title: 'Conclusion sur les missions',
        missions_conclusion_p: "À compléter : bilan global des missions en entreprise, apports professionnels, points à améliorer.",

        // ── Projets techniques ──
        projects_heading: 'Mes',
        projects_heading_span: 'Projets Techniques',
        projects_intro: 'Projets académiques et personnels réalisés dans le cadre de ma formation.',
        proj_field_contexte: 'Contexte / Objectifs',
        proj_field_moyens: 'Moyens utilisés',
        proj_field_resultats: 'Résultats',
        proj_field_autocritique: 'Auto-critique',

        proj1_title: 'Honeypot Cowrie',
        proj1_tag: 'Ubuntu Server / Kali Linux',
        proj1_contexte: "Déployer un honeypot (système leurre) en environnement virtualisé pour simuler un serveur vulnérable, attirer des attaquants et analyser leurs tentatives d'intrusion.",
        proj1_moyens: 'VM Ubuntu Server + Kali Linux (VMware), Cowrie (émulation SSH/Telnet), journalisation des sessions.',
        proj1_resultats: "Captures de tentatives de connexion, commandes exécutées par les attaquants simulés, et logs exploitables pour l'analyse de sécurité.",
        proj1_autocritique: "Environnement isolé mais pourrait être enrichi avec un tableau de bord de visualisation (type ELK) pour l'analyse des logs en temps réel.",

        proj2_title: 'Chiffre de César – Encrypt Info',
        proj2_tag: 'Langage C',
        proj2_contexte: 'Implémenter un algorithme de chiffrement/déchiffrement de texte (chiffre de César) en C pour comprendre les bases de la cryptographie classique.',
        proj2_moyens: 'Langage C, manipulation de chaînes de caractères, compilation GCC.',
        proj2_resultats: 'Programme fonctionnel chiffrant et déchiffrant du texte selon une clé (1-25), avec gestion des majuscules/minuscules.',
        proj2_autocritique: "Chiffrement volontairement simple (pédagogique) — non sécurisé pour un usage réel ; bonne première approche avant d'aborder AES/RSA.",

        proj3_title: 'Cryptographie sur Linux',
        proj3_tag: 'Linux / OpenSSL',
        proj3_contexte: 'Explorer le chiffrement de fichiers et la gestion de clés sous Linux dans le cadre des TP de cybersécurité.',
        proj3_moyens: 'OpenSSL, GPG, bibliothèques natives Linux.',
        proj3_resultats: 'Fichiers chiffrés/déchiffrés avec succès, génération et gestion de paires de clés.',
        proj3_autocritique: "Bonne mise en pratique des concepts théoriques ; à approfondir avec la gestion d'une infrastructure à clés publiques (PKI) complète.",
        view_pdf: 'Voir le PDF',

        // ── Veille technologique ──
        veille_heading: 'Veille',
        veille_heading_span: 'Technologique',
        veille_intro: "Annuaire de flux RSS suivis dans le cadre de ma veille technologique — cybersécurité, piratage, cryptographie, VPN et RGPD.",
        veille_cat1_title: 'Cybersécurité & Alertes',
        veille_cat2_title: 'Piratage & Threat Intelligence',
        veille_cat3_title: 'Cryptographie',
        veille_cat4_title: 'VPN & Réseaux',
        veille_cat5_title: 'RGPD & Vie Privée',
        veille_feedly_note: "Agrégation quotidienne via <strong>Feedly</strong> (Threat Intelligence board), classée par catégorie ci-dessus.",

        // ── Documents ──
        docs_heading: 'Documents &',
        docs_heading_span: 'Synthèse',
        docs_intro: "Documents obligatoires pour l'épreuve E5.",
        doc1_title: 'Tableau de synthèse',
        doc1_desc: 'Synthèse des compétences et missions (format XLSX/PDF).',
        doc2_title: 'Curriculum Vitae',
        doc2_desc: 'CV à jour au format PDF.',
        doc3_title: 'Attestations de stage',
        doc3_desc: "À ajouter dès réception (signées par l'entreprise).",
        doc_download: 'Télécharger',
        doc_pending: 'À venir',

        conclusion_heading: 'Conclusion &',
        conclusion_heading_span: 'Projet Professionnel',
        conclusion_p1: "Ce BTS SIO – SISR m'a permis de consolider des compétences techniques (administration système, réseaux, sécurité) et transversales (rigueur, autonomie, travail en mode projet).",
        conclusion_p2: "Mon projet professionnel : intégrer une entreprise en tant qu'administrateur systèmes et réseaux, avec une spécialisation progressive vers la cybersécurité (SOC, détection d'intrusion, durcissement d'infrastructures).",

        // ── Contact ──
        contact_heading: 'Contact',
        contact_heading_span: 'Me',
        get_in_touch: 'Me Contacter',
        label_email: 'E-mail',
        label_loc: 'Localisation',
        label_linkedin: 'LinkedIn',
        label_github: 'GitHub',
        form_firstname: 'Prénom',
        form_lastname: 'Nom',
        form_email: 'Adresse e-mail',
        form_subject: 'Sujet',
        form_message: 'Votre message',
        form_send: 'Envoyer le message',
        form_sending: 'Envoi…',
        form_success: 'Message envoyé avec succès ! Je vous répondrai bientôt.',
        form_error: "Une erreur s'est produite. Réessayez ou contactez-moi directement par e-mail.",
        form_err_empty: 'Veuillez remplir tous les champs.',
        form_err_email: 'Veuillez entrer une adresse e-mail valide.',
        form_mailto_success: 'Ouverture de votre client mail… Votre e-mail est pré-rempli et prêt à être envoyé !',

        footer_copy: '© 2026 Sahed Arshed Ali Khan. Tous droits réservés.',
    },

    // ── ENGLISH ──────────────────────────────
    en: {
        nav_home: 'Home',
        nav_parcours: 'Journey',
        nav_competences: 'Skills',
        nav_entreprise: 'Company',
        nav_missions: 'Missions',
        nav_projects: 'Projects',
        nav_veille: 'Tech Watch',
        nav_docs: 'Documents',
        nav_contact: 'Contact',

        greeting: "Hello, I'm",
        home_desc: 'BTS SIO student, specializing in SISR — passionate about networking, system administration, and cybersecurity.',
        download_cv: 'Download my CV',
        typing_words: ['BTS SIO – SISR Student', 'Future Systems & Network Administrator', 'Cybersecurity Enthusiast', 'Looking for an apprenticeship'],
        terminal_output: 'BTS SIO – SISR student',

        parcours_heading: 'My',
        parcours_heading_span: 'Journey',
        parcours_subtitle: 'BTS SIO – SISR Student',
        parcours_p1: 'My name is Sahed Arshed Ali Khan. I am currently enrolled in the BTS SIO program (IT Services for Organizations), specializing in SISR (Infrastructure, Systems and Networks Solutions) at CFA Aurlom, Paris.',
        parcours_p2: 'I am passionate about networking, system administration, and cybersecurity. After reorienting from a scientific background (Physical Measurements degree), I chose IT to combine analytical rigor with hands-on problem solving.',
        parcours_p3: 'My goal: become a systems and network administrator, with a progressive specialization toward cybersecurity (intrusion detection, infrastructure hardening).',
        parcours_btn: 'View my academic journey',

        timeline_heading: 'My',
        timeline_heading_span: 'Academic Journey',
        tl1_title: 'BTS SIO – SISR',
        tl1_desc: 'Currently pursuing BTS SIO – SISR, focused on system administration, network management, IT infrastructure, and cybersecurity.',
        tl2_title: 'BTS CIEL – Option A',
        tl2_desc: 'First year in BTS CIEL (Cybersecurity), learning fundamentals of information security, network protection, and system administration.',
        tl3_title: 'Physical Measurements Degree (BUT)',
        tl3_desc: 'Three-year BUT program in Physics at IUT Orsay. Developed analytical thinking that later guided my reorientation toward IT and networking.',
        tl4_title: 'General Baccalaureate',
        tl4_desc: 'General Baccalaureate, Mathematics and Physics specialization — Lycée Henri Wallon, Aubervilliers.',

        bts_heading: 'BTS',
        bts_heading_span: 'SIO',
        bts_main_title: 'What is the BTS SIO?',
        bts_main_p1: 'The BTS SIO is a two-year higher education diploma (French State-recognized, RNCP level 5). It trains IT professionals capable of managing and developing information systems within organizations.',
        bts_main_p2: 'The program combines theory and practical projects: system administration, networking, software development, databases, and cybersecurity.',
        bts_slam_title: 'SLAM Option',
        bts_slam_p: '"Software Solutions and Business Applications" — software development and application design: programming languages, web development, databases, application security.',
        bts_sisr_title: 'SISR Option',
        bts_sisr_badge: 'My track',
        bts_sisr_p: '"Infrastructure, Systems and Network Solutions" — installing, administering, and securing IT infrastructures: network configuration, server management, system monitoring, digital services security.',

        competences_heading: 'My',
        competences_heading_span: 'Skills',
        competences_intro: 'Skills mapped to the <strong>"IT Support and Service Delivery"</strong> competency block (E5 exam), acquired through coursework and internship.',
        skill_prog_title: 'Programming',
        skill_prog_p: 'Proficiency in <strong>JavaScript, C, and Python</strong>. Hands-on experience in scripting and problem-solving.',
        skill_web_title: 'Web Development',
        skill_web_p: 'Web application development with <strong>HTML, CSS, and JavaScript</strong>. Responsive site creation.',
        skill_db_title: 'Databases',
        skill_db_p: 'Knowledge of relational databases and <strong>MySQL</strong> for storing, managing, and querying data.',
        skill_design_title: 'Software & Modeling',
        skill_design_p: '3D modeling with <strong>SolidWorks</strong>. 2D game development with <strong>Godot Engine</strong>.',
        skill_net_title: 'Network & Virtualization',
        skill_net_p: 'Virtual environments with <strong>VMware</strong>. Configuration of <strong>pfSense, Kali Linux, Debian</strong>. Network analysis with <strong>Wireshark & Nmap</strong>. Incident management with <strong>GLPI</strong>.',
        skill_lang_title: 'Languages',
        skill_lang_p: 'Bengali / Bangla – Native<br>French – Native<br>English – B2 Level (EF SET Certified)',

        comp_table_title: 'Skills summary table',
        comp_table_col1: 'Skill (BTS SIO curriculum)',
        comp_table_col2: 'Acquired via',
        comp_table_col3: 'Level',
        comp_row1_c1: 'Administer IT systems',
        comp_row1_c2: 'Linux/Windows Server labs, coursework',
        comp_row1_c3: 'In progress',
        comp_row2_c1: 'Manage IT asset inventory (GLPI)',
        comp_row2_c2: 'Coursework, practical projects',
        comp_row2_c3: 'In progress',
        comp_row3_c1: 'Handle incidents & support requests',
        comp_row3_c2: 'To complete with internship',
        comp_row3_c3: 'To be assessed on-site',
        comp_row4_c1: 'Build & maintain online presence (site, security)',
        comp_row4_c2: 'Personal project — this portfolio',
        comp_row4_c3: 'Acquired',
        comp_row5_c1: 'Work in project mode',
        comp_row5_c2: 'Academic projects (honeypot, cryptography)',
        comp_row5_c3: 'In progress',
        comp_table_note: '⚠️ Table to be updated with the official summary table (PDF/XLSX) required for the E5 exam.',

        certs_heading: 'My',
        certs_heading_span: 'Certifications',
        cert1_title: 'EF SET English Certificate',
        cert1_desc: 'B2 Level – English Proficiency',
        cert_view: 'View Certificate',
        cert2_title: 'Cisco Introduction to Cybersecurity',
        cert2_desc: 'Cisco Networking Academy',

        entreprise_heading: 'Host',
        entreprise_heading_span: 'Company',
        entreprise_notice: '⚠️ Section to complete once the internship/apprenticeship agreement is signed. Structured per E5 exam requirements (company profile + SWOT).',
        entreprise_id_title: 'Identification',
        entreprise_id_denomination: 'Company name: ',
        entreprise_id_adresse: 'Address: ',
        entreprise_id_forme: 'Legal form: ',
        entreprise_id_taille: 'Size: ',
        entreprise_id_effectif: 'Headcount: ',
        entreprise_id_secteur: 'Industry: ',
        entreprise_id_placeholder: 'To be completed',
        entreprise_hist_title: 'History',
        entreprise_hist_p: 'To complete: founding date, company evolution, key milestones.',
        entreprise_rgpd_title: 'GDPR',
        entreprise_rgpd_p: 'To complete: personal data protection policy, designated DPO or not, compliance tools used.',
        entreprise_strategie_title: 'Strategic Orientation',
        entreprise_strategie_p: 'To complete: growth areas, market positioning, ongoing digital transformation.',
        entreprise_rse_title: 'CSR',
        entreprise_rse_p: 'To complete: corporate social responsibility approach (environmental, social, governance).',
        swot_title: 'SWOT Analysis',
        swot_forces: 'Strengths',
        swot_forces_p: 'To be completed',
        swot_faiblesses: 'Weaknesses',
        swot_faiblesses_p: 'To be completed',
        swot_opportunites: 'Opportunities',
        swot_opportunites_p: 'To be completed',
        swot_menaces: 'Threats',
        swot_menaces_p: 'To be completed',

        missions_heading: 'My',
        missions_heading_span: 'Missions',
        missions_entreprise_title: 'Missions carried out on-site',
        missions_entreprise_notice: '⚠️ To complete once the internship/apprenticeship starts.',
        mission_field_objectifs: 'Objectives',
        mission_field_moyens: 'Resources used',
        mission_field_resultats: 'Results achieved',
        mission_field_difficultes: 'Difficulties encountered',
        mission_field_competences: 'Skills acquired',
        mission_placeholder: 'To be completed',
        missions_conclusion_title: 'Conclusion on missions',
        missions_conclusion_p: 'To complete: overall assessment of on-site missions, professional gains, areas for improvement.',

        projects_heading: 'My',
        projects_heading_span: 'Technical Projects',
        projects_intro: 'Academic and personal projects carried out during my training.',
        proj_field_contexte: 'Context / Objectives',
        proj_field_moyens: 'Resources used',
        proj_field_resultats: 'Results',
        proj_field_autocritique: 'Self-assessment',

        proj1_title: 'Cowrie Honeypot',
        proj1_tag: 'Ubuntu Server / Kali Linux',
        proj1_contexte: 'Deploy a honeypot (decoy system) in a virtualized environment to simulate a vulnerable server, attract attackers, and analyze their intrusion attempts.',
        proj1_moyens: 'Ubuntu Server + Kali Linux VMs (VMware), Cowrie (SSH/Telnet emulation), session logging.',
        proj1_resultats: 'Captured connection attempts, commands executed by simulated attackers, and logs usable for security analysis.',
        proj1_autocritique: 'Isolated environment, but could be enriched with an ELK-style dashboard for real-time log analysis.',

        proj2_title: 'Caesar Cipher – Encrypt Info',
        proj2_tag: 'C Language',
        proj2_contexte: 'Implement a text encryption/decryption algorithm (Caesar cipher) in C to understand classical cryptography basics.',
        proj2_moyens: 'C language, string manipulation, GCC compilation.',
        proj2_resultats: 'Functional program encrypting/decrypting text with a key (1-25), handling upper/lowercase.',
        proj2_autocritique: 'Deliberately simple (educational) cipher — not secure for real use; a good first step before AES/RSA.',

        proj3_title: 'Cryptography on Linux',
        proj3_tag: 'Linux / OpenSSL',
        proj3_contexte: 'Explore file encryption and key management on Linux as part of cybersecurity labs.',
        proj3_moyens: 'OpenSSL, GPG, native Linux libraries.',
        proj3_resultats: 'Files successfully encrypted/decrypted, key pair generation and management.',
        proj3_autocritique: 'Good practical application of theory; to be deepened with a full public key infrastructure (PKI).',
        view_pdf: 'View PDF',

        veille_heading: 'Technology',
        veille_heading_span: 'Watch',
        veille_intro: 'Directory of RSS feeds followed as part of my technology watch — cybersecurity, hacking, cryptography, VPN and GDPR.',
        veille_cat1_title: 'Cybersecurity & Alerts',
        veille_cat2_title: 'Hacking & Threat Intelligence',
        veille_cat3_title: 'Cryptography',
        veille_cat4_title: 'VPN & Networks',
        veille_cat5_title: 'GDPR & Privacy',
        veille_feedly_note: 'Daily aggregation via <strong>Feedly</strong> (Threat Intelligence board), sorted by category above.',

        docs_heading: 'Documents &',
        docs_heading_span: 'Summary',
        docs_intro: 'Mandatory documents for the E5 exam.',
        doc1_title: 'Summary Table',
        doc1_desc: 'Skills and missions summary (XLSX/PDF format).',
        doc2_title: 'Curriculum Vitae',
        doc2_desc: 'Up-to-date CV in PDF format.',
        doc3_title: 'Internship Certificates',
        doc3_desc: 'To be added once received (signed by the company).',
        doc_download: 'Download',
        doc_pending: 'Coming soon',

        conclusion_heading: 'Conclusion &',
        conclusion_heading_span: 'Career Plan',
        conclusion_p1: 'This BTS SIO – SISR allowed me to build technical skills (system administration, networking, security) and transferable ones (rigor, autonomy, project work).',
        conclusion_p2: 'My career plan: join a company as a systems and network administrator, with a progressive specialization toward cybersecurity (SOC, intrusion detection, infrastructure hardening).',

        contact_heading: 'Contact',
        contact_heading_span: 'Me',
        get_in_touch: 'Get in Touch',
        label_email: 'Email',
        label_loc: 'Location',
        label_linkedin: 'LinkedIn',
        label_github: 'GitHub',
        form_firstname: 'First Name',
        form_lastname: 'Last Name',
        form_email: 'Email Address',
        form_subject: 'Subject',
        form_message: 'Your Message',
        form_send: 'Send Message',
        form_sending: 'Sending…',
        form_success: "Message sent successfully! I'll get back to you soon.",
        form_error: 'Something went wrong. Please try again or email me directly.',
        form_err_empty: 'Please fill in all fields.',
        form_err_email: 'Please enter a valid email address.',
        form_mailto_success: 'Opening your mail client… Your email is pre-filled and ready to send!',

        footer_copy: '© 2026 Sahed Arshed Ali Khan. All rights reserved.',
    },
};

// ── Language metadata for the selector UI ────
const LANG_META = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English',  flag: '🇬🇧' },
];

// ── Apply translations to DOM ─────────────────
function applyLang(lang) {
    const t = translations[lang];
    if (!t) return;

    document.documentElement.setAttribute('lang', lang);

    const setText = (sel, key, html = false) => {
        document.querySelectorAll(sel).forEach(el => {
            if (html) el.innerHTML = t[key] ?? el.innerHTML;
            else el.textContent = t[key] ?? el.textContent;
        });
    };
    const setHTML = (sel, key) => setText(sel, key, true);

    // Navbar
    const navLinks = document.querySelectorAll('.navbar a');
    const navKeys = ['nav_home','nav_parcours','nav_competences','nav_entreprise','nav_missions','nav_projects','nav_veille','nav_docs','nav_contact'];
    navLinks.forEach((link, i) => { if (navKeys[i]) link.textContent = t[navKeys[i]] ?? link.textContent; });

    // Home
    setText('[data-i18n="greeting"]', 'greeting');
    setText('[data-i18n="home_desc"]', 'home_desc');
    setText('[data-i18n="download_cv"]', 'download_cv');
    setText('[data-i18n="terminal_output"]', 'terminal_output');

    // Parcours
    setText('[data-i18n="parcours_heading"]', 'parcours_heading');
    setText('[data-i18n="parcours_heading_span"]', 'parcours_heading_span');
    setText('[data-i18n="parcours_subtitle"]', 'parcours_subtitle');
    setText('[data-i18n="parcours_p1"]', 'parcours_p1');
    setText('[data-i18n="parcours_p2"]', 'parcours_p2');
    setText('[data-i18n="parcours_p3"]', 'parcours_p3');
    setText('[data-i18n="parcours_btn"]', 'parcours_btn');

    setText('[data-i18n="timeline_heading"]', 'timeline_heading');
    setText('[data-i18n="timeline_heading_span"]', 'timeline_heading_span');
    ['tl1','tl2','tl3','tl4'].forEach(k => {
        setText(`[data-i18n="${k}_title"]`, `${k}_title`);
        setText(`[data-i18n="${k}_desc"]`, `${k}_desc`);
    });

    // BTS SIO
    setText('[data-i18n="bts_heading"]', 'bts_heading');
    setText('[data-i18n="bts_heading_span"]', 'bts_heading_span');
    setText('[data-i18n="bts_main_title"]', 'bts_main_title');
    setText('[data-i18n="bts_main_p1"]', 'bts_main_p1');
    setText('[data-i18n="bts_main_p2"]', 'bts_main_p2');
    setText('[data-i18n="bts_slam_title"]', 'bts_slam_title');
    setText('[data-i18n="bts_slam_p"]', 'bts_slam_p');
    setText('[data-i18n="bts_sisr_title"]', 'bts_sisr_title');
    setText('[data-i18n="bts_sisr_badge"]', 'bts_sisr_badge');
    setText('[data-i18n="bts_sisr_p"]', 'bts_sisr_p');

    // Compétences
    setText('[data-i18n="competences_heading"]', 'competences_heading');
    setText('[data-i18n="competences_heading_span"]', 'competences_heading_span');
    setHTML('[data-i18n="competences_intro"]', 'competences_intro');
    ['prog','web','db','design','net','lang'].forEach(k => {
        setText(`[data-i18n="skill_${k}_title"]`, `skill_${k}_title`);
        const el = document.querySelector(`[data-i18n="skill_${k}_p"]`);
        if (el) el.innerHTML = t[`skill_${k}_p`] ?? el.innerHTML;
    });

    setText('[data-i18n="comp_table_title"]', 'comp_table_title');
    setText('[data-i18n="comp_table_col1"]', 'comp_table_col1');
    setText('[data-i18n="comp_table_col2"]', 'comp_table_col2');
    setText('[data-i18n="comp_table_col3"]', 'comp_table_col3');
    for (let i = 1; i <= 5; i++) {
        setText(`[data-i18n="comp_row${i}_c1"]`, `comp_row${i}_c1`);
        setText(`[data-i18n="comp_row${i}_c2"]`, `comp_row${i}_c2`);
        setText(`[data-i18n="comp_row${i}_c3"]`, `comp_row${i}_c3`);
    }
    setText('[data-i18n="comp_table_note"]', 'comp_table_note');

    // Certifications
    setText('[data-i18n="certs_heading"]', 'certs_heading');
    setText('[data-i18n="certs_heading_span"]', 'certs_heading_span');
    setText('[data-i18n="cert1_title"]', 'cert1_title');
    setText('[data-i18n="cert1_desc"]', 'cert1_desc');
    setText('[data-i18n="cert2_title"]', 'cert2_title');
    setText('[data-i18n="cert2_desc"]', 'cert2_desc');
    document.querySelectorAll('[data-i18n="cert_view"]').forEach(el => el.textContent = t['cert_view'] ?? el.textContent);

    // Entreprise
    setText('[data-i18n="entreprise_heading"]', 'entreprise_heading');
    setText('[data-i18n="entreprise_heading_span"]', 'entreprise_heading_span');
    setText('[data-i18n="entreprise_notice"]', 'entreprise_notice');
    setText('[data-i18n="entreprise_id_title"]', 'entreprise_id_title');
    ['denomination','adresse','forme','taille','effectif','secteur'].forEach(k => {
        setText(`[data-i18n="entreprise_id_${k}"]`, `entreprise_id_${k}`);
    });
    document.querySelectorAll('[data-i18n="entreprise_id_placeholder"]').forEach(el => el.textContent = t['entreprise_id_placeholder'] ?? el.textContent);
    ['hist','rgpd','strategie','rse'].forEach(k => {
        setText(`[data-i18n="entreprise_${k}_title"]`, `entreprise_${k}_title`);
        setText(`[data-i18n="entreprise_${k}_p"]`, `entreprise_${k}_p`);
    });
    setText('[data-i18n="swot_title"]', 'swot_title');
    ['forces','faiblesses','opportunites','menaces'].forEach(k => {
        setText(`[data-i18n="swot_${k}"]`, `swot_${k}`);
        setText(`[data-i18n="swot_${k}_p"]`, `swot_${k}_p`);
    });

    // Missions
    setText('[data-i18n="missions_heading"]', 'missions_heading');
    setText('[data-i18n="missions_heading_span"]', 'missions_heading_span');
    setText('[data-i18n="missions_entreprise_title"]', 'missions_entreprise_title');
    setText('[data-i18n="missions_entreprise_notice"]', 'missions_entreprise_notice');
    ['objectifs','moyens','resultats','difficultes','competences'].forEach(k => {
        setText(`[data-i18n="mission_field_${k}"]`, `mission_field_${k}`);
    });
    document.querySelectorAll('[data-i18n="mission_placeholder"]').forEach(el => el.textContent = t['mission_placeholder'] ?? el.textContent);
    setText('[data-i18n="missions_conclusion_title"]', 'missions_conclusion_title');
    setText('[data-i18n="missions_conclusion_p"]', 'missions_conclusion_p');

    // Projets
    setText('[data-i18n="projects_heading"]', 'projects_heading');
    setText('[data-i18n="projects_heading_span"]', 'projects_heading_span');
    setText('[data-i18n="projects_intro"]', 'projects_intro');
    ['contexte','moyens','resultats','autocritique'].forEach(k => {
        document.querySelectorAll(`[data-i18n="proj_field_${k}"]`).forEach(el => el.textContent = t[`proj_field_${k}`] ?? el.textContent);
    });
    [1,2,3].forEach(n => {
        setText(`[data-i18n="proj${n}_title"]`, `proj${n}_title`);
        setText(`[data-i18n="proj${n}_tag"]`, `proj${n}_tag`);
        setText(`[data-i18n="proj${n}_contexte"]`, `proj${n}_contexte`);
        setText(`[data-i18n="proj${n}_moyens"]`, `proj${n}_moyens`);
        setText(`[data-i18n="proj${n}_resultats"]`, `proj${n}_resultats`);
        setText(`[data-i18n="proj${n}_autocritique"]`, `proj${n}_autocritique`);
    });
    document.querySelectorAll('[data-i18n="view_pdf"]').forEach(el => el.textContent = t['view_pdf'] ?? el.textContent);

    // Veille technologique
    setText('[data-i18n="veille_heading"]', 'veille_heading');
    setText('[data-i18n="veille_heading_span"]', 'veille_heading_span');
    setText('[data-i18n="veille_intro"]', 'veille_intro');
    for (let i = 1; i <= 5; i++) setText(`[data-i18n="veille_cat${i}_title"]`, `veille_cat${i}_title`);
    setHTML('[data-i18n="veille_feedly_note"]', 'veille_feedly_note');

    // Documents
    setText('[data-i18n="docs_heading"]', 'docs_heading');
    setText('[data-i18n="docs_heading_span"]', 'docs_heading_span');
    setText('[data-i18n="docs_intro"]', 'docs_intro');
    [1,2,3].forEach(n => {
        setText(`[data-i18n="doc${n}_title"]`, `doc${n}_title`);
        setText(`[data-i18n="doc${n}_desc"]`, `doc${n}_desc`);
    });
    document.querySelectorAll('[data-i18n="doc_download"]').forEach(el => el.textContent = t['doc_download'] ?? el.textContent);
    document.querySelectorAll('[data-i18n="doc_pending"]').forEach(el => el.textContent = t['doc_pending'] ?? el.textContent);

    setText('[data-i18n="conclusion_heading"]', 'conclusion_heading');
    setText('[data-i18n="conclusion_heading_span"]', 'conclusion_heading_span');
    setText('[data-i18n="conclusion_p1"]', 'conclusion_p1');
    setText('[data-i18n="conclusion_p2"]', 'conclusion_p2');

    // Contact
    setText('[data-i18n="contact_heading"]', 'contact_heading');
    setText('[data-i18n="contact_heading_span"]', 'contact_heading_span');
    setText('[data-i18n="get_in_touch"]', 'get_in_touch');
    setText('[data-i18n="label_email"]', 'label_email');
    setText('[data-i18n="label_loc"]', 'label_loc');
    setText('[data-i18n="label_linkedin"]', 'label_linkedin');
    setText('[data-i18n="label_github"]', 'label_github');
    document.querySelector('label[for="firstname"]') && (document.querySelector('label[for="firstname"]').textContent = t['form_firstname']);
    document.querySelector('label[for="lastname"]') && (document.querySelector('label[for="lastname"]').textContent = t['form_lastname']);
    document.querySelector('label[for="email"]') && (document.querySelector('label[for="email"]').textContent = t['form_email']);
    document.querySelector('label[for="subject"]') && (document.querySelector('label[for="subject"]').textContent = t['form_subject']);
    document.querySelector('label[for="message"]') && (document.querySelector('label[for="message"]').textContent = t['form_message']);
    const btnTextEl = document.querySelector('.btn-text');
    if (btnTextEl) btnTextEl.innerHTML = `<i class='bx bx-send'></i> ${t['form_send']}`;
    const btnLoadEl = document.querySelector('.btn-loading');
    if (btnLoadEl) btnLoadEl.innerHTML = `<i class='bx bx-loader-alt bx-spin'></i> ${t['form_sending']}`;

    // Footer
    setText('[data-i18n="footer_copy"]', 'footer_copy');

    // Typing animation words
    if (t.typing_words && typeof words !== 'undefined') {
        words.length = 0;
        t.typing_words.forEach(w => words.push(w));
    }

    localStorage.setItem('portfolio_lang', lang);
    window._currentLang = lang;
    window._currentT = t;
}

// ── Build & inject the language switcher UI ───
function buildLangSwitcher() {
    const switcher = document.createElement('div');
    switcher.className = 'lang-switcher';
    switcher.innerHTML = `
      <button class="lang-btn" id="langToggle" aria-label="Select language">
        <i class='bx bx-globe'></i>
        <span class="lang-current-label">FR</span>
        <i class='bx bx-chevron-down lang-chevron'></i>
      </button>
      <ul class="lang-dropdown" id="langDropdown" role="listbox">
        ${LANG_META.map(l => `
          <li class="lang-option" data-lang="${l.code}" role="option" tabindex="0">
            <span class="lang-flag">${l.flag}</span>
            <span class="lang-name">${l.label}</span>
          </li>`).join('')}
      </ul>
    `;

    const header = document.querySelector('.header');
    const menuIcon = document.querySelector('#menu-icon');
    if (header && menuIcon) {
        header.insertBefore(switcher, menuIcon);
    }

    const toggle = switcher.querySelector('#langToggle');
    const dropdown = switcher.querySelector('#langDropdown');
    const chevron = switcher.querySelector('.lang-chevron');
    const currentLabel = switcher.querySelector('.lang-current-label');

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const open = dropdown.classList.toggle('open');
        chevron.style.transform = open ? 'rotate(180deg)' : 'rotate(0)';
    });

    document.addEventListener('click', () => {
        dropdown.classList.remove('open');
        chevron.style.transform = 'rotate(0)';
    });

    switcher.querySelectorAll('.lang-option').forEach(opt => {
        const handler = () => {
            const lang = opt.dataset.lang;
            const meta = LANG_META.find(m => m.code === lang);
            if (meta) {
                currentLabel.textContent = meta.code.toUpperCase();
                switcher.querySelectorAll('.lang-option').forEach(o => o.classList.remove('active'));
                opt.classList.add('active');
            }
            applyLang(lang);
            dropdown.classList.remove('open');
            chevron.style.transform = 'rotate(0)';
        };
        opt.addEventListener('click', handler);
        opt.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') handler(); });
    });

    return { currentLabel, switcher };
}

// ── Init ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const { currentLabel, switcher } = buildLangSwitcher();

    const saved = localStorage.getItem('portfolio_lang');
    const preferred = saved && translations[saved] ? saved : 'fr';

    const activeOpt = switcher.querySelector(`[data-lang="${preferred}"]`);
    if (activeOpt) activeOpt.classList.add('active');
    const meta = LANG_META.find(m => m.code === preferred);
    if (meta) currentLabel.textContent = meta.code.toUpperCase();

    applyLang(preferred);
});

// ── Export helper for script.js ──────────────
window.getTranslation = (key) => {
    const lang = window._currentLang || 'fr';
    return (translations[lang] && translations[lang][key]) || (translations['fr'] && translations['fr'][key]) || '';
};
