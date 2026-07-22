import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { practice } from "../data/content";
import { brandAssets } from "../data/assets";

const navLinks = [
  { label: "Two Locations", href: "/#locations" },
  { label: "Services", href: "/#services" },
  { label: "New Office", href: "/new-office" },
  { label: "Reviews", href: "/#trust" },
  { label: "Contact", href: "/#footer" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-off-white)]/95 backdrop-blur border-b border-[var(--color-sage)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center shrink-0">
            {/* LOGO: drop the client's logo PNG at public/assets/svdc-logo.png
                (see src/data/assets.ts). Height is fixed; width flexes
                automatically to keep the logo's own aspect ratio. */}
            <img
              src={brandAssets.logo}
              alt="Salinas Valley Dental Care"
              className="h-20 sm:h-30 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[var(--color-warm-gray)] hover:text-[var(--color-olive)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={practice.phoneHref}
              className="flex items-center gap-1.5 text-sm font-semibold text-[var(--color-ink)] hover:text-[var(--color-olive)] transition-colors"
            >
              <Phone size={16} strokeWidth={2.5} />
              {practice.phoneDisplay}
            </a>
            <a
              href={practice.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--color-olive)] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[var(--color-olive-deep)] transition-colors"
            >
              Book a Visit
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-[var(--color-ink)]"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--color-sage)] bg-[var(--color-off-white)]">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-[15px] font-medium text-[var(--color-ink)]"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-3 mt-2 border-t border-[var(--color-sage)]">
              <a
                href={practice.phoneHref}
                className="flex items-center gap-1.5 text-sm font-semibold text-[var(--color-ink)]"
              >
                <Phone size={16} strokeWidth={2.5} />
                {practice.phoneDisplay}
              </a>
              <a
                href={practice.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto rounded-full bg-[var(--color-olive)] text-white px-5 py-2.5 text-sm font-semibold"
              >
                Book a Visit
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
