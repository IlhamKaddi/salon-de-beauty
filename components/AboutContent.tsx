"use client";
import Image from "next/image";
import { type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Award,
  HeartHandshake,
  Leaf,
  Infinity as InfinityIcon,
  Scissors,
  Sparkles,
  Gem,
  Palette,
} from "lucide-react";

/* -------------------------------------------------------------------------
 * Palette (à ajouter éventuellement dans tailwind.config si vous préférez
 * des noms sémantiques : ivoire #FBF6F1, encre #2B2420, or #B08D57,
 * rose poudré #A8646E, émeraude #1F3A34, ligne #E3D5C8
 * ---------------------------------------------------------------------- */

const EASE = [0.65, 0, 0.35, 1] as const;

/* -------------------------------------------------------------------------
 * Petits composants utilitaires réutilisés dans toute la page
 * ---------------------------------------------------------------------- */

// Séparateur ornemental (losange doré entre deux lignes fines)
function Flourish({ light = false }: { light?: boolean }) {
  const color = light ? "#D8C7A1" : "#B08D57";
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
      <span
        className="h-px w-12 sm:w-16"
        style={{ background: `linear-gradient(to right, transparent, ${color})` }}
      />
      <span className="h-1.5 w-1.5 rotate-45" style={{ backgroundColor: color }} />
      <span
        className="h-px w-12 sm:w-16"
        style={{ background: `linear-gradient(to left, transparent, ${color})` }}
      />
    </div>
  );
}

// Effet "signature" : révélation façon miroir essuyé — le contenu apparaît
// pendant qu'un fin trait de lumière glisse par-dessus, comme une buée
// que l'on efface d'un geste sur un miroir de coiffeuse.
function MirrorReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={reduce ? undefined : { opacity: 0, y: 22 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: EASE, delay }}
      >
        {children}
      </motion.div>
      {!reduce && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-md"
          initial={{ x: "-140%" }}
          whileInView={{ x: "340%" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: EASE, delay: delay + 0.15 }}
        />
      )}
    </div>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/* -------------------------------------------------------------------------
 * Données de contenu (à personnaliser avec les vrais textes du salon)
 * ---------------------------------------------------------------------- */

const values = [
  {
    icon: Award,
    title: "Excellence & savoir-faire",
    text: "Chaque geste est exécuté avec précision par des artisans formés aux techniques les plus exigeantes.",
  },
  {
    icon: HeartHandshake,
    title: "Écoute & sur-mesure",
    text: "Votre visage, votre chevelure, votre personnalité : chaque prestation est pensée pour vous seule.",
  },
  {
    icon: Leaf,
    title: "Produits nobles",
    text: "Nous sélectionnons des soins et cosmétiques de qualité, respectueux de votre peau et de vos cheveux.",
  },
  {
    icon: InfinityIcon,
    title: "Élégance intemporelle",
    text: "Une signature esthétique raffinée, loin des effets de mode, pensée pour durer et vous ressembler.",
  },
];

const expertise = [
  {
    icon: Scissors,
    title: "Coiffure sur-mesure",
    text: "Coupe, coloration et coiffage, adaptés à la texture et à la personnalité de chaque chevelure.",
  },
  {
    icon: Sparkles,
    title: "Soins du visage",
    text: "Rituels de soin ciblés pour révéler l'éclat naturel de votre peau, en toute délicatesse.",
  },
  {
    icon: Gem,
    title: "Manucure & pédicure",
    text: "Un fini impeccable et durable, entre précision technique et attention du détail.",
  },
  {
    icon: Palette,
    title: "Maquillage professionnel",
    text: "Des looks sur-mesure pour vos grands jours, du naturel sublimé à l'expression la plus affirmée.",
  },
];

const stats = [
  { value: "12+", label: "années d'expérience" },
  { value: "4 500+", label: "clientes accompagnées" },
  { value: "9", label: "artisans de beauté" },
  { value: "98%", label: "clientes satisfaites" },
];

/* -------------------------------------------------------------------------
 * Page
 * ---------------------------------------------------------------------- */

