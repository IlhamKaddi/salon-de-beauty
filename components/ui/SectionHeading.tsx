"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      <span className={`eyebrow ${light ? "text-gold" : "text-rose"}`}>
        {eyebrow}
      </span>
      <h2
        className={`section-heading mt-2 ${
          light ? "text-ivory" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-5 h-px w-16 ${
          align === "center" ? "mx-auto" : ""
        } bg-gradient-to-r from-transparent via-gold to-transparent`}
      />
    </motion.div>
  );
}
