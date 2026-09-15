"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
   { name: "Accueil", href: "/" },
  { name: "À propos", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Galerie", href: "/galerie" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b bg-white shadow-sm py-4">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
       <Image 
       src= "/logo_salon.png"
       alt="Bella beauty corner logo"
       width={120}
       height={30}
       />

        {/* Desktop Navigation */}
        <nav className="max-lg:hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[16px] font-medium transition hover:text-[#C9A05C]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Button */}
        <a
          href="/localisation"
          className="max-lg:hidden lg:flex items-center rounded-full bg-[#C9A05C] px-6 py-3 text-sm text-white transition hover:bg-[#030302]"
        >
          Localisation
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t bg-white">
          <nav className="flex flex-col p-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-lg"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/localisation"
              className="mt-4 rounded-full bg-[#C9A05C] py-3 text-center text-white"
            >
              Localisation
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}