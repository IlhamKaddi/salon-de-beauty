import { navLinks, salonInfo } from "@/lib/data";
import { Instagram} from "lucide-react";

export default function Footer() {
  return (
    <footer className="section-padding border-t border-ivory/10 bg-charcoal py-14 text-ivory">
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-display text-2xl">{salonInfo.fullName}</p>
          <p className="mt-2 max-w-xs text-sm text-ivory/60">
            Beauté, cosmétique et soins — coiffure, esthétique, onglerie.
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs uppercase tracking-widest2 text-ivory/70 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <a
            href={salonInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 transition-colors hover:border-gold hover:text-gold"
          >
            <Instagram size={16} />
          </a>
       
        </div>
      </div>

      <div className="mt-10 border-t border-ivory/10 pt-6 text-center text-xs text-ivory/40">
        © {new Date().getFullYear()} {salonInfo.fullName}. Tous droits réservés.
      </div>
    </footer>
  );
}
