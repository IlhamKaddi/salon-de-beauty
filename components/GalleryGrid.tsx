'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

// --- Data ------------------------------------------------------------------
// Remplace les `src` par les vraies photos du salon.

type Category = 'coiffure' | 'coloration' | 'maquillage' | 'soins' | 'mariee';
type FilterKey = Category | 'tous';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: Category;
  featured?: boolean;
}

const categories: { key: FilterKey; label: string }[] = [
  { key: 'tous', label: 'Tous' },
  { key: 'coiffure', label: 'Coiffure' },
  { key: 'coloration', label: 'Coloration' },
  { key: 'maquillage', label: 'Maquillage' },
  { key: 'soins', label: 'Soins du visage' },
  { key: 'mariee', label: 'Mariée' },
];

const galleryItems: GalleryItem[] = [
  { id: 'g01', src: '/galery/g1.jpg', alt: 'Coupe carré structuré avec finition brillante', width: 1200, height: 1500, category: 'coiffure', featured: true },
  { id: 'g02', src: '/galery/g2.jpg', alt: 'Balayage blond miel sur cheveux longs ondulés', width: 1200, height: 1400, category: 'coloration' },
  { id: 'g03', src: '/galery/g3.jpg', alt: 'Maquillage soirée aux tons cuivrés et regard sophistiqué', width: 1200, height: 1500, category: 'maquillage' },
  { id: 'g04', src: '/galery/g4.jpg', alt: 'Soin du visage en cabine avec masque hydratant', width: 1200, height: 1350, category: 'soins' },
  { id: 'g05', src: '/galery/g5.jpg', alt: 'Coiffure de mariée tressée ornée de fleurs blanches', width: 1200, height: 1600, category: 'mariee', featured: true },
  { id: 'g06', src: '/galery/g6.jpg', alt: 'Coupe courte effilée avec mise en forme volumineuse', width: 1200, height: 1400, category: 'coiffure' },
  { id: 'g07', src: '/galery/g7.jpg', alt: 'Coloration cuivrée intense avec reflets acajou', width: 1200, height: 1500, category: 'coloration' },
  { id: 'g08', src: '/galery/g8.jpg', alt: 'Maquillage nude glowy pour un teint lumineux', width: 1200, height: 1350, category: 'maquillage' },
  { id: 'g09', src: '/galery/g9.jpg', alt: 'Application de soin visage aux extraits botaniques', width: 1200, height: 1400, category: 'soins' },
  { id: 'g10', src: '/galery/g10.jpg', alt: 'Chignon de mariée bas orné de perles', width: 1200, height: 1500, category: 'mariee' },
  { id: 'g11', src: '/galery/g5.jpg', alt: 'Ondulations souples effet naturel sur cheveux mi-longs', width: 1200, height: 1350, category: 'coiffure' },
  { id: 'g12', src: '/galery/g6.jpg', alt: 'Coloration platine avec racines ombrées', width: 1200, height: 1600, category: 'coloration', featured: true },
];

const EASE = [0.22, 1, 0.36, 1] as const;

// --- Component ---------------------------------------------------------------

export default function GalleryGrid() {
  const [active, setActive] = useState<FilterKey>('tous');

  const filtered = useMemo(
    () =>
      active === 'tous'
        ? galleryItems
        : galleryItems.filter((item) => item.category === active),
    [active]
  );

  return (
    <div>
      {/* Filtres */}
      <nav
        aria-label="Filtrer la galerie par prestation"
        className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
      >
        {categories.map((cat) => {
          const isActive = active === cat.key;
          return (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActive(cat.key)}
              aria-pressed={isActive}
              className={[
                'relative pb-2 font-body text-sm uppercase tracking-[0.18em] transition-colors duration-300',
                isActive ? 'text-ivory' : 'text-ivory/50 hover:text-ivory/80',
              ].join(' ')}
            >
              {cat.label}
            </button>
          );
        })}
      </nav>

      {/* Grille éditoriale (masonry via colonnes CSS) */}
      <motion.div
        layout
        className="columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item, index) => (
            <motion.figure
              key={item.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.55, delay: index * 0.05, ease: EASE }}
              className="group relative mb-6 break-inside-avoid overflow-hidden rounded-sm bg-black/20"
            >
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: `${item.width} / ${item.height}` }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  priority={item.featured}
                />
              </div>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}