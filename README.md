# Portfolio

Projet Next.js 15 + TypeScript + Tailwind CSS v4.

## Démarrer

```bash
npm install
npm run dev
```

Ouvre http://localhost:3000

## Structure

- `src/lib/data.ts` — **toutes tes infos sont ici** (nom, projets, expérience, compétences, liens). Modifie ce fichier en premier.
- `src/components/` — un composant par section (Hero, About, Projects, Experience, Skills, Contact).
- `src/app/globals.css` — palette de couleurs et tokens de design (variables CSS en haut du fichier).
- `src/app/layout.tsx` — polices (Fraunces, Inter, IBM Plex Mono) et métadonnées SEO (title/description).

## Déployer

Pousse ce dossier sur GitHub, puis connecte le repo sur https://vercel.com — le déploiement se fait automatiquement à chaque `git push`.
