import type { Metadata } from 'next';
import Image from 'next/image';
import GalleryGrid from '@/components/GalleryGrid';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Topbarre from '@/components/Topbarre';

const SITE_URL = 'https://www.votre-salon.com'; // ← à remplacer
const SALON_NAME = 'Maison Beauty'; // ← à remplacer
const COVER_IMAGE =
  'https://images.unsplash.com/photo-1595475207225-428b62bda831?w=1200&q=80';

export const metadata: Metadata = {
  title: `Galerie | ${SALON_NAME} — Salon de coiffure & beauté`,
  description:
    "Découvrez nos réalisations : coiffure, coloration, maquillage, soins du visage et coiffures de mariée. Un savoir-faire d'exception dans un cadre élégant.",
  alternates: { canonical: `${SITE_URL}/galerie` },
  openGraph: {
    title: `Galerie | ${SALON_NAME}`,
    description:
      'Un aperçu de nos créations : coiffure, coloration, maquillage et soins signature.',
    url: `${SITE_URL}/galerie`,
    siteName: SALON_NAME,
    images: [{ url: COVER_IMAGE, width: 1200, height: 630 }],
    locale: 'fr_FR',
    type: 'website',
  },
};

function GalleryJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: `Galerie — ${SALON_NAME}`,
    description:
      'Réalisations du salon : coiffure, coloration, maquillage, soins du visage, mariée.',
    url: `${SITE_URL}/galerie`,
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function GaleriePage() {
  return (
    <>
      <Navbar />

      {/* --- Bannière Hero --- */}
      <Topbarre
        title="notre Galerie"
        image="/galeries.png"
        alt="Salon de coiffure — espace bar et coiffage"
      />

      <main className="min-h-screen bg-ink px-6 py-4 sm:px-10 lg:px-16">
        <GalleryJsonLd />

        <header className="mx-auto max-w-5xl mb-16  text-center">
          <p className="mb-4 font-body text-xs uppercase tracking-[0.3em] text-gold">
            Portfolio
          </p>

          <div className="mx-auto mt-6 h-px w-16 bg-gold" aria-hidden="true" />


          <div className="mt-6 space-y-6 font-body text-[20px] leading-relaxed">
            <p>
              Bienvenue dans la galerie de <strong>Salon Beauty </strong>, votre
              salon de beauté et de coiffure dédié à l&apos;élégance, au bien-être et à
              la mise en valeur de votre beauté naturelle. Découvrez nos réalisations,
              des coupes de cheveux modernes aux colorations, balayages, brushings et
              extensions, ainsi que nos prestations de maquillage, soins du visage,
              manucure et pédicure.
            </p>

            <p>
              Chaque création reflète le savoir-faire, la créativité et la passion de
              notre équipe. Nous accordons une attention particulière à chaque détail
              afin de vous offrir des prestations personnalisées, adaptées à votre style,
              à vos envies et à chaque occasion, qu&apos;il s&apos;agisse d&apos;un look
              du quotidien ou d&apos;une mise en beauté pour un événement spécial.
            </p>

            <p>
              Laissez-vous inspirer par nos transformations et plongez dans
              l&apos;univers raffiné de Salon Beauty . Découvrez notre travail et
              imaginez votre prochaine mise en beauté réalisée avec expertise, élégance
              et passion.
            </p>
          </div>
        </header>

        <GalleryGrid />
      </main>

      <Footer />
    </>
  );
}