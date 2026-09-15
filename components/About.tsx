"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Gem, Leaf, Clock } from "lucide-react";

const points = [
  {
    icon: Gem,
    title: "Produits d'exception",
    text: "Une sélection de cosmétiques haut de gamme, choisis pour leur tenue et leur fini.",
  },
  {
    icon: Leaf,
    title: "Approche sur-mesure",
    text: "Chaque visage est unique : nous adaptons technique et palette à votre morphologie.",
  },
  {
    icon: Clock,
    title: "Ponctualité absolue",
    text: "Votre temps est précieux. Nos rendez-vous commencent et finissent à l'heure prévue.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-ivory py-24 md:py-32">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-[2.5rem] shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1000&auto=format&fit=crop"
              alt="Professionnelle Salon Beauty au travail dans son atelier"
              fill
              sizes="(max-width: 1024px) 90vw, 450px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden max-w-[13rem] rounded-2xl bg-burgundy p-6 text-ivory shadow-soft sm:block md:-right-10">
            <p className="font-display text-4xl">128+</p>
            <p className="mt-1 text-xs uppercase tracking-widest2 text-ivory/80">
              Réalisations partagées
            </p>
          </div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            Notre histoire
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-heading mt-2 text-left"
          >
            L&apos;art du maquillage,
            <br />
            pensé comme une signature
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-charcoal/70 leading-relaxed"
          >
            Fondé avec passion, Salon Beauty  est né d&apos;une
            conviction simple : chaque femme mérite de se sentir belle à sa
            manière. Notre équipe de professionnels — maquillage, coiffure,
            esthétique et onglerie — combine technique, écoute et créativité
            pour révéler ce qu&apos;il y a de plus lumineux en vous.
          </motion.p>

          <div className="mt-10 space-y-6">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="flex gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-soft text-burgundy">
                  <p.icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-lg text-charcoal">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-charcoal/65">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
