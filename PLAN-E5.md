# Plan de secours E5 — Portfolio-V2

Objectif : présenter le portfolio le jour de l'épreuve même si Internet ou Cloudflare est en panne.
Le site est 100 % autonome : aucune ressource externe (icônes, polices et CSP en `'self'` uniquement).

## Ordre de bascule

| Plan | Solution | Prérequis | Risque |
|---|---|---|---|
| A | Cloudflare Pages — https://sahed-portfolio.pages.dev | Internet | Panne réseau / Cloudflare |
| B | Docker (nginx:alpine) en local | Docker Desktop démarré, image `portfolio-v2:e5` chargée | Docker/WSL2 lent ou KO |
| C | `python -m http.server` | Python | Aucun (dernier recours) |
| Bonus | Kubernetes (cluster kubeadm sur VM) | VM démarrée + réseau | Démo de valorisation uniquement, jamais en secours |

## Plan B — Docker

Préparation (avant l'épreuve, avec Internet) :

```powershell
git clone -b redesign https://github.com/Sahed-Khan/Portfolio-V2.git
cd Portfolio-V2
docker build -t portfolio-v2:e5 .
docker save portfolio-v2:e5 -o portfolio-v2-e5.tar   # copie à garder sur clé USB
```

Le jour J (sans Internet) :

```powershell
docker load -i portfolio-v2-e5.tar      # seulement si l'image n'est plus dans Docker
docker compose up -d                    # ou : docker run -d -p 8080:80 portfolio-v2:e5
# puis ouvrir http://localhost:8080 dans Brave
docker compose down                     # à la fin
```

`nginx.conf` reprend les en-têtes de sécurité de `_headers` (CSP, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy).
`/api/` répond 404 en local : le formulaire de contact bascule alors sur `mailto:` (comportement prévu dans `script.js`).

## Plan C — Python

```powershell
cd Portfolio-V2
python -m http.server 8080
```

## Checklist avant l'épreuve

- [ ] Wi-Fi coupé, ouvrir `http://localhost:8080` : icônes, polices et bascule FR/EN OK
- [ ] Image Docker construite et `.tar` copié sur clé USB
- [ ] Dossier du projet copié en double (clé USB + second emplacement)
- [ ] Docker Desktop lancé au moins une fois la veille
- [ ] Contact : savoir expliquer le repli `mailto:` si on teste le formulaire hors ligne

## Choix techniques à expliquer au jury

- Auto-hébergement des dépendances : suppression des CDN (unpkg, Google Fonts) → disponibilité et confidentialité (pas de requête tierce), CSP durcie.
- Conteneurisation : image légère (nginx:alpine, ~50 Mo), reproductible, mêmes en-têtes de sécurité qu'en production.
- Kubernetes écarté du secours : trop de dépendances (VM, réseau) pour une page statique, gardé comme démonstration annexe.
