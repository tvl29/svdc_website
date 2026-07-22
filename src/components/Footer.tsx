import { Phone, MapPin } from "lucide-react";
import { locations, practice } from "../data/content";
import { withBase } from "../lib/paths";

// lucide-react (this project's pinned version) doesn't ship brand icons —
// small inline SVGs instead of pulling in a whole extra icon package.
function FacebookIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.4 3.65 15.4 3.6 14.25 3.6c-2.4 0-4.05 1.45-4.05 4.15v2.15H7.5V13H10.2v8h3.3z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.8" cy="7.2" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

// These four are pages that don't exist yet (see HANDOFF_NOTES.md) — once
// built, add matching <Route>s in App.tsx and these can become <Link>s.
// For now they're withBase()'d so they at least don't drop the GitHub
// Pages subpath if clicked.
const quickLinks = [
  { label: "Book a visit", href: practice.bookingUrl, external: true },
  { label: "Patient forms", href: withBase("patient-forms") },
  { label: "Dental Club", href: withBase("dental-club") },
  { label: "Make a payment", href: withBase("payment") },
  { label: "Privacy policy", href: withBase("privacy") },
];

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-[var(--color-ink)] text-white/75 pt-16 pb-10">
      {/* Thin gradient seam at the top edge — a quiet transition from
          whatever section sits above, rather than a hard color cut. */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(122,184,0,0.4), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-[var(--font-display)] text-lg text-white">
              Salinas Valley
              <span className="block text-[0.6em] tracking-[0.2em] uppercase text-[var(--color-lime-mid)] -mt-1">
                Dental Care
              </span>
            </p>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Family, cosmetic, and emergency dentistry serving Salinas and
              Monterey County since {practice.since}.
            </p>
            <div className="mt-6 flex gap-2.5">
              <a
                href="#"
                aria-label="Facebook"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/15 text-white/70 hover:text-[var(--color-lime-mid)] hover:border-[var(--color-lime-mid)]/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/15 text-white/70 hover:text-[var(--color-lime-mid)] hover:border-[var(--color-lime-mid)]/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {[locations.johnStreet, locations.mainStreet].map((loc) => (
            <div key={loc.label}>
              <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--color-lime-mid)]">
                {loc.label} · {loc.isNew ? "Opening Nov. 2026" : "Open now"}
              </p>
              <p className="mt-3.5 flex items-start gap-2 text-sm text-white/85">
                <MapPin size={15} className="mt-0.5 shrink-0 text-white/40" />
                {loc.address}
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm">
                <Phone size={15} className="shrink-0 text-white/40" />
                <a
                  href={practice.phoneHref}
                  className="text-white/85 hover:text-white transition-colors"
                >
                  {practice.phoneDisplay}
                </a>
              </p>

              {/* Embedded map — dim/grayscale at rest, sharpens on hover so
                  it reads as a quiet reference until the visitor wants it. */}
              <div className="group mt-4 aspect-[4/3] rounded-xl overflow-hidden border border-white/10 hover:border-white/25 transition-colors duration-300">
                <iframe
                  title={`Map — ${loc.label}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    loc.mapQuery
                  )}&output=embed`}
                  className="w-full h-full grayscale opacity-70 scale-[1.02] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          ))}

          <div>
            <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--color-lime-mid)]">
              Quick links
            </p>
            <ul className="mt-3.5 space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-white/70 hover:text-white underline decoration-white/0 hover:decoration-white/40 underline-offset-4 transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 text-xs text-white/45 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Salinas Valley Dental Care. All rights reserved.</p>
          <p>Hours: Mon–Fri 8am–6pm · Sat by appointment</p>
        </div>
      </div>
    </footer>
  );
}
