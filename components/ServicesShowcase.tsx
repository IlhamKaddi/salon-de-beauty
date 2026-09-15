"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Image from "next/image";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

// ---------------------------------------------------------------------------
// Palette de marque — dérivée du logo (#B88A44) sur fond crème (#FAF5EC).
// ---------------------------------------------------------------------------

const INK = "#2E2013";     // brun-noir profond, plus riche que l'ancien INK
const GOLD = "#B88A44";    // couleur de marque (logo)
const GOLD_DARK = "#8C6A34";
const GOLD_LIGHT = "#D8B87C";

type ServiceBlock = {
  id: string;
  label: string;
  heading: string;
  points: string[];
  image: string;
  imageAlt: string;
};

const services: ServiceBlock[] = [
  {
    id: "coiffure",
    label: "Coiffure",
    heading: "Coiffure sur-mesure, pensée pour vous",
    points: [
      "Coupe & brushing adaptés à la forme du visage",
      "Coloration, mèches et balayage",
      "Soins réparateurs, lissages et botox capillaire",
    ],
    image:
      "https://images.unsplash.com/photo-1595475716260-0f2c35f5a40f?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Coloration cheveux en salon de coiffure",
  },
  {
    id: "soins-visage",
    label: "Soins Visage",
    heading: "Une peau nette, reposée et lumineuse",
    points: [
      "Nettoyage de peau en profondeur",
      "Soins hydratants et anti-âge",
      "Épilation du visage au fil ou à la cire",
    ],
    image:
      "https://images.unsplash.com/photo-1761718209835-c8586b7dcac0?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Soin du visage appliqué au pinceau",
  },
  {
    id: "mains-pieds",
    label: "Mains & Pieds",
    heading: "Des mains et des pieds impeccables",
    points: [
      "Manucure classique et vernis semi-permanent",
      "Pédicure spa relaxante",
      "Pose, remplissage et entretien d'ongles",
    ],
    image:
      "https://images.unsplash.com/photo-1610992015734-080387c1f66f?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Manucure aux ongles vernis",
  },
  {
    id: "maquillage",
    label: "Maquillage",
    heading: "Sublimez chaque occasion",
    points: [
      "Maquillage jour et soirée",
      "Maquillage mariée avec séance d'essai",
      "Rituels signature à l'or et au hammam",
    ],
    image:
      "https://images.unsplash.com/photo-1542452255191-c85a98f2c5d1?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Rouge à lèvres et produits de maquillage",
  },
];

// ---------------------------------------------------------------------------
// Photo encadrée — cadre doré fin en coin, signature visuelle de la page
// ---------------------------------------------------------------------------

function FramedPhoto({ service, reversed }: { service: ServiceBlock; reversed: boolean }) {
  return (
    <div className="relative">
      {/* cadre doré décalé, coin haut (gauche si normal, droite si reversed) */}
      <div
        className={`absolute -top-3 bottom-3 w-full rounded-sm border ${reversed ? "-right-3" : "-left-3"
          }`}
        style={{ borderColor: GOLD }}
        aria-hidden
      />
      <div className="relative aspect-square w-full overflow-hidden rounded-sm shadow-[0_25px_50px_-25px_rgba(46,32,19,0.45)]">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 45vw"
          className="object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.15)" }}
        />
      </div>
      {/* étiquette dorée superposée */}
      <span
        className={`absolute bottom-5 ${reversed ? "right-5" : "left-5"} rounded-full px-4 py-1.5 font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.18em] text-white`}
        style={{ backgroundColor: INK }}
      >
        {service.label}
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Une ligne de prestation (image + texte, alternée)
// ---------------------------------------------------------------------------

function ServiceRow({ service, reversed }: { service: ServiceBlock; reversed: boolean }) {
  const reduceMotion = useReducedMotion();

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: reduceMotion ? 0 : reversed ? 24 : -24 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };
  const textVariants: Variants = {
    hidden: { opacity: 0, x: reduceMotion ? 0 : reversed ? -24 : 24 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div className="grid items-center gap-x-16 gap-y-10 py-16 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] md:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={imageVariants}
        className={reversed ? "md:order-2 md:pl-3" : "md:order-1 md:pr-3"}
      >
        <FramedPhoto service={service} reversed={reversed} />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={textVariants}
        className={reversed ? "md:order-1" : "md:order-2"}
      >
        <div className="flex items-center gap-3">
          <span className="h-px w-8" style={{ backgroundColor: GOLD }} />
          <span
            className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ color: GOLD_DARK }}
          >
            {service.label}
          </span>
        </div>

        <h3
          className="mt-5 font-[family-name:var(--font-display)] text-3xl italic font-medium leading-tight md:text-4xl"
          style={{ color: INK }}
        >
          {service.heading}
        </h3>

        <ul className="mt-6 space-y-3">
          {service.points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0" aria-hidden>
                <circle cx="10" cy="10" r="10" fill={GOLD} opacity="0.15" />
                <path
                  d="M6 10.5 L9 13.5 L14 7.5"
                  fill="none"
                  stroke={GOLD}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-[family-name:var(--font-body)] text-[15px] font-medium leading-relaxed text-[#2E2013]/70">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Section complète
// ---------------------------------------------------------------------------

export default function ServicesShowcase() {
  return (
    <section
      id="prestations"
      className={`${display.variable} ${body.variable} relative bg-[#FAF5EC] px-5 py-20 sm:px-8 md:py-4 lg:px-24`}
    >
      <div className="mx-auto max-w-[1400px]">
        <header className="mx-auto mb-16  text-center">
          <p className="mb-4 font-body text-xs uppercase tracking-[0.3em] text-gold">
            Notre Maison de Beauté
          </p>

          <div className="mx-auto max-w-3xl mt-6 h-px w-16 bg-gold" aria-hidden="true" />

          <div className="mt-6 space-y-5 font-body text-[20px] leading-relaxed ">
            <p>
              Chez <strong>Salon Beauty </strong>, nous vous proposons une gamme
              complète de prestations dédiées à votre beauté et à votre bien-être,
              réalisées avec expertise, passion et une attention particulière à chaque
              détail.
            </p>

            <p>
              De la coiffure au maquillage, en passant par les soins du visage, la
              manucure et la pédicure, chaque service est personnalisé pour répondre à
              vos envies et révéler votre beauté naturelle.
            </p>
          </div>
        </header>

        <div className="mt-6 divide-y divide-[#2E2013]/10">
          {services.map((service, index) => (
            <ServiceRow key={service.id} service={service} reversed={index % 2 === 1} />
          ))}
        </div>


      </div>
    </section>
  );
}