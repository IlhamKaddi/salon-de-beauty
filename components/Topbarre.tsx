import Image from "next/image";

interface PageHeroProps {
  title: string;
  image: string;
  alt: string;
  height?: string;
}

export default function Topbarre({
  title,
  image,
  alt,
  height = "h-[45vh] sm:h-[55vh]",
}: PageHeroProps) {
  return (
    <section
      className={`relative flex ${height} min-h-[320px] w-full items-center justify-center overflow-hidden mt-16`}
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70" />

    <h1 className="relative z-10 px-4 text-center font-display text-4xl uppercase tracking-[0.25em] text-ivory sm:text-6xl lg:text-7xl">
  {title}
</h1>
    </section>
  );
}