# Portfolio V2

Ny portfolio för Eliah Bäckström Dimmed med fokus på IT-support, onsite-IT, teknisk service och praktisk problemlösning.

## Lokal utveckling

```bash
npm install
npm run dev
```

## Produktion

```bash
npm run build
npm run preview
```

Vercel känner automatiskt igen Vite. Build command är `npm run build` och output directory är `dist`.

## Miljövariabler

Kontaktformuläret använder `VITE_FORMSPREE_ENDPOINT`. Den nuvarande Formspree-adressen finns som säker fallback i koden och i `.env.example`.

## Bilder och CV

Instruktioner för framtida bilder finns i `public/images/README.md`. CV-knappen använder tillfälligt PDF-filen från Portfolio V1. När ett nytt CV läggs i `public/files/eliah-dimmed-cv.pdf` byts `profile.cv` i `src/content.js` till den lokala sökvägen.
