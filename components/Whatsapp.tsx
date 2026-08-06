"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "0664132203";
  const message = encodeURIComponent("Bonjour, je souhaite avoir plus d'informations.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="text-4xl" />
    </a>
  );
}