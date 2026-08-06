"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const HERO_IMAGE_SRC =
  "/bg-hero.png";

const headlineLines = ["Coiffure", "& Institut de Beauté"];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.3,
    },
  },
};

const lineUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      aria-label="Présentation — Bella Beauty Corner"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#0B0A08]"
    >
      {/* Background image with slow Ken Burns drift */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "linear" }}
      >
        <Image
          src={HERO_IMAGE_SRC}
          alt="Intérieur du salon Bella Beauty Corner, coiffeuse au travail"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_30%]"
        />
      </motion.div>

      {/* Directional gradient — darker on the left where the text sits */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(11,10,8,0.92) 0%, rgba(11,10,8,0.72) 28%, rgba(11,10,8,0.35) 55%, rgba(11,10,8,0.15) 78%, rgba(11,10,8,0.05) 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B0A08]/80 to-transparent md:hidden" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-24 sm:px-10 md:px-14 md:pb-0"
      >
        <motion.p
          variants={lineUp}
          className="font-body mb-5 text-[11px] font-medium uppercase tracking-[0.42em] text-[#C9A05C]"
        >
          Casablanca · Depuis toujours au service de votre beauté
        </motion.p>

        <h1 className="font-display text-[#F5F1E8]">
          {headlineLines.map((line) => (
            <motion.span
              key={line}
              variants={lineUp}
              className="block text-[13vw] leading-[1.04] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          variants={lineUp}
          className="font-body mt-7 max-w-md text-[15px] font-light leading-relaxed tracking-wide text-[#E7E2D6]/85 sm:text-base"
        >
          Découvrez l&apos;un des plus talentueux artistes capillaires de
          votre ville, dans un cadre pensé pour votre bien-être.
        </motion.p>

        <motion.div variants={lineUp} className="mt-10">
          <a
            href="/services"
            className="font-body group relative inline-flex items-center gap-3  rounded-full border-2 border-[#C9A05C] bg-[#C9A05C]/10 px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.28em] text-[#F5F1E8] backdrop-blur-sm transition-all duration-300 hover:bg-[#C9A05C]/20"
          >
            Nos Services
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 right-6 z-10 hidden flex-col items-center gap-3 md:flex md:right-10"
      >
        <span className="font-body text-[10px] uppercase tracking-[0.3em] text-[#F5F1E8]/60 [writing-mode:vertical-rl]">
          Défiler
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-gradient-to-b from-[#C9A05C] to-transparent"
        />
      </motion.div>
    </section>
  );
}