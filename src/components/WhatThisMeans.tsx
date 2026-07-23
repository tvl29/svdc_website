import { Expand, CalendarClock, ShieldCheck } from "lucide-react";
import { whatThisMeans } from "../data/content";
import Reveal from "./Reveal";
import FieldMotif from "./FieldMotif";

const icons = [Expand, CalendarClock, ShieldCheck];

export default function WhatThisMeans() {
  return (
    <section className="bg-[var(--color-sage)] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-[13px] font-semibold tracking-[0.15em] uppercase text-[var(--color-olive)] text-center">
          What this means for you
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {whatThisMeans.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.title} direction="up" delay={i * 100}>
                <div
                  className="group relative rounded-3xl p-7 sm:p-8 border border-transparent hover:border-[var(--color-olive)]/20 shadow-[0_1px_2px_rgba(74,68,56,0.05)] hover:shadow-[0_24px_48px_-22px_rgba(74,68,56,0.25)] hover:-translate-y-1 transition-all duration-300 overflow-hidden text-center sm:text-left"
                  style={{
                    background:
                      "linear-gradient(160deg, #FFFFFF 0%, #FFFFFF 70%, var(--color-sage) 190%)",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--color-olive), var(--color-lime-mid))",
                    }}
                    aria-hidden="true"
                  />

                  <div className="flex items-center justify-center sm:justify-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white text-[var(--color-olive)] shadow-[0_1px_2px_rgba(74,68,56,0.06)] group-hover:bg-[var(--color-olive)] group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_rgba(47,74,14,0.4)] transition-all duration-300">
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                  </div>

                  <h3 className="mt-5 font-[var(--font-display)] text-xl text-[var(--color-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-warm-gray)]">
                    {item.description}
                  </p>

                  <FieldMotif
                    className="absolute -bottom-2 -right-2 w-20 h-10 opacity-[0.07] pointer-events-none"
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
