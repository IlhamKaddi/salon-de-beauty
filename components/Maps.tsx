"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Instagram, Clock, ExternalLink } from "lucide-react";
import { salonInfo } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";

export default function Maps() {
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
     salonInfo.address
  )}&output=embed`;

  return (
    <section id="contact" className="section-padding bg-ivory py-24 md:py-32">
      <SectionHeading eyebrow="Où nous trouver" title="Venez Nous Rendre Visite" />

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2"
        >
          <div className="flex h-full flex-col rounded-3xl bg-burgundy p-8 text-ivory shadow-soft md:p-10">
            <h3 className="font-display text-2xl">{salonInfo.fullName}</h3>
            <p className="mt-2 text-sm text-ivory/70">
              Passez nous voir ou contactez-nous directement, notre équipe
              vous accueille avec plaisir.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href={`tel:${salonInfo.phone}`}
                className="flex items-center gap-4 text-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ivory/10">
                  <Phone size={16} />
                </span>
                {salonInfo.phoneDisplay}
              </a>
              <a
                href={salonInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ivory/10">
                  <Instagram size={16} />
                </span>
                {salonInfo.instagramHandle}
              </a>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ivory/10">
                  <Clock size={16} />
                </span>
                Tous les jours : {salonInfo.hours}
              </div>
              <a
                href={salonInfo.mapsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ivory/10">
                  <MapPin size={16} />
                </span>
                {salonInfo.address}
              </a>
            </div>

            {/* <a
              href={salonInfo.mapsShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="satin-hover mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-insta-gradient px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-ivory mt-8"
            >
              Itinéraire sur Google Maps <ExternalLink size={14} />
            </a> */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <div className="h-full min-h-[420px] overflow-hidden rounded-3xl border border-charcoal/10 shadow-card">
            <iframe
              title={`Localisation ${salonInfo.fullName}`}
              src={mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 420 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
