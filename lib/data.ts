export type Service = {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  icon: "bridal" | "party" | "engagement" | "photoshoot" | "lips" | "skin";
};

export const services: Service[] = [
  {
    id: "bridal",
    title: "Maquillage Mariée",
    description:
      "Un teint qui tient toute la journée et une allure intemporelle, pensée pour votre plus beau jour.",
    price: "À partir de 1 800 MAD",
    duration: "2h30",
    icon: "bridal",
  },
  {
    id: "party",
    title: "Maquillage Soirée",
    description:
      "Regard sculpté, teint lumineux : une présence remarquée sous toutes les lumières.",
    price: "À partir de 600 MAD",
    duration: "1h",
    icon: "party",
  },
  {
    id: "engagement",
    title: "Maquillage Fiançailles",
    description:
      "Douceur et éclat pour immortaliser vos fiançailles avec une beauté naturelle rehaussée.",
    price: "À partir de 900 MAD",
    duration: "1h30",
    icon: "engagement",
  },
  {
    id: "photoshoot",
    title: "Maquillage Shooting Photo",
    description:
      "Un rendu impeccable pensé pour l'objectif : peau parfaite, contours nets, tenue longue durée.",
    price: "À partir de 750 MAD",
    duration: "1h30",
    icon: "photoshoot",
  },
  {
    id: "lips",
    title: "Cours de Maquillage",
    description:
      "Apprenez les gestes des professionnels : routine personnalisée et conseils sur-mesure.",
    price: "À partir de 500 MAD",
    duration: "2h",
    icon: "lips",
  },
  {
    id: "skin",
    title: "Soin & Préparation Peau",
    description:
      "Nettoyage, hydratation et préparation de la peau avant maquillage pour un résultat sublime.",
    price: "À partir de 400 MAD",
    duration: "45 min",
    icon: "skin",
  },
];

export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "essential",
    name: "Essentiel",
    price: "600",
    period: "MAD / séance",
    description: "L'élégance simple pour vos sorties et occasions quotidiennes.",
    features: [
      "Préparation de la peau",
      "Maquillage teint & regard",
      "Fixation longue tenue",
      "Retouche de 15 min incluse",
    ],
  },
  {
    id: "signature",
    name: "Signature",
    price: "1 200",
    period: "MAD / séance",
    description: "Notre expérience la plus demandée, pour un événement mémorable.",
    features: [
      "Consultation beauté préalable",
      "Soin de peau premium",
      "Maquillage complet + cils",
      "Coiffure d'accompagnement",
      "Produits haut de gamme",
    ],
    featured: true,
  },
  {
    id: "bridal-lux",
    name: "Mariée Prestige",
    price: "3 500",
    period: "MAD / forfait",
    description: "L'expérience ultime : essai, jour J et retouches sur place.",
    features: [
      "Essai maquillage inclus",
      "Maquillage jour J à domicile",
      "Assistante beauté sur place",
      "Kit retouche personnalisé",
      "Coiffure & extensions de cils",
    ],
  },
];

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Salma B.",
    role: "Mariée, Casablanca",
    quote:
      "Un maquillage qui a tenu du matin jusqu'au bout de la nuit. Je me suis sentie belle et surtout moi-même.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Yasmine K.",
    role: "Shooting éditorial",
    quote:
      "Précision et écoute incroyables. Le rendu à la caméra était exactement ce que je voulais.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Imane R.",
    role: "Fiançailles",
    quote:
      "Une équipe à l'écoute, un salon magnifique et un résultat qui a dépassé mes attentes.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Nadia A.",
    role: "Invitée de mariage",
    quote:
      "L'accueil était chaleureux et le maquillage est resté impeccable toute la journée. Je reviendrai avec plaisir.",
    rating: 5,
  },
  {
    id: "t5",
    name: "Sara M.",
    role: "Événement privé",
    quote:
      "Une expérience exceptionnelle du début à la fin. Les conseils étaient personnalisés et le résultat très élégant.",
    rating: 5,
  },
  {
    id: "t6",
    name: "Hajar L.",
    role: "Mariée, Mohammedia",
    quote:
      "Professionnalisme, douceur et souci du détail. Mon maquillage était lumineux et a reçu énormément de compliments.",
    rating: 5,
  },
];

export const galleryImages = [
  { id: "g1", alt: "Maquillage mariée élégant" },
  { id: "g2", alt: "Regard smoky sophistiqué" },
  { id: "g3", alt: "Teint lumineux soirée" },
  { id: "g4", alt: "Maquillage fiançailles doux" },
  { id: "g5", alt: "Shooting photo professionnel" },
  { id: "g6", alt: "Coiffure et maquillage assortis" },
];

export const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Galerie", href: "/galerie" },
  { label: "Localisation", href: "/localisation" },
];

export const salonInfo = {
  name: "Bella Beauty",
  fullName: "Salon Beauty",
  instagramHandle: "Salon beauty",
  instagramUrl: "https://instagram.com",
  phone: "0000000000",
  phoneDisplay: "06 00 00 00 00",
  hours: "11:00 – 21:00",
  mapsShareUrl: "https://maps.app.goo.gl/2hFmRY5uuh7LLqKZ9",
  // Remplacez cette adresse par l'adresse exacte du salon pour un pin précis
  address: "Maroc",
};

export const instagramHighlights = [
  { id: "feedback", label: "Feed-back", emoji: "😍" },
  { id: "makeup", label: "Makeup", emoji: "💄" },
  { id: "nails", label: "Nails", emoji: "💅" },
  { id: "favorite", label: "My favorite", emoji: "💖" },
  { id: "hydrafacial", label: "Hydrafacial", emoji: "✨" },
  { id: "diamond", label: "Black Diamant", emoji: "💎" },
  { id: "keratin", label: "Keratine Soin", emoji: "🌿" },
];




