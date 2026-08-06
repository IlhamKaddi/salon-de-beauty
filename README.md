# Bella Beauty Corner — Site Web

Site vitrine de luxe pour un salon de beauté (maquillage, coiffure, esthétique, onglerie).
**Stack** : Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion

## Démarrage

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Build de production

```bash
npm run build
npm run start
```

## Structure

```
app/
  layout.tsx        → polices Google, metadata SEO
  page.tsx           → assemble toutes les sections
  globals.css        → styles globaux + classes utilitaires
components/
  Navbar.tsx         → nav sticky, reprend fidèlement la maquette fournie
  Hero.tsx           → hero identique à la maquette : titre, service-row, barre d'infos bas de page
  About.tsx          → présentation du salon
  Services.tsx       → prestations avec effet satin au survol
  Gallery.tsx        → galerie photo en grille
  InstagramSection.tsx → mise en avant du compte Instagram (remplace les Tarifs)
  Testimonials.tsx   → avis clientes
  Contact.tsx        → coordonnées + carte Google Maps intégrée (remplace le formulaire)
  Footer.tsx
  ui/
    SectionHeading.tsx
    ServiceIcon.tsx
lib/
  data.ts            → TOUT le contenu (textes, services, témoignages, infos salon) est ici
```

## Personnalisation prioritaire

1. **Adresse exacte du salon** → dans `lib/data.ts`, `salonInfo.address`. La carte dans `Contact.tsx`
   utilise une recherche Google Maps par texte (`salonInfo.fullName + address`). Pour un pin précis :
   - remplacez `salonInfo.address` par l'adresse complète et exacte (rue, ville)
   - ou récupérez le lien "Partager > Intégrer une carte" depuis Google Maps pour votre fiche
     établissement, et collez l'URL `src` obtenue directement dans l'`iframe` de `Contact.tsx`
2. **Téléphone, horaires, Instagram** → également dans `salonInfo` (`lib/data.ts`)
3. **Couleurs** → `tailwind.config.ts`, palette dérivée de votre logo (bronze/or `rose`, brun profond
   `burgundy`, doré `gold`, dégradé Instagram `insta-gradient` pour les accents type "story ring")
4. **Images** → remplacez les URLs Unsplash dans `Hero.tsx`, `About.tsx`, `Gallery.tsx` par vos propres
   photos (déposez-les dans `public/images/` puis référencez `/images/votre-photo.jpg`)
5. **Highlights Instagram** → `instagramHighlights` dans `lib/data.ts` (repris de vos catégories à la
   une : Makeup, Nails, Hydrafacial, Black Diamant, Keratine Soin...)

## Section Contact / Carte

Le formulaire de réservation a été remplacé par une **carte Google Maps intégrée** + un bloc de
coordonnées directes (téléphone, Instagram, horaires, lien "Itinéraire"). C'est le choix le plus
efficace pour un salon local : la cliente vous contacte directement par téléphone ou Instagram DM,
sans étape intermédiaire.

## Section Instagram (remplace les Tarifs)

Plutôt que d'afficher des tarifs figés (souvent variables selon prestation, cheveux, durée), la
section met en avant votre activité Instagram réelle : nombre de publications, d'abonnés, et vos
catégories à la une, avec un bouton direct pour suivre le compte. C'est la vitrine la plus vivante
et la plus convaincante pour ce type de salon.

## Performance

- Images optimisées via `next/image` (lazy-loading automatique, formats modernes)
- Polices auto-hébergées par `next/font`
- Animations Framer Motion déclenchées au scroll (`whileInView`, une seule fois)
- `prefers-reduced-motion` respecté (accessibilité)
- TypeScript strict et ESLint propres (aucune erreur, aucun warning)
