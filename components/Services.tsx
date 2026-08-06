"use client";
import { useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Cormorant_Garamond, Jost } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

// ---------------------------------------------------------------------------
// Données
// ---------------------------------------------------------------------------

type Service = {
  name: string;
  image: string;
};

const services: Service[] = [
  {
    name: "Visage",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Corps",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Mains & Pieds",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Rituel à l'Or",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Signature",
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Maquillage",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=500&q=80",
  },
];

// ---------------------------------------------------------------------------
// Anneau doré ambiant (signature visuelle)
// ---------------------------------------------------------------------------

function AmbientRing({ active }: { active: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 200 200"
      className="pointer-events-none absolute -inset-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)]"
      animate={reduceMotion ? undefined : { rotate: 360 }}
      transition={
        reduceMotion
          ? undefined
          : { duration: active ? 6 : 16, repeat: Infinity, ease: "linear" }
      }
    >
      <circle
        cx="100"
        cy="100"
        r="97"
        fill="none"
        stroke="#B9975B"
        strokeWidth={active ? 1.5 : 1}
        strokeOpacity={active ? 0.9 : 0.35}
        strokeDasharray="140 470"
        strokeLinecap="round"
        style={{ transition: "stroke-opacity 0.4s ease, stroke-width 0.4s ease" }}
      />
    </motion.svg>
  );
}

// ---------------------------------------------------------------------------
// Un cercle-service
// ---------------------------------------------------------------------------

function ServiceCircle({ service, index }: { service: Service; index: number }) {
  const [hovered, setHovered] = useState(false);

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col items-center"
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        tabIndex={0}
        className="group relative h-40 w-40 cursor-pointer outline-none sm:h-48 sm:w-48 md:h-56 md:w-56"
      >
        <AmbientRing active={hovered} />

        <div className="relative h-full w-full overflow-hidden rounded-full ring-1 ring-[#3a322c]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={service.image}
            alt={service.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/30 transition-opacity duration-500 group-hover:from-black/85" />

          <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-light italic leading-tight text-white sm:text-2xl">
              {service.name}
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Section principale
// ---------------------------------------------------------------------------

export default function ServicesCircles() {
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  return (
    <section id="services"  className={`${display.variable} ${body.variable} relative bg-[#17151A] px-6 py-24 md:py-32`}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center md:mb-24"
        >
          <span className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.4em] text-[#B9975B]">
            Notre Menu
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-light italic text-[#F2ECE3] md:text-6xl">
            L&apos;Art du Soin
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-[#B9975B]" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-x-10 gap-y-14 md:gap-x-14"
        >
          {services.map((service, i) => (
            <ServiceCircle key={service.name} service={service} index={i} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <a
            href="/services"
            className="inline-block border border-[#B9975B]/60 rounded-full px-10 py-4 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.3em] text-[#F2ECE3] transition-colors duration-300 hover:bg-[#B9975B] hover:text-[#17151A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B9975B]"
          >
          En savoir plus          
          </a>
        </motion.div>
      </div>
    </section>
  );
}