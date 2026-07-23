import { HeartHandshake, Sparkles, ShieldCheck, Siren, ArrowUpRight } from "lucide-react";
import { services } from "../data/content";
import Reveal from "./Reveal";
import FieldMotif from "./FieldMotif";

const icons = [HeartHandshake, Sparkles, ShieldCheck, Siren];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[var(--color-sage)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-[13px] font-semibold tracking-[0.15em] uppercase text-[var(--color-olive)]">
            Care, under one roof
          </p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl sm:text-4xl">
            Everything a healthy smile needs.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = icons[i];
            // Left column slides in from the left, right column from the
            // right — matches the two-column grid so the reveal direction
            // makes spatial sense.
            const direction = i % 2 === 0 ? "left" : "right";
            
            return (
              <Reveal key={service.title} direction={direction}>
                <div
                  className="group relative rounded-3xl p-8 sm:p-10 border border-transparent hover:border-[var(--color-olive)]/20 shadow-[0_1px_2px_rgba(74,68,56,0.05)] hover:shadow-[0_28px_56px_-24px_rgba(74,68,56,0.28)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(160deg, #FFFFFF 0%, #FFFFFF 65%, var(--color-sage) 180%)",
                  }}
                >
                  {/* Thin brand accent bar — appears on hover, echoing the
                      Trust card's top ribbon so the two sections read as
                      part of the same design language. */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--color-olive), var(--color-lime-mid))",
                    }}
                    aria-hidden="true"
                  />

                  {/* Large faint numeral — quiet editorial detail, sits
                      behind everything else in the card */}
                  <span
                    className="absolute -top-3 right-4 font-[var(--font-display)] text-7xl text-[var(--color-olive)]/[0.06] select-none pointer-events-none"
                    aria-hidden="true"
                  >
                  
                  </span>

                  <div className="relative flex items-start justify-between">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--color-sage)] text-[var(--color-olive)] shadow-[0_1px_2px_rgba(74,68,56,0.06)] group-hover:bg-[var(--color-olive)] group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_rgba(47,74,14,0.45)] transition-all duration-300">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                  </div>

                  <h3 className="relative mt-6 font-[var(--font-display)] text-xl">
                    {service.title}
                  </h3>
                  <p className="relative mt-2.5 text-[15px] leading-relaxed text-[var(--color-warm-gray)]">
                    {service.description}
                  </p>

                  <div className="relative mt-6 flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-olive)] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Learn more
                    <ArrowUpRight size={14} strokeWidth={2.5} />
                  </div>

                  <FieldMotif
                    className="absolute -bottom-2 -right-2 w-24 h-12 opacity-[0.07] pointer-events-none"
                    tone="olive"
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
