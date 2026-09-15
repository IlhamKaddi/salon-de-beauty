import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import AboutContent from "@/components/AboutContent";
import Navbar from "@/components/Navbar";
import Topbarre from "@/components/Topbarre";

// Deux familles de police : une serif de caractère pour les titres (Fraunces)
// et une sans-serif douce et lisible pour le corps de texte (Manrope).
// Exposées en variables CSS pour être réutilisées dans tout le composant.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// --- SEO : métadonnées de la page ---
// À adapter avec les vraies informations du salon (adresse, téléphone, image).
export const metadata: Metadata = {
  title: "À propos de nous |  Salon de beauté & coiffure",
  description:
    "Découvrez l'histoire, les valeurs et le savoir-faire d salon de beauté et coiffure haut de gamme. Coiffure sur-mesure, soins du visage, manucure et maquillage professionnel.",
  keywords: [
    "salon de beauté",
    "salon de coiffure",
    "institut de beauté",
    "Salon Beauty",
    "coiffure sur mesure",
    "soins du visage",
    "manucure pédicure",
    "maquillage professionnel",
  ],
  alternates: { canonical: "/a-propos" },
  openGraph: {
    title: "À propos de Salon Beauty",
    description:
      "L'histoire, les valeurs et l'expertise du salon Salon Beauty : l'art de la beauté, sublimé.",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/bella-beauty-corner-og.jpg", // à remplacer par une vraie image (1200x630)
        width: 1200,
        height: 630,
        alt: "Intérieur du salon Salon Beauty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos de Salon Beauty",
    description:
      "L'histoire, les valeurs et l'expertise du salon Salon Beauty.",
  },
};

// --- SEO : données structurées Schema.org (LocalBusiness / BeautySalon) ---
// Complétez les champs marqués "À compléter" avec les vraies coordonnées du salon.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Salon Beauty",
  description:
    "Salon de beauté et coiffure haut de gamme proposant coiffure sur-mesure, soins du visage, manucure, pédicure et maquillage professionnel.",
  image: "https://www.votredomaine.com/images/bella-beauty-corner-salon.jpg",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "À compléter",
    addressLocality: "À compléter",
    addressRegion: "À compléter",
    postalCode: "À compléter",
    addressCountry: "MA",
  },
  telephone: "À compléter",
  url: "https://www.votredomaine.com/a-propos",
};

export default function AboutPage() {
  return (
    <>
      {/* Données structurées pour les moteurs de recherche */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar/>
       <Topbarre
              title="à propos de nous"
              image="/img1.jpg"
              alt="Salon de coiffure — espace bar et coiffage"
            />
      <div className={`${fraunces.variable} ${manrope.variable}`}>
        <AboutContent />
      </div>
    </>
  );
}