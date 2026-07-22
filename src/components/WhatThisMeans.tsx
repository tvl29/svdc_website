import { whatThisMeans } from "../data/content";
import Reveal from "./Reveal";

export default function WhatThisMeans() {
  return (
    <section className="bg-[var(--color-sage)] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-[13px] font-semibold tracking-[0.15em] uppercase text-[var(--color-olive)] text-center">
          What this means for you
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {whatThisMeans.map((item, i) => (
            <Reveal key={item.title} direction="up" delay={i * 100}>
              <div className="text-center sm:text-left">
                <h3 className="font-[var(--font-display)] text-xl text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-warm-gray)]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
