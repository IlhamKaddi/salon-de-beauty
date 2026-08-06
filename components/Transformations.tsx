"use client";

/**
 * BeautyGallery
 * ----------------------------------------------------------------------
 * Section "Galerie" pour un salon de beauté haut de gamme.
 * Grille de portraits maquillage, avec entrée en fondu/translation
 * et micro-interactions au survol (zoom léger, libellé glissant).
 *
 * Palette (dérivée de la couleur de marque #B88A44) :
 *   --gold        #B88A44  couleur principale de la marque
 *   --gold-light  #D9BC8C  reflets, survols, dégradés clairs
 *   --gold-deep   #8C6B32  ombres, profondeur des dégradés
 *   --ink         #221C16  texte, fond des visuels
 *   --ivory       #FAF5EC  fond de la section
 *
 * Typographie :
 *   Playfair Display  -> titres, prénoms des client·e·s (serif élégante)
 *   Poppins            -> surtitres, libellés, corps de texte (sans-serif utilitaire)
 *
 * Installation :
 *   npm install framer-motion lucide-react
 *
 * Les URLs d'images ci-dessous sont des PLACEHOLDERS (picsum.photos).
 * Remplacez `photo` par vos vraies photos.
 * ----------------------------------------------------------------------
 */

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Playfair_Display, Poppins } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

type GalleryItem = {
  id: string;
 
  photo: string;
};

const GALLERY: GalleryItem[] = [
  {
    id: "01",
   
    photo: "/tr7.jpg",
  },
  {
    id: "02",
  
    photo: "/tr2.jpg",
  },
  {
    id: "03",
  
    photo: "/tr3.jpg",
  },
  {
    id: "04",
   
    photo: "/tr4.jpg",
  },
  {
    id: "05",

    photo: "/tr5.jpg",
  },
  {
    id: "06",
 

    photo: "/tr6.jpg",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <motion.div variants={cardVariants} whileHover={{ y: -6 }} className="group relative">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-[#B88A44]/25 bg-[#221C16] shadow-[0_20px_50px_-20px_rgba(34,28,22,0.45)] transition-shadow duration-500 group-hover:shadow-[0_28px_65px_-18px_rgba(184,138,68,0.4)]">
        {/* Photo */}
        <img
          src={item.photo}
          alt={`TR`}
          draggable={false}
          className="absolute inset-0 h-full w-full select-none object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />

        {/* Voiles de lisibilité pour les libellés */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/65 to-transparent" />

        {/* Icône signature au survol */}
        <span className="absolute right-4 top-4 flex h-9 w-9 -translate-y-2 items-center justify-center rounded-full border border-[#D9BC8C]/40 bg-[#B88A44]/85 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <Sparkles className="h-4 w-4 text-white" strokeWidth={2} />
        </span>

     
      
      </div>
    </motion.div>
  );
}

export default function BeautyGallery() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className={`${playfair.variable} ${poppins.variable} relative overflow-hidden bg-[#FAF5EC] px-6 py-24 sm:py-32`}
    >
      {/* Halo doré d'ambiance */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(184,138,68,0.14),transparent)]" />

      <div className="relative mx-auto max-w-6xl">
        {/* En-tête */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-[family-name:var(--font-body)] text-xs font-medium uppercase tracking-[0.35em] text-[#B88A44]">
           Avant & Après
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-medium text-[#221C16] sm:text-5xl">
            Des <span className="italic text-[#B88A44]">Transformations</span> Qui Parlent d’Elles-Mêmes
          </h2>
          <p className="mt-5 font-[family-name:var(--font-body)] text-sm font-light leading-relaxed text-[#221C16]/60 sm:text-base">
            Découvrir les résulatas de nos services de beauté à travers notres galerie de transformations. Chaque image raconte une histoire de confiance et de beauté retrouvée.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#B88A44]/60" />
            <span className="h-2 w-2 rotate-45 border border-[#B88A44] bg-[#D9BC8C]/40" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#B88A44]/60" />
          </div>
        </motion.div>

        {/* Grille de la galerie */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {GALLERY.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}