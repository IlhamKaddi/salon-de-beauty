"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";

const images = [
  "/galery/g1.jpg",
  "/galery/g2.jpg",
   "/galery/g9.jpg",
  "/galery/g3.jpg",
  "/galery/g4.jpg",
  "/galery/g6.jpg",
  "/galery/g7.jpg",
  "/galery/g10.jpg",
   "/galery/g5.jpg",


  
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="section-padding bg-ivory py-24 md:py-32"
    >
      <SectionHeading
        eyebrow="Portfolio"
        title="Notre Galerie Beauté"
      />

      <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
            }}
            className="group relative overflow-hidden rounded-2xl"
          >
            <div className="relative aspect-square w-full">
              <Image
                src={src}
                alt={`Réalisation ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={i < 3}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}