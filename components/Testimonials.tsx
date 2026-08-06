"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className="section-padding bg-ivory2 py-24 md:py-32">
      <SectionHeading
        eyebrow="Elles témoignent"
        title="La Voix de Nos Clientes"
      />

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mt-16"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={t.id}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative h-full rounded-3xl bg-ivory p-8 shadow-card"
            >
              <Quote
                className="absolute right-6 top-6 text-rose-soft"
                size={36}
              />

              <div className="flex gap-1 text-gold">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={15}
                    fill="currentColor"
                    strokeWidth={0}
                  />
                ))}
              </div>

              <p className="mt-5 leading-relaxed text-charcoal/75">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 border-t border-charcoal/10 pt-5">
                <p className="font-display text-base text-charcoal">
                  {t.name}
                </p>
                <p className="text-xs uppercase tracking-widest2 text-charcoal/50">
                  {t.role}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}