import type { Metadata } from "next";
import ServicesShowcase from "@/components/ServicesShowcase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Topbarre from "@/components/Topbarre";

const SITE_URL = "https://www.votre-salon.ma"; // à remplacer par le domaine réel

export const metadata: Metadata = {
  title: "Nos Prestations | Coiffure, Soins Visage, Manucure & Maquillage – Salon de Beauté Casablanca",
  description:
    "Découvrez toutes nos prestations : coiffure (coupe, couleur, brushing), soins du visage, manucure et pédicure, maquillage jour, soirée et mariée. Salon de beauté et coiffure à Casablanca.",
  keywords: [
    "salon de coiffure Casablanca",
    "salon de beauté Casablanca",
    "coupe coloration Casablanca",
    "soin visage Casablanca",
    "manucure pédicure Casablanca",
    "maquillage mariée Casablanca",
  ],
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: "Nos Prestations – Salon de Beauté & Coiffure à Casablanca",
    description:
      "Coiffure, soins du visage, manucure-pédicure et maquillage : toutes nos prestations réunies dans un seul espace.",
    url: `${SITE_URL}/services`,
    siteName: "Salon de Beauté",
    locale: "fr_MA",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-services.jpg`,
        width: 1200,
        height: 630,
        alt: "Prestations du salon de beauté et coiffure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nos Prestations – Salon de Beauté & Coiffure à Casablanca",
    description:
      "Coiffure, soins du visage, manucure-pédicure et maquillage, réunis dans un seul salon.",
  },
};

// ---------------------------------------------------------------------------
// Données structurées (schema.org) — décrivent les grandes familles de
// prestations proposées par le salon, pour améliorer la compréhension du
// contenu par les moteurs de recherche (résultats enrichis, SEO local).
// ---------------------------------------------------------------------------

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Salon de Beauté",
  url: `${SITE_URL}/services`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Casablanca",
    addressCountry: "MA",
  },
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Coiffure",
        description:
          "Coupe, brushing, coloration, mèches, balayage, soins réparateurs et lissage.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Soins du Visage",
        description:
          "Nettoyage de peau, soins hydratants et anti-âge, épilation du visage.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Manucure & Pédicure",
        description:
          "Manucure, vernis semi-permanent, pédicure spa, pose et entretien d'ongles.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Maquillage",
        description:
          "Maquillage jour, soirée, mariée avec essai, rituels signature à l'or et au hammam.",
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
       <Navbar />
          <Topbarre
               title=" Nos Prestations"
               image="/services (2).png"
               alt="Salon de coiffure — espace bar et coiffage"
             />
      <ServicesShowcase />
      <Footer/>
    </>
  );
}