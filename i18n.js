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
        home_desc: "Étudiant en BTS SIO SISR, je construis un profil DevSecOps : des infrastructures automatisées, conteneurisées et sécurisées dès la conception.",
        download_cv: 'Télécharger mon CV',
        typing_words: ['Étudiant BTS SIO – SISR', 'Futur Ingénieur DevSecOps', 'Docker · Kubernetes · CI/CD', 'Security by design'],
        terminal_output: "BTS SIO SISR → ingénieur DevSecOps",

        // ── Parcours (À propos + Timeline) ──
        parcours_heading: 'Mon',
        parcours_heading_span: 'Parcours',
        parcours_subtitle: "Étudiant BTS SIO – SISR · objectif DevSecOps",
        parcours_p1: "Je m'appelle Sahed Arshed Ali Khan. Je suis actuellement inscrit en BTS SIO (Services Informatiques aux Organisations), spécialité SISR (Solutions d'Infrastructure, Systèmes et Réseaux) au CFA Aurlom à Paris.",
        parcours_p2: "Après une réorientation depuis un parcours scientifique (BUT Mesures Physiques), j'ai choisi l'informatique pour allier rigueur analytique et goût du concret. Une première année en BTS CIEL (cybersécurité) puis le BTS SIO SISR m'ont donné un double socle : l'infrastructure et la sécurité.",
        parcours_p3: "Mon objectif : devenir ingénieur DevSecOps — automatiser le déploiement des infrastructures et y intégrer la sécurité à chaque étape (build, tests, déploiement, exploitation) plutôt qu'en fin de chaîne. Mon stage, centré sur Docker, Kubernetes et la CI/CD, a confirmé cette orientation.",
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
        competences_intro: "Compétences techniques et activités du bloc <strong>« Support et mise à disposition de services informatiques »</strong> (Épreuve E5), illustrées par mes projets et mon stage.",
        skill_devsecops_title: "DevSecOps & automatisation",
        skill_devsecops_p: "<strong>CI/CD GitHub Actions</strong>, <strong>Docker, Kubernetes</strong>, gestion des secrets, moindre privilège (RBAC), sécurité applicative (<strong>OWASP</strong>), déploiement serverless Cloudflare (Workers, Pages).",
        skill_net_title: 'Réseaux',
        skill_net_p: '<strong>TCP/IP, VLAN, routage inter-VLAN</strong>, commutation, DNS, DHCP, VPN, ACL. <strong>Cisco, pfSense</strong>, Wireshark, Nmap.',
        skill_sys_title: 'Systèmes',
        skill_sys_p: '<strong>Windows Server</strong> (AD DS, DNS, DHCP, GPO), <strong>Active Directory</strong>, Linux (Debian, Ubuntu, Kali), Bash, PowerShell.',
        skill_virt_title: 'Virtualisation & conteneurs',
        skill_virt_p: "<strong>VMware Workstation</strong>, KVM, <strong>Docker</strong> (Dockerfile, BuildKit, registre), <strong>Kubernetes</strong> (kubeadm, kubectl, déploiements).",
        skill_secu_title: 'Supervision & sécurité',
        skill_secu_p: '<strong>SIEM (Wazuh, Splunk, ELK)</strong>, <strong>Zabbix</strong>, pare-feu, reverse proxy Nginx, SSL/TLS, OpenSSL, Fail2ban, <strong>MFA/TOTP</strong>, RGPD, RBAC.',
        skill_support_title: 'Support & outils',
        skill_support_p: "<strong>GLPI</strong> (ticketing / gestion de parc), Microsoft 365, <strong>Git</strong>, VS Code.",
        skill_dev_title: 'Développement',
        skill_dev_p: '<strong>TypeScript, JavaScript, Python</strong>, SQL (MySQL, SQLite) — dont architecture serverless (API REST, authentification par token) en stage.',
        skill_lang_title: 'Langues',
        skill_lang_p: 'Bengali / Bangla – Langue maternelle<br>Français – Langue maternelle<br>Anglais – Niveau B2 (certifié EF SET)',

        comp_table_title: 'Tableau de synthèse des compétences',
        comp_table_col1: 'Activité (bloc « Support et mise à disposition »)',
        comp_table_col2: 'Acquise via',
        comp_table_col3: 'Niveau',
        comp_row1_c1: 'Gérer le patrimoine informatique',
        comp_row1_c2: 'Stage : recensement et fiabilisation de 26 images de conteneurs ; GLPI en formation',
        comp_row1_c3: 'Maîtrisée',
        comp_row2_c1: "Répondre aux incidents et aux demandes d'assistance et d'évolution",
        comp_row2_c2: "Stage : diagnostic et correction des défaillances, évolutions d'une application web interne",
        comp_row2_c3: 'Maîtrisée',
        comp_row3_c1: "Développer la présence en ligne de l'organisation",
        comp_row3_c2: 'Projet : ce portfolio (mise en ligne, sécurité, référencement)',
        comp_row3_c3: 'Maîtrisée',
        comp_row4_c1: 'Travailler en mode projet',
        comp_row4_c2: 'Projets académiques (infra, cloud, sécurité) + planification du traitement des 26 images en stage',
        comp_row4_c3: 'Maîtrisée',
        comp_row5_c1: 'Mettre à disposition des utilisateurs un service informatique',
        comp_row5_c2: 'Stage : tests, déploiement Kubernetes et mise à disposition des labs ; supervision SIEM',
        comp_row5_c3: 'Maîtrisée',
        comp_row6_c1: 'Organiser son développement professionnel',
        comp_row6_c2: 'Veille technologique, identité professionnelle (LinkedIn, GitHub), projet professionnel DevSecOps',
        comp_row6_c3: 'En continu',
        comp_table_note: 'Activités du bloc « Support et mise à disposition de services informatiques » (épreuve E5), en correspondance avec mon tableau de synthèse.',

        certs_heading: 'Mes',
        certs_heading_span: 'Certifications',
        cert1_title: 'Certificat EF SET Anglais',
        cert1_desc: 'Niveau B2 – Compétence en anglais',
        cert_view: 'Voir le certificat',
        cert2_title: 'Cisco Introduction à la Cybersécurité',
        cert2_desc: 'Cisco Networking Academy',
        cert3_title: 'Cisco CCNA',
        cert3_desc: 'Cisco Networking Academy',
        cert4_title: 'Cisco CyberOps Associate',
        cert4_desc: 'Cisco Networking Academy',
        cert_pending: 'En cours de préparation',

        // ── Entreprise / Stage ──
        entreprise_heading: 'Entreprise',
        entreprise_heading_span: "d'Accueil",
        entreprise_notice: "⚠️ Fiche établie à partir d'informations publiques — forme juridique et effectif exact à confirmer.",
        entreprise_tab1_name: 'Caplogy & Novatiel',
        entreprise_id_title: 'Identification',
        entreprise_id_denomination: 'Dénomination : ',
        entreprise_id_denomination_val: 'Caplogy & Novatiel',
        entreprise_id_adresse: 'Adresse : ',
        entreprise_id_adresse_val: 'Vélizy-Villacoublay (78)',
        entreprise_id_forme: 'Forme juridique : ',
        entreprise_id_forme_val: 'Non communiquée publiquement — à confirmer',
        entreprise_id_taille: 'Taille : ',
        entreprise_id_taille_val: 'Groupe multi-entités (formation + services numériques)',
        entreprise_id_effectif: 'Effectif : ',
        entreprise_id_effectif_val: 'Non communiqué publiquement',
        entreprise_id_secteur: "Secteur d'activité : ",
        entreprise_id_secteur_val: 'Formation professionnelle certifiante dans le numérique (cloud, cybersécurité, réseaux), R&D/innovation, et prestations de développement via Novatiel',
        entreprise_hist_title: 'Historique',
        entreprise_hist_p: "Caplogy se positionne comme un groupe de formation certifiante dans le numérique (« Former, innover, faire grandir les talents du numérique »), avec une activité de R&D/innovation (prototypage, validation scientifique, publications) et une branche Novatiel dédiée aux prestations de développement et d'infrastructure. Dates précises de création et faits marquants à confirmer auprès de l'entreprise.",
        entreprise_rgpd_title: 'RGPD',
        entreprise_rgpd_p: "Dans le cadre de mes missions, j'ai participé à la mise en conformité RGPD des accès aux outils internes (authentification par token, gestion des droits RBAC). Politique RGPD globale de l'entreprise (DPO désigné, outils de conformité) à compléter.",
        entreprise_strategie_title: 'Orientations stratégiques',
        entreprise_strategie_p: "Développement de l'offre de formations certifiantes (cloud, cybersécurité, IA), structuration d'une activité R&D/innovation, et diversification via les prestations de développement et d'infrastructure (Novatiel).",
        entreprise_rse_title: 'RSE',
        entreprise_rse_p: "À compléter : démarche de responsabilité sociétale (environnement, social, gouvernance) — non documentée publiquement à ce jour.",
        swot_title: 'Analyse SWOT',
        swot_forces: 'Forces',
        swot_forces_p: "Positionnement double formation + développement (groupe Caplogy/Novatiel), diversité des expertises (cloud, cybersécurité, dev), catalogue de certifications reconnues (AWS, Azure, Cisco…).",
        swot_faiblesses: 'Faiblesses',
        swot_faiblesses_p: "Dépendance aux référentiels et certifications d'éditeurs tiers ; structure multi-entités pouvant complexifier la coordination interne.",
        swot_opportunites: 'Opportunités',
        swot_opportunites_p: "Forte demande de formation et de reconversion vers les métiers du numérique, essor du cloud et de la cybersécurité, montée en puissance de l'offre autour de l'IA.",
        swot_menaces: 'Menaces',
        swot_menaces_p: "Concurrence des plateformes de formation en ligne (MOOC) et des organismes agréés, évolution rapide des technologies imposant une mise à jour continue des contenus.",
        entreprise_fiche_btn: 'Consulter une fiche de mission détaillée (format E5)',

        // ── Missions ──
        missions_heading: 'Mes',
        missions_heading_span: 'Missions',
        missions_entreprise_title: 'Missions réalisées en entreprise',
        missions_entreprise_notice: "Stage de 1re année réalisé en 2026 — missions de supervision, de fiabilisation de conteneurs et de sécurité, rattachées aux activités du référentiel SISR.",
        mission_field_objectifs: 'Objectifs',
        mission_field_moyens: 'Moyens utilisés',
        mission_field_resultats: 'Résultats obtenus',
        mission_field_difficultes: 'Difficultés rencontrées',
        mission_field_competences: 'Compétences acquises',
        mission1_objectifs: "Déployer, valider et superviser des laboratoires de détection de sécurité (SIEM) destinés à la formation, et vérifier leur capacité à remonter des incidents.",
        mission1_moyens: "Conteneurs déployés sur Kubernetes, Wazuh (manager, indexer, dashboard), Splunk, pile ELK (Elasticsearch), surveillance d'intégrité des fichiers (FIM), analyse des journaux de démarrage et d'exécution.",
        mission1_resultats: "Laboratoires SIEM opérationnels de bout en bout ; détection confirmée (un fichier malveillant déposé déclenche la règle Wazuh 554) ; authentification Splunk et cluster Elasticsearch validés.",
        mission1_difficultes: "Services qui ne démarrent pas seuls au boot, verrou de migration du tableau de bord OpenSearch, compte admin Splunk non créé par défaut — diagnostiqués par lecture méthodique des journaux.",
        mission1_competences: "Exploiter, dépanner et superviser une solution d'infrastructure (référentiel SISR) : supervision, détection et analyse d'incidents, lecture de journaux.",
        mission1_title: "Mise en service et supervision de laboratoires SIEM",
        mission2_title: "Fiabilisation des images Docker d'une plateforme de labs cybersécurité",
        mission2_objectifs: "Tester, diagnostiquer et réparer les 26 images Docker d'une plateforme de labs pédagogiques en cybersécurité (Splunk, Wazuh, pfSense, Kali, OSINT, cryptographie…) avant leur publication.",
        mission2_moyens: "Docker / BuildKit, cluster Kubernetes de test, registre d'images local, kubectl port-forward, lecture des journaux de build et d'exécution, procédure de test identique pour chaque image.",
        mission2_resultats: "26 images sur 26 reconstruites, testées de bout en bout (build, exécution, déploiement Kubernetes) et livrées à l'équipe pour publication.",
        mission2_difficultes: "Des pannes systémiques communes à plusieurs images : clés GPG de dépôts expirées (signatures de paquets refusées), variable HOME incorrecte, module Python retiré en 3.13, trousseau gnome-keyring inutilisable sous Kubernetes.",
        mission2_competences: "Installer, tester et déployer une solution d'infrastructure (référentiel SISR) : sécurité de la chaîne d'approvisionnement logicielle, méthode de test reproductible, débogage de conteneurs et de déploiements Kubernetes.",
        mission3_title: "Audit de sécurité d'une application web interne",
        mission3_objectifs: "Relire le code d'une application web serverless avant sa passation et identifier les risques de sécurité et d'exploitation.",
        mission3_moyens: "Revue de code guidée par l'OWASP Top 10 (contrôle d'accès, authentification, gestion des secrets), analyse des scripts de déploiement, rédaction d'une documentation technique de passation.",
        mission3_resultats: "Faille de contrôle d'accès (IDOR) corrigée ; points de durcissement remontés à l'équipe (gestion des secrets, limitation de débit sur l'authentification, séparation stricte des environnements de déploiement) ; documentation technique remise.",
        mission3_difficultes: "Prioriser les correctifs sans bloquer les livraisons, et expliquer des risques techniques à des interlocuteurs non spécialistes.",
        mission3_competences: "Développer la présence en ligne et traiter les incidents de sécurité (référentiel SISR) : sécurité applicative, contrôle d'accès, sécurisation de la chaîne de déploiement, communication des risques.",
        missions_conclusion_title: 'Conclusion sur les missions',
        missions_conclusion_p: "Ce stage m'a fait passer d'environnements pédagogiques à une infrastructure réelle, où rapidité de livraison et sécurité doivent coexister. Automatiser les déploiements, fiabiliser les images de conteneurs et auditer le code avant la mise en production : c'est exactement le quotidien d'un ingénieur DevSecOps, et ce qui a fixé mon projet professionnel.",

        // ── Projets techniques ──
        projects_heading: 'Mes',
        projects_heading_span: 'Projets Techniques',
        projects_intro: "Projets liés au bloc « Support et mise à disposition de services informatiques ».",
        projects_notice: "⚠️ Projets en cours d'ajout.",
        proj_field_contexte: 'Contexte / Objectifs',
        proj_field_moyens: 'Moyens utilisés',
        proj_field_resultats: 'Résultats',
        proj_field_autocritique: 'Auto-critique',

        proj1_title: 'Infrastructure réseau multi-sites',
        proj1_tag: 'Cisco Packet Tracer',
        proj1_contexte: "Interconnecter 3 sites, segmenter le trafic par VLAN et sécuriser les échanges entre services.",
        proj1_moyens: 'VLAN, routage inter-VLAN, DHCP, DNS, ACL, adressage IP (VLSM), OSPF.',
        proj1_resultats: "3 sites interconnectés, trafic filtré et adressage IP structuré et évolutif.",
        proj1_autocritique: "Pourrait être enrichi avec de la haute disponibilité (HSRP/VRRP).",

        proj2_title: 'Infrastructure cloud privée supervisée',
        proj2_tag: 'VMware / Ubuntu Server',
        proj2_contexte: "Déployer un cloud privé auto-hébergé et sécuriser l'accès de bout en bout.",
        proj2_moyens: 'Nextcloud, reverse proxy Nginx, SSL/TLS, Fail2ban, MFA/TOTP, supervision Zabbix.',
        proj2_resultats: 'Accès chiffré et supervisé, blocage automatique des tentatives de brute-force.',
        proj2_autocritique: "À enrichir avec une sauvegarde externalisée automatisée.",

        proj3_title: 'Environnement virtualisé sécurisé',
        proj3_tag: 'VMware / pfSense / Kali',
        proj3_contexte: "Déployer un contrôleur de domaine et un pare-feu périmétrique, puis valider leur sécurité.",
        proj3_moyens: "Active Directory (utilisateurs, GPO), pfSense (filtrage, NAT, VPN), tests d'intrusion Kali Linux.",
        proj3_resultats: 'Domaine fonctionnel avec GPO appliquées et périmètre réseau filtré et audité.',
        proj3_autocritique: "À approfondir avec un IDS/IPS en complément du pare-feu.",

        proj4_title: 'Alternance Radar',
        proj4_tag: 'Cloudflare Workers / IA',
        proj4_contexte: "Automatiser la recherche d'alternance BTS SIO SISR : scraper, filtrer et scorer les offres pertinentes.",
        proj4_moyens: 'Cloudflare Workers (Hono, TypeScript), D1, KV, IA Llama 3.3 70B pour le scoring, scraping API France Travail, cron automatique.',
        proj4_resultats: "Offres scrapées et filtrées automatiquement toutes les 4h, écoles/CFA écartés par l'IA, génération de CV et lettres de motivation optimisés ATS.",
        proj4_autocritique: "Une source d'offres encore instable à stabiliser ; interface d'administration à compléter.",

        proj5_title: "Cluster Kubernetes monté à la main",
        proj5_tag: "Debian / kubeadm / Flannel",
        proj5_contexte: "Comprendre Kubernetes en profondeur en installant un cluster sans solution clé en main, plutôt que de l'utiliser comme une boîte noire.",
        proj5_moyens: "VM Debian, kubeadm, containerd, CNI Flannel, kubectl.",
        proj5_resultats: "Cluster mono-nœud opérationnel : nœud Ready, réseau des pods fonctionnel.",
        proj5_autocritique: "Un seul nœud, donc pas de haute disponibilité. Prochaine étape : y déployer une application Node.js + PostgreSQL avec Secrets, sondes de santé et NetworkPolicies (ce qui impose de passer à un CNI comme Calico, Flannel ne les appliquant pas).",
        proj6_title: "Ce portfolio, déployé en « secure by design »",
        proj6_tag: "Cloudflare Pages / Functions",
        proj6_contexte: "Héberger ce portfolio et son formulaire de contact en appliquant les réflexes DevSecOps sur un vrai projet en ligne.",
        proj6_moyens: "Cloudflare Pages + Pages Function (API de contact serverless), clé API stockée en secret chiffré côté plateforme, validation côté serveur, champ pot de miel anti-spam, en-têtes de sécurité HTTP (CSP, HSTS…), déploiements de preview par branche Git.",
        proj6_resultats: "Aucune clé exposée côté client ni dans le dépôt, formulaire protégé contre le spam basique, chaque modification validée sur une URL de preview isolée avant la production.",
        proj6_autocritique: "À compléter par une limitation de débit sur l'API de contact et un pipeline CI (lint, scan de dépendances et de secrets) avant chaque déploiement.",
        view_pdf: 'Voir le PDF',
        view_repo: 'Voir sur GitHub',

        // ── Veille technologique ──
        veille_heading: 'Veille',
        veille_heading_span: 'Technologique',
        veille_intro: "Suivi de l'actualité sécurité et infrastructure, lue sous l'angle du support et de la mise à disposition de services : vulnérabilités à corriger, continuité de service, gestion du parc et des incidents.",
        veille_cat1_title: 'Cybersécurité & Alertes',
        veille_cat2_title: 'Piratage & Threat Intelligence',
        veille_cat5_title: 'RGPD & Vie Privée',

        veille_fiches_title: 'Fiches de veille',
        veille_fiches_notice: "⚠️ Sélection d'actualités suivies — à enrichir au fil de la veille.",

        veille_f1_date: '10/07/2026',
        veille_f1_title: 'Multiples vulnérabilités dans le noyau Linux de Red Hat',
        veille_f1_desc: "Le CERT-FR recense de multiples vulnérabilités dans le noyau Linux de Red Hat (RHEL 7 à 10, OpenShift 4.15/4.17) : exécution de code à distance, élévation de privilèges, déni de service, sur plus de 60 CVE. En écho direct avec l'administration des VM de test (Docker/Kubernetes) en stage — ça confirme l'importance d'un patch management régulier plutôt que d'attendre un incident.",

        veille_f2_date: '11/07/2026',
        veille_f2_title: 'Campagne mondiale ciblant les CMS vulnérables (WordPress, Joomla, Craft CMS)',
        veille_f2_desc: "L'agence australienne de cybersécurité alerte sur une campagne mondiale, potentiellement assistée par l'IA, exploitant des failles de CMS pour déployer des webshells et obtenir un accès persistant, en ciblant surtout les PME. Illustre concrètement la compétence « Développer la présence en ligne de l'organisation » : CMS à jour, plugins inutiles supprimés, répertoires web surveillés.",

        veille_f3_date: '09/07/2026',
        veille_f3_title: 'Contrôle de l\'activité des personnes employées',
        veille_f3_desc: "La CNIL rappelle que tout dispositif de contrôle de l'activité des salariés doit être justifié et proportionné, ne pas placer sous surveillance constante, et faire l'objet d'une consultation du CSE et d'une information préalable. Directement lié à la gestion des habilitations RBAC et à la mise en conformité RGPD des accès réalisée en stage.",

        veille_f4_date: '22/07/2026',
        veille_f4_title: 'Multiples vulnérabilités dans GLPI (CERT-FR AVI-0909)',
        veille_f4_desc: "Le CERT-FR signale 4 vulnérabilités dans GLPI (versions 11.0.x < 11.0.8 et < 10.0.26 ; CVE-2026-45801, -53627, -53628, -55217) : atteinte à la confidentialité et à l'intégrité des données, contournement de la politique de sécurité. Le point marquant : GLPI est justement l'outil de gestion de parc et de tickets d'incidents, au cœur du bloc « Support et mise à disposition » — un GLPI non mis à jour exposerait tout l'inventaire du SI. Illustre les activités « Gérer le patrimoine informatique » et « Répondre aux incidents » : inventorier aussi ses propres outils d'administration, les mettre à jour en priorité et ne pas les exposer directement sur Internet. Correctif : passer en 11.0.8 ou 10.0.26.",

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
        doc4_title: 'Fiche de mission (E5)',
        doc4_desc: 'Fiche de mission détaillée au format BTS SIO — stage Caplogy & Novatiel.',
        doc_download: 'Télécharger',
        doc_view: 'Consulter',
        doc_pending: 'À venir',

        conclusion_heading: 'Conclusion &',
        conclusion_heading_span: 'Projet Professionnel',
        conclusion_p1: "Ce BTS SIO – SISR m'a permis de consolider des compétences techniques (administration système, réseaux, sécurité) et transversales (rigueur, autonomie, travail en mode projet).",
        conclusion_p2: "Mon projet professionnel : devenir ingénieur DevSecOps. Le DevSecOps réunit ce qui m'attire depuis le début — l'infrastructure (SISR), la cybersécurité (BTS CIEL) et l'automatisation (stage) — pour livrer vite sans sacrifier la sécurité.",

        // ── Contact ──
        conclusion_p3: "Prochaines briques techniques à acquérir : Infrastructure as Code (Terraform, Ansible), scan de vulnérabilités dans la CI (Trivy, analyse SAST), gestion centralisée des secrets et supervision des clusters Kubernetes.",
        roadmap1_when: "2025 – 2027",
        roadmap1_title: "Socle infra & sécurité",
        roadmap1_p: "BTS CIEL puis BTS SIO SISR : réseaux, systèmes, cybersécurité, stage Docker/Kubernetes/CI-CD.",
        roadmap2_when: "Après le BTS",
        roadmap2_title: "Poursuite d'études en alternance",
        roadmap2_p: "Licence professionnelle puis école d'ingénieur, en alternance.",
        roadmap3_when: "Objectif",
        roadmap3_title: "Ingénieur DevSecOps",
        roadmap3_p: "Concevoir des pipelines CI/CD sécurisés, automatiser l'infrastructure et intégrer la sécurité à chaque étape du cycle de vie.",
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
        home_desc: "BTS SIO SISR student building a DevSecOps profile: automated, containerized infrastructure that is secure by design.",
        download_cv: 'Download my CV',
        typing_words: ['BTS SIO – SISR Student', 'Future DevSecOps Engineer', 'Docker · Kubernetes · CI/CD', 'Security by design'],
        terminal_output: "BTS SIO SISR → DevSecOps engineer",

        parcours_heading: 'My',
        parcours_heading_span: 'Journey',
        parcours_subtitle: "BTS SIO – SISR Student · DevSecOps track",
        parcours_p1: 'My name is Sahed Arshed Ali Khan. I am currently enrolled in the BTS SIO program (IT Services for Organizations), specializing in SISR (Infrastructure, Systems and Networks Solutions) at CFA Aurlom, Paris.',
        parcours_p2: "After reorienting from a scientific background (Physical Measurements degree), I chose IT to combine analytical rigor with hands-on problem solving. A first year in BTS CIEL (cybersecurity) followed by BTS SIO SISR gave me a dual foundation: infrastructure and security.",
        parcours_p3: "My goal: become a DevSecOps engineer — automating infrastructure deployment and building security into every stage (build, test, deploy, run) rather than bolting it on at the end. My internship, focused on Docker, Kubernetes and CI/CD, confirmed this direction.",
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
        competences_intro: 'Technical skills and activities of the <strong>"IT Support and Service Delivery"</strong> block (E5 exam), illustrated by my projects and internship.',
        skill_devsecops_title: "DevSecOps & automation",
        skill_devsecops_p: "<strong>GitHub Actions CI/CD</strong>, <strong>Docker, Kubernetes</strong>, secrets management, least privilege (RBAC), application security (<strong>OWASP</strong>), Cloudflare serverless deployment (Workers, Pages).",
        skill_net_title: 'Networking',
        skill_net_p: '<strong>TCP/IP, VLANs, inter-VLAN routing</strong>, switching, DNS, DHCP, VPN, ACLs. <strong>Cisco, pfSense</strong>, Wireshark, Nmap.',
        skill_sys_title: 'Systems',
        skill_sys_p: '<strong>Windows Server</strong> (AD DS, DNS, DHCP, GPO), <strong>Active Directory</strong>, Linux (Debian, Ubuntu, Kali), Bash, PowerShell.',
        skill_virt_title: 'Virtualization & containers',
        skill_virt_p: "<strong>VMware Workstation</strong>, KVM, <strong>Docker</strong> (Dockerfile, BuildKit, registry), <strong>Kubernetes</strong> (kubeadm, kubectl, deployments).",
        skill_secu_title: 'Monitoring & security',
        skill_secu_p: '<strong>SIEM (Wazuh, Splunk, ELK)</strong>, <strong>Zabbix</strong>, firewalling, Nginx reverse proxy, SSL/TLS, OpenSSL, Fail2ban, <strong>MFA/TOTP</strong>, GDPR, RBAC.',
        skill_support_title: 'Support & tools',
        skill_support_p: "<strong>GLPI</strong> (ticketing / asset management), Microsoft 365, <strong>Git</strong>, VS Code.",
        skill_dev_title: 'Development',
        skill_dev_p: '<strong>TypeScript, JavaScript, Python</strong>, SQL (MySQL, SQLite) — including serverless architecture (REST APIs, token-based authentication) during my internship.',
        skill_lang_title: 'Languages',
        skill_lang_p: 'Bengali / Bangla – Native<br>French – Native<br>English – B2 Level (EF SET Certified)',

        comp_table_title: 'Skills summary table',
        comp_table_col1: 'Activity ("IT Support & Service Delivery" block)',
        comp_table_col2: 'Acquired via',
        comp_table_col3: 'Level',
        comp_row1_c1: 'Manage IT assets',
        comp_row1_c2: 'Internship: inventory and hardening of 26 container images; GLPI in coursework',
        comp_row1_c3: 'Proficient',
        comp_row2_c1: 'Handle incidents and support/evolution requests',
        comp_row2_c2: 'Internship: diagnosing and fixing failures, evolving an internal web application',
        comp_row2_c3: 'Proficient',
        comp_row3_c1: "Build the organization's online presence",
        comp_row3_c2: 'Project: this portfolio (deployment, security, SEO)',
        comp_row3_c3: 'Proficient',
        comp_row4_c1: 'Work in project mode',
        comp_row4_c2: 'Academic projects (infra, cloud, security) + planning the 26-image work during the internship',
        comp_row4_c3: 'Proficient',
        comp_row5_c1: 'Deliver an IT service to users',
        comp_row5_c2: 'Internship: testing, Kubernetes deployment and lab delivery; SIEM monitoring',
        comp_row5_c3: 'Proficient',
        comp_row6_c1: "Organize one's professional development",
        comp_row6_c2: 'Tech watch, professional identity (LinkedIn, GitHub), DevSecOps career plan',
        comp_row6_c3: 'Ongoing',
        comp_table_note: 'Activities of the "IT Support and Service Delivery" block (E5 exam), matching my summary table.',

        certs_heading: 'My',
        certs_heading_span: 'Certifications',
        cert1_title: 'EF SET English Certificate',
        cert1_desc: 'B2 Level – English Proficiency',
        cert_view: 'View Certificate',
        cert2_title: 'Cisco Introduction to Cybersecurity',
        cert2_desc: 'Cisco Networking Academy',
        cert3_title: 'Cisco CCNA',
        cert3_desc: 'Cisco Networking Academy',
        cert4_title: 'Cisco CyberOps Associate',
        cert4_desc: 'Cisco Networking Academy',
        cert_pending: 'In progress',

        entreprise_heading: 'Host',
        entreprise_heading_span: 'Company',
        entreprise_notice: "⚠️ Profile built from public information — exact legal form and headcount to be confirmed.",
        entreprise_tab1_name: 'Caplogy & Novatiel',
        entreprise_id_title: 'Identification',
        entreprise_id_denomination: 'Company name: ',
        entreprise_id_denomination_val: 'Caplogy & Novatiel',
        entreprise_id_adresse: 'Address: ',
        entreprise_id_adresse_val: 'Vélizy-Villacoublay, France',
        entreprise_id_forme: 'Legal form: ',
        entreprise_id_forme_val: 'Not publicly disclosed — to confirm',
        entreprise_id_taille: 'Size: ',
        entreprise_id_taille_val: 'Multi-entity group (training + digital services)',
        entreprise_id_effectif: 'Headcount: ',
        entreprise_id_effectif_val: 'Not publicly disclosed',
        entreprise_id_secteur: 'Industry: ',
        entreprise_id_secteur_val: 'Certified digital training (cloud, cybersecurity, networking), R&D/innovation, and development services via Novatiel',
        entreprise_hist_title: 'History',
        entreprise_hist_p: "Caplogy positions itself as a certified digital training group (\"Training, innovating, growing digital talent\"), with an R&D/innovation activity (prototyping, scientific validation, publications) and a Novatiel branch dedicated to development and infrastructure services. Precise founding date and milestones to be confirmed with the company.",
        entreprise_rgpd_title: 'GDPR',
        entreprise_rgpd_p: "As part of my missions, I contributed to GDPR compliance for internal tool access (token-based authentication, RBAC rights management). The company's overall GDPR policy (designated DPO, compliance tools) is yet to be documented.",
        entreprise_strategie_title: 'Strategic Orientation',
        entreprise_strategie_p: 'Growing the certified training offering (cloud, cybersecurity, AI), building an R&D/innovation activity, and diversifying through development and infrastructure services (Novatiel).',
        entreprise_rse_title: 'CSR',
        entreprise_rse_p: 'To complete: corporate social responsibility approach (environmental, social, governance) — not publicly documented yet.',
        swot_title: 'SWOT Analysis',
        swot_forces: 'Strengths',
        swot_forces_p: 'Dual training + development positioning (Caplogy/Novatiel group), broad expertise (cloud, cybersecurity, dev), recognized certification catalog (AWS, Azure, Cisco…).',
        swot_faiblesses: 'Weaknesses',
        swot_faiblesses_p: 'Dependence on third-party certification bodies; multi-entity structure that can complicate internal coordination.',
        swot_opportunites: 'Opportunities',
        swot_opportunites_p: 'Strong demand for digital training and career conversion, growth of cloud and cybersecurity, rising demand around AI training offerings.',
        swot_menaces: 'Threats',
        swot_menaces_p: 'Competition from online learning platforms (MOOCs) and accredited training bodies, fast-moving technologies requiring continuous content updates.',
        entreprise_fiche_btn: 'View a detailed mission sheet (E5 format)',

        missions_heading: 'My',
        missions_heading_span: 'Missions',
        missions_entreprise_title: 'Missions carried out on-site',
        missions_entreprise_notice: "First-year internship completed in 2026 — monitoring, container hardening and security missions, mapped to the SISR curriculum activities.",
        mission_field_objectifs: 'Objectives',
        mission_field_moyens: 'Resources used',
        mission_field_resultats: 'Results achieved',
        mission_field_difficultes: 'Difficulties encountered',
        mission_field_competences: 'Skills acquired',
        mission1_objectifs: 'Deploy, validate and monitor security detection labs (SIEM) used for training, and verify their ability to raise incidents.',
        mission1_moyens: 'Containers deployed on Kubernetes, Wazuh (manager, indexer, dashboard), Splunk, the ELK stack (Elasticsearch), file integrity monitoring (FIM), analysis of startup and runtime logs.',
        mission1_resultats: 'SIEM labs working end to end; detection confirmed (a planted malicious file triggers Wazuh rule 554); Splunk authentication and the Elasticsearch cluster validated.',
        mission1_difficultes: 'Services not starting on their own at boot, an OpenSearch Dashboards migration lock, no Splunk admin account created by default — all diagnosed through methodical log reading.',
        mission1_competences: 'Operate, troubleshoot and monitor an infrastructure solution (SISR curriculum): monitoring, incident detection and analysis, log reading.',
        mission1_title: 'Commissioning and monitoring SIEM labs',
        mission2_title: "Hardening the Docker images of a cybersecurity lab platform",
        mission2_objectifs: "Test, diagnose and fix the 26 Docker images of a cybersecurity training lab platform (Splunk, Wazuh, pfSense, Kali, OSINT, cryptography…) before release.",
        mission2_moyens: "Docker / BuildKit, test Kubernetes cluster, local image registry, kubectl port-forward, build and runtime log analysis, the same test procedure for every image.",
        mission2_resultats: "26 out of 26 images rebuilt, tested end to end (build, run, Kubernetes deployment) and handed over to the team for release.",
        mission2_difficultes: "Systemic failures shared across images: expired repository GPG keys (package signatures rejected), wrong HOME variable, a Python module removed in 3.13, gnome-keyring unusable under Kubernetes.",
        mission2_competences: "Install, test and deploy an infrastructure solution (SISR curriculum): software supply chain security, reproducible testing method, container and Kubernetes deployment debugging.",
        mission3_title: "Security audit of an internal web application",
        mission3_objectifs: "Review the code of a serverless web application before handover and identify security and operational risks.",
        mission3_moyens: "Code review guided by the OWASP Top 10 (access control, authentication, secrets management), deployment script analysis, technical handover documentation.",
        mission3_resultats: "Access control flaw (IDOR) fixed; hardening points reported to the team (secrets management, login rate limiting, strict separation of deployment environments); technical documentation delivered.",
        mission3_difficultes: "Prioritizing fixes without blocking releases, and explaining technical risks to non-specialists.",
        mission3_competences: "Build online presence and handle security incidents (SISR curriculum): application security, access control, deployment pipeline security, risk communication.",
        missions_conclusion_title: 'Conclusion on missions',
        missions_conclusion_p: "This internship moved me from academic labs to real infrastructure, where delivery speed and security have to coexist. Automating deployments, hardening container images and auditing code before production: that is the daily work of a DevSecOps engineer, and what settled my career plan.",

        projects_heading: 'My',
        projects_heading_span: 'Technical Projects',
        projects_intro: 'Projects related to the "IT Support and Service Delivery" block.',
        projects_notice: '⚠️ Projects being added.',
        proj_field_contexte: 'Context / Objectives',
        proj_field_moyens: 'Resources used',
        proj_field_resultats: 'Results',
        proj_field_autocritique: 'Self-assessment',

        proj1_title: 'Multi-site network infrastructure',
        proj1_tag: 'Cisco Packet Tracer',
        proj1_contexte: 'Interconnect 3 sites, segment traffic by VLAN, and secure exchanges between departments.',
        proj1_moyens: 'VLANs, inter-VLAN routing, DHCP, DNS, ACLs, IP addressing (VLSM), OSPF.',
        proj1_resultats: '3 interconnected sites, filtered traffic, and a structured, scalable IP addressing scheme.',
        proj1_autocritique: 'Could be enhanced with high availability (HSRP/VRRP).',

        proj2_title: 'Supervised private cloud infrastructure',
        proj2_tag: 'VMware / Ubuntu Server',
        proj2_contexte: 'Deploy a self-hosted private cloud and secure access end-to-end.',
        proj2_moyens: 'Nextcloud, Nginx reverse proxy, SSL/TLS, Fail2ban, MFA/TOTP, Zabbix monitoring.',
        proj2_resultats: 'Encrypted, monitored access with automatic blocking of brute-force attempts.',
        proj2_autocritique: 'Could be enhanced with automated off-site backups.',

        proj3_title: 'Secure virtualized environment',
        proj3_tag: 'VMware / pfSense / Kali',
        proj3_contexte: 'Deploy a domain controller and a perimeter firewall, then validate their security.',
        proj3_moyens: 'Active Directory (users, GPOs), pfSense (filtering, NAT, VPN), Kali Linux penetration testing.',
        proj3_resultats: 'Functional domain with applied GPOs, and a filtered, audited network perimeter.',
        proj3_autocritique: 'Could be deepened with an IDS/IPS alongside the firewall.',

        proj4_title: 'Alternance Radar',
        proj4_tag: 'Cloudflare Workers / AI',
        proj4_contexte: 'Automate the search for a SISR work-study placement: scrape, filter, and score relevant job postings.',
        proj4_moyens: 'Cloudflare Workers (Hono, TypeScript), D1, KV, Llama 3.3 70B AI for scoring, France Travail API scraping, automated cron.',
        proj4_resultats: 'Job postings scraped and filtered automatically every 4 hours, training schools/CFAs screened out by AI, ATS-optimized resume and cover letter generation.',
        proj4_autocritique: 'One data source is still unstable and needs stabilizing; admin interface still to be completed.',

        proj5_title: "Kubernetes cluster built by hand",
        proj5_tag: "Debian / kubeadm / Flannel",
        proj5_contexte: "Understand Kubernetes in depth by installing a cluster without a turnkey solution, instead of using it as a black box.",
        proj5_moyens: "Debian VM, kubeadm, containerd, Flannel CNI, kubectl.",
        proj5_resultats: "Working single-node cluster: node Ready, pod networking functional.",
        proj5_autocritique: "Single node, so no high availability. Next step: deploy a Node.js + PostgreSQL app with Secrets, health probes and NetworkPolicies (which requires moving to a CNI like Calico, since Flannel does not enforce them).",
        proj6_title: "This portfolio, deployed secure by design",
        proj6_tag: "Cloudflare Pages / Functions",
        proj6_contexte: "Host this portfolio and its contact form while applying DevSecOps habits to a real, live project.",
        proj6_moyens: "Cloudflare Pages + Pages Function (serverless contact API), API key stored as an encrypted platform secret, server-side validation, anti-spam honeypot field, HTTP security headers (CSP, HSTS…), per-branch Git preview deployments.",
        proj6_resultats: "No key exposed client-side or in the repository, form protected against basic spam, every change validated on an isolated preview URL before production.",
        proj6_autocritique: "Still to add: rate limiting on the contact API and a CI pipeline (lint, dependency and secret scanning) before each deployment.",
        view_pdf: 'View PDF',
        view_repo: 'View on GitHub',

        veille_heading: 'Technology',
        veille_heading_span: 'Watch',
        veille_intro: 'Monitoring of security and infrastructure news, read from a support and service-delivery angle: vulnerabilities to patch, service continuity, asset and incident management.',
        veille_cat1_title: 'Cybersecurity & Alerts',
        veille_cat2_title: 'Hacking & Threat Intelligence',
        veille_cat5_title: 'GDPR & Privacy',

        veille_fiches_title: 'Watch entries',
        veille_fiches_notice: '⚠️ A selection of news followed — to be expanded as the watch continues.',

        veille_f1_date: '07/10/2026',
        veille_f1_title: "Multiple vulnerabilities in Red Hat's Linux kernel",
        veille_f1_desc: 'CERT-FR reports multiple vulnerabilities in the Red Hat Linux kernel (RHEL 7 to 10, OpenShift 4.15/4.17): remote code execution, privilege escalation, denial of service, across 60+ CVEs. Directly relevant to the test VM administration (Docker/Kubernetes) I do during my internship — a reminder of the importance of regular patch management rather than waiting for an incident.',

        veille_f2_date: '07/11/2026',
        veille_f2_title: 'Global campaign targeting vulnerable CMS platforms (WordPress, Joomla, Craft CMS)',
        veille_f2_desc: "Australia's cybersecurity agency warns of a global, possibly AI-assisted campaign exploiting CMS flaws to deploy webshells and gain persistent access, mainly targeting SMBs. A concrete illustration of the \"Develop the organization's online presence\" skill: keeping CMS platforms patched, removing unused plugins, monitoring web directories.",

        veille_f3_date: '07/09/2026',
        veille_f3_title: 'Monitoring employee activity — CNIL guidance',
        veille_f3_desc: "The CNIL reminds that any employee monitoring system must be justified and proportionate, avoid constant surveillance, and go through employee representative consultation and prior notice. Directly tied to the RBAC access management and GDPR compliance work I did during my internship.",

        veille_f4_date: '07/22/2026',
        veille_f4_title: 'Multiple vulnerabilities in GLPI (CERT-FR AVI-0909)',
        veille_f4_desc: "CERT-FR reports 4 vulnerabilities in GLPI (11.0.x < 11.0.8 and < 10.0.26; CVE-2026-45801, -53627, -53628, -55217): loss of data confidentiality and integrity, security-policy bypass. The key point: GLPI is precisely the asset-inventory and incident-ticketing tool at the heart of the \"IT Support and Service Delivery\" block — an unpatched GLPI would expose the whole IT asset inventory. It illustrates the \"Manage IT assets\" and \"Handle incidents\" activities: inventory your own administration tools too, patch them first, and don't expose them directly to the Internet. Fix: upgrade to 11.0.8 or 10.0.26.",

        docs_heading: 'Documents &',
        docs_heading_span: 'Summary',
        docs_intro: 'Mandatory documents for the E5 exam.',
        doc1_title: 'Summary Table',
        doc1_desc: 'Skills and missions summary (XLSX/PDF format).',
        doc2_title: 'Curriculum Vitae',
        doc2_desc: 'Up-to-date CV in PDF format.',
        doc3_title: 'Internship Certificates',
        doc3_desc: 'To be added once received (signed by the company).',
        doc4_title: 'Mission sheet (E5)',
        doc4_desc: 'Detailed mission sheet in the BTS SIO format — Caplogy & Novatiel internship.',
        doc_download: 'Download',
        doc_view: 'View',
        doc_pending: 'Coming soon',

        conclusion_heading: 'Conclusion &',
        conclusion_heading_span: 'Career Plan',
        conclusion_p1: 'This BTS SIO – SISR allowed me to build technical skills (system administration, networking, security) and transferable ones (rigor, autonomy, project work).',
        conclusion_p2: "My career plan: become a DevSecOps engineer. DevSecOps brings together what has drawn me from the start — infrastructure (SISR), cybersecurity (BTS CIEL) and automation (internship) — to ship fast without sacrificing security.",

        conclusion_p3: "Next technical building blocks: Infrastructure as Code (Terraform, Ansible), vulnerability scanning in CI (Trivy, SAST), centralized secrets management and Kubernetes cluster monitoring.",
        roadmap1_when: "2025 – 2027",
        roadmap1_title: "Infra & security foundation",
        roadmap1_p: "BTS CIEL then BTS SIO SISR: networking, systems, cybersecurity, Docker/Kubernetes/CI-CD internship.",
        roadmap2_when: "After the BTS",
        roadmap2_title: "Work-study higher education",
        roadmap2_p: "A vocational bachelor's (licence pro) then an engineering school, as a work-study program.",
        roadmap3_when: "Goal",
        roadmap3_title: "DevSecOps Engineer",
        roadmap3_p: "Design secure CI/CD pipelines, automate infrastructure and build security into every stage of the lifecycle.",
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
    ['devsecops','net','sys','virt','secu','support','dev','lang'].forEach(k => {
        setText(`[data-i18n="skill_${k}_title"]`, `skill_${k}_title`);
        const el = document.querySelector(`[data-i18n="skill_${k}_p"]`);
        if (el) el.innerHTML = t[`skill_${k}_p`] ?? el.innerHTML;
    });

    setText('[data-i18n="comp_table_title"]', 'comp_table_title');
    setText('[data-i18n="comp_table_col1"]', 'comp_table_col1');
    setText('[data-i18n="comp_table_col2"]', 'comp_table_col2');
    setText('[data-i18n="comp_table_col3"]', 'comp_table_col3');
    for (let i = 1; i <= 6; i++) {
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
    setText('[data-i18n="cert3_title"]', 'cert3_title');
    setText('[data-i18n="cert3_desc"]', 'cert3_desc');
    setText('[data-i18n="cert4_title"]', 'cert4_title');
    setText('[data-i18n="cert4_desc"]', 'cert4_desc');
    document.querySelectorAll('[data-i18n="cert_view"]').forEach(el => el.textContent = t['cert_view'] ?? el.textContent);
    document.querySelectorAll('[data-i18n="cert_pending"]').forEach(el => el.textContent = t['cert_pending'] ?? el.textContent);

    // Entreprise
    setText('[data-i18n="entreprise_heading"]', 'entreprise_heading');
    setText('[data-i18n="entreprise_heading_span"]', 'entreprise_heading_span');
    setText('[data-i18n="entreprise_notice"]', 'entreprise_notice');
    setText('[data-i18n="entreprise_tab1_name"]', 'entreprise_tab1_name');
    setText('[data-i18n="entreprise_id_title"]', 'entreprise_id_title');
    ['denomination','adresse','forme','taille','effectif','secteur'].forEach(k => {
        setText(`[data-i18n="entreprise_id_${k}"]`, `entreprise_id_${k}`);
        setText(`[data-i18n="entreprise_id_${k}_val"]`, `entreprise_id_${k}_val`);
    });
    ['hist','rgpd','strategie','rse'].forEach(k => {
        setText(`[data-i18n="entreprise_${k}_title"]`, `entreprise_${k}_title`);
        setText(`[data-i18n="entreprise_${k}_p"]`, `entreprise_${k}_p`);
    });
    setText('[data-i18n="swot_title"]', 'swot_title');
    ['forces','faiblesses','opportunites','menaces'].forEach(k => {
        setText(`[data-i18n="swot_${k}"]`, `swot_${k}`);
        setText(`[data-i18n="swot_${k}_p"]`, `swot_${k}_p`);
    });
    setText('[data-i18n="entreprise_fiche_btn"]', 'entreprise_fiche_btn');

    // Missions
    setText('[data-i18n="missions_heading"]', 'missions_heading');
    setText('[data-i18n="missions_heading_span"]', 'missions_heading_span');
    setText('[data-i18n="missions_entreprise_title"]', 'missions_entreprise_title');
    setText('[data-i18n="missions_entreprise_notice"]', 'missions_entreprise_notice');
    ['objectifs','moyens','resultats','difficultes','competences'].forEach(k => {
        setText(`[data-i18n="mission_field_${k}"]`, `mission_field_${k}`);
    });
    [1,2,3].forEach(n => {
        setText(`[data-i18n="mission${n}_title"]`, `mission${n}_title`);
        ['objectifs','moyens','resultats','difficultes','competences'].forEach(k => {
            setText(`[data-i18n="mission${n}_${k}"]`, `mission${n}_${k}`);
        });
    });
    setText('[data-i18n="missions_conclusion_title"]', 'missions_conclusion_title');
    setText('[data-i18n="missions_conclusion_p"]', 'missions_conclusion_p');

    // Projets
    setText('[data-i18n="projects_heading"]', 'projects_heading');
    setText('[data-i18n="projects_heading_span"]', 'projects_heading_span');
    setText('[data-i18n="projects_intro"]', 'projects_intro');
    setText('[data-i18n="projects_notice"]', 'projects_notice');
    ['contexte','moyens','resultats','autocritique'].forEach(k => {
        document.querySelectorAll(`[data-i18n="proj_field_${k}"]`).forEach(el => el.textContent = t[`proj_field_${k}`] ?? el.textContent);
    });
    [1,2,3,4,5,6].forEach(n => {
        setText(`[data-i18n="proj${n}_title"]`, `proj${n}_title`);
        setText(`[data-i18n="proj${n}_tag"]`, `proj${n}_tag`);
        setText(`[data-i18n="proj${n}_contexte"]`, `proj${n}_contexte`);
        setText(`[data-i18n="proj${n}_moyens"]`, `proj${n}_moyens`);
        setText(`[data-i18n="proj${n}_resultats"]`, `proj${n}_resultats`);
        setText(`[data-i18n="proj${n}_autocritique"]`, `proj${n}_autocritique`);
    });
    document.querySelectorAll('[data-i18n="view_pdf"]').forEach(el => el.textContent = t['view_pdf'] ?? el.textContent);
    document.querySelectorAll('[data-i18n="view_repo"]').forEach(el => el.textContent = t['view_repo'] ?? el.textContent);

    // Veille technologique
    setText('[data-i18n="veille_heading"]', 'veille_heading');
    setText('[data-i18n="veille_heading_span"]', 'veille_heading_span');
    setText('[data-i18n="veille_intro"]', 'veille_intro');
    [1, 2, 5].forEach(i => setText(`[data-i18n="veille_cat${i}_title"]`, `veille_cat${i}_title`));

    setText('[data-i18n="veille_fiches_title"]', 'veille_fiches_title');
    setText('[data-i18n="veille_fiches_notice"]', 'veille_fiches_notice');
    [1, 2, 3, 4].forEach(n => {
        ['date', 'title', 'desc'].forEach(k => {
            setText(`[data-i18n="veille_f${n}_${k}"]`, `veille_f${n}_${k}`);
        });
    });

    // Documents
    setText('[data-i18n="docs_heading"]', 'docs_heading');
    setText('[data-i18n="docs_heading_span"]', 'docs_heading_span');
    setText('[data-i18n="docs_intro"]', 'docs_intro');
    [1,2,3,4].forEach(n => {
        setText(`[data-i18n="doc${n}_title"]`, `doc${n}_title`);
        setText(`[data-i18n="doc${n}_desc"]`, `doc${n}_desc`);
    });
    document.querySelectorAll('[data-i18n="doc_download"]').forEach(el => el.textContent = t['doc_download'] ?? el.textContent);
    document.querySelectorAll('[data-i18n="doc_view"]').forEach(el => el.textContent = t['doc_view'] ?? el.textContent);
    document.querySelectorAll('[data-i18n="doc_pending"]').forEach(el => el.textContent = t['doc_pending'] ?? el.textContent);

    setText('[data-i18n="conclusion_heading"]', 'conclusion_heading');
    setText('[data-i18n="conclusion_heading_span"]', 'conclusion_heading_span');
    setText('[data-i18n="conclusion_p1"]', 'conclusion_p1');
    setText('[data-i18n="conclusion_p2"]', 'conclusion_p2');
    setText('[data-i18n="conclusion_p3"]', 'conclusion_p3');
    [1,2,3].forEach(n => {
        ['when','title','p'].forEach(k => setText(`[data-i18n="roadmap${n}_${k}"]`, `roadmap${n}_${k}`));
    });

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
        const newTypingWords = t.typing_words.slice();
        words.length = 0;
        newTypingWords.forEach(w => words.push(w));
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
