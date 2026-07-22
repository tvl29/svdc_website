import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { practice } from "../data/content";
import { brandAssets } from "../data/assets";
import { withBase } from "../lib/paths";

// "route: true" items use React Router's <Link> (client-side nav, respects
// the app's basename automatically). Hash anchors stay plain <a> tags but
// get withBase() so they don't drop the GitHub Pages subpath when clicked
// from a page other than the homepage.
const navLinks = [
  { label: "Two Locations", href: withBase("#locations") },
  { label: "Services", href: withBase("#services") },
  { label: "New Office", to: "/new-office" },
  { label: "Reviews", href: withBase("#trust") },
  { label: "Contact", href: withBase("#footer") },
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
            {navLinks.map((link) =>
              link.to ? (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm font-medium text-[var(--color-warm-gray)] hover:text-[var(--color-olive)] transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-[var(--color-warm-gray)] hover:text-[var(--color-olive)] transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
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
            <span
              className={`inline-flex transition-transform duration-300 ease-out ${
                open ? "rotate-90" : "rotate-0"
              }`}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu — animates open/closed via a grid-rows trick (0fr to 1fr)
          so the height transition is smooth without measuring pixel heights
          in JS. Always mounted (not conditionally rendered) so the closing
          transition can actually play. Nav items cascade in with a small
          stagger for a bit of polish; everything collapses to an instant
          snap under prefers-reduced-motion via the global rule in index.css. */}
      <div
        className={`lg:hidden grid overflow-hidden bg-[var(--color-off-white)] border-t border-[var(--color-sage)] transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {navLinks.map((link, i) => {
              const itemClasses = `py-2.5 text-[15px] font-medium text-[var(--color-ink)] transition-all duration-300 ease-out ${
                open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
              }`;
              const itemStyle = { transitionDelay: open ? `${i * 40}ms` : "0ms" };

              return link.to ? (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={itemClasses}
                  style={itemStyle}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={itemClasses}
                  style={itemStyle}
                >
                  {link.label}
                </a>
              );
            })}
            <div
              className={`flex items-center gap-3 pt-3 mt-2 border-t border-[var(--color-sage)] transition-all duration-300 ease-out ${
                open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
              }`}
              style={{ transitionDelay: open ? `${navLinks.length * 40}ms` : "0ms" }}
            >
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
      </div>
    </header>
  );
}
