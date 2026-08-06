import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Jost } from "next/font/google";
// @ts-ignore: CSS import type declarations
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bella Beauty Corner | Maquillage & Soins de Beauté Professionnels",
  description:
    "Salon de beauté haut de gamme à Casablanca : maquillage, coiffure, esthétique et onglerie. Réservez votre séance dès aujourd'hui.",
  keywords: [
    "maquillage professionnel",
    "salon de beauté Casablanca",
    "onglerie",
    "esthétique",
    "Bella Beauty Corner",
  ],
  openGraph: {
    title: "Bella Beauty Corner | Maquillage & Soins de Beauté Professionnels",
    description:
      "Révélez votre éclat naturel avec notre équipe de professionnels de la beauté.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${cormorant.variable} ${jost.variable} font-body bg-ivory text-charcoal antialiased pt-2`}
      >
        {children}
      </body>
    </html>
  );
}