export default function AboutContent() {
  return (
    <main className="bg-[#FBF6F1] font-[family-name:var(--font-body)] text-[#2B2420] antialiased">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-6 pb-24 pt-8 sm:pt-16 sm:pb-32"> 

        {/* halo doux évoquant une lumière de coiffeuse */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#A8646E]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-xs font-semibold uppercase tracking-[0.35em] text-[#A8646E]"
          >
            Salon Beauty
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="mt-5 font-[family-name:var(--font-display)] text-4xl italic leading-[1.15] text-[#2B2420] sm:text-6xl"
          >
            L&apos;art de la beauté,
            <br />
            sublimé dans chaque détail
          </motion.h1>

          <div className="my-8">
            <Flourish />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
            className="mx-auto max-w-xl text-base leading-relaxed text-[#5A4F47] sm:text-lg"
          >
            Bienvenue chez <strong className="font-semibold text-[#2B2420]">Salon Beauty</strong>,
            salon de beauté et coiffure où le savoir-faire artisanal rencontre
            une élégance intemporelle. Ici, chaque rendez-vous est un moment
            suspendu, pensé pour révéler ce qui vous rend unique.
          </motion.p>
        </div>
      </section>

      {/* ================= NOTRE HISTOIRE ================= */}
      <section className="px-6 py-2 sm:py-8">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <MirrorReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A8646E]">
              Notre histoire
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl italic text-[#2B2420] sm:text-4xl">
              Née d&apos;une passion pour la beauté authentique
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#5A4F47]">
              Salon Beauty est né d&apos;une conviction simple : la
              beauté ne se standardise pas, elle se révèle. Fondé par une
              équipe de professionnels passionnés, notre salon a grandi au
              fil des années pour devenir une adresse de confiance, où chaque
              cliente est reçue avec la même attention, la même exigence et
              la même sincérité.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#5A4F47]">
              Aujourd&apos;hui encore, nous cultivons cet esprit de maison :
              un lieu chaleureux et raffiné, où le geste technique s&apos;allie
              à l&apos;écoute, et où chaque visite est pensée comme une
              parenthèse de bien-être.
            </p>
          </MirrorReveal>

          <MirrorReveal delay={0.15}>
            {/* Remplacez ce bloc par un <Image> Next.js réel du salon.
                Alt SEO suggéré : "Intérieur élégant du salon Salon Beauty" */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#EADFD3] via-[#F3E4E4] to-[#E4D9D0]">
              <div className="absolute inset-0 flex items-center justify-center">
               <Image
  src="/bg-hero.png"
  alt="Intérieur élégant du salon Salon Beauty"
  fill
  className="object-cover"
/>
              </div>
              <div className="absolute inset-6 rounded-[1.5rem] border border-[#B08D57]/30" />
            </div>
          </MirrorReveal>
        </div>
      </section>

      <div className="px-6">
        <div className="mx-auto max-w-6xl">
          <Flourish />
        </div>
      </div>

      {/* ================= NOS VALEURS ================= */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A05C]">
              Nos valeurs
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl italic text-[#2B2420] sm:text-4xl">
              Ce qui guide chacun de nos gestes
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <MirrorReveal key={value.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-[#E3D5C8] bg-white/60 p-7 transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(43,36,32,0.15)]">
                  <value.icon className="h-6 w-6 text-[#B08D57]" strokeWidth={1.5} />
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg text-[#2B2420]">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A4F47]">
                    {value.text}
                  </p>
                </div>
              </MirrorReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NOTRE EXPERTISE ================= */}
      <section className="bg-[#F5EEE6] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A8646E]">
              Notre expertise
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl italic text-[#2B2420] sm:text-4xl">
              Un savoir-faire complet, pensé pour vous
            </h2>
          </div>

          <div className="mt-16 divide-y divide-[#E3D5C8] border-y border-[#E3D5C8]">
            {expertise.map((item, i) => (
              <MirrorReveal key={item.title} delay={i * 0.06}>
                <div className="flex flex-col items-start gap-4 py-8 sm:flex-row sm:items-center sm:gap-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2B2420]">
                    <item.icon className="h-5 w-5 text-[#B08D57]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl text-[#2B2420]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-[#5A4F47]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </MirrorReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CHIFFRES CLÉS ================= */}
      <section className="bg-black/90 px-6 py-16 text-[#FBF6F1] sm:py-20">
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto grid max-w-5xl grid-cols-2 gap-y-10 text-center sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <p className="font-[family-name:var(--font-display)] text-4xl italic text-[#C9A05C] sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#FBF6F1]/70">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

 {/* ================= CTA FINAL ================= */}
<section id="contact" className="px-6 py-24 sm:py-32">
  <div className="mx-auto max-w-2xl text-center">
    <Flourish />

    <h2 className="mt-8 font-[family-name:var(--font-display)] text-3xl italic text-[#2B2420] sm:text-4xl">
      Prête à révéler votre beauté ?
    </h2>

    <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-[#5A4F47]">
      Notre équipe vous accueille avec plaisir pour vous conseiller et répondre
      à toutes vos questions. Contactez-nous dès aujourd hui et découvrez
      l expérience Salon Beauty.
    </p>

    <div className="mt-9">
      <a
        href="/contact"
        className="inline-flex items-center justify-center rounded-full bg-[#2B2420] px-9 py-3.5 text-sm font-medium tracking-wide text-[#FBF6F1] transition-colors hover:bg-[#C9A05C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B08D57]"
      >
        Nous contacter
      </a>
    </div>
  </div>
</section>
    </main>
  );
}