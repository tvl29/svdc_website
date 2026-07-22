import { CalendarCheck, Phone } from "lucide-react";
import { practice } from "../data/content";
import FieldMotif from "./FieldMotif";
import Reveal from "./Reveal";

export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-olive-deep)] py-24 sm:py-32">
      {/* Ambient depth: soft radial glow behind the headline + large,
          faint field-motif texture along the edges. Quiet, not decorative
          clutter — this is the section's one "premium" flourish. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 90% at 50% 20%, rgba(143,191,42,0.16) 0%, rgba(47,74,14,0) 70%)",
        }}
        aria-hidden="true"
      />
      <FieldMotif
        className="hidden sm:block absolute -left-6 bottom-0 w-56 h-28 opacity-[0.14]"
        tone="sage"
      />
      <FieldMotif
        className="hidden sm:block absolute -right-6 bottom-0 w-56 h-28 opacity-[0.14]"
        tone="sage"
      />

      <Reveal direction="up">
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 text-[12px] font-medium tracking-[0.15em] uppercase text-[var(--color-lime-mid)]">
          Opening November 2026
        </span>

        <h2 className="mt-6 font-[var(--font-display)] text-3xl sm:text-5xl leading-[1.1] text-white">
          Be among the first through the new doors.
        </h2>
        <p className="mt-5 text-white/75 text-[15px] sm:text-base leading-relaxed max-w-xl mx-auto">
          Book your visit today, at either location — the same trusted care,
          now with more room to give it.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={practice.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[var(--color-olive-deep)] px-7 py-4 text-[15px] font-semibold shadow-[0_8px_24px_-8px_rgba(0,0,0,0.4)] hover:bg-[var(--color-sage)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <CalendarCheck size={17} strokeWidth={2} />
            Book an appointment
          </a>
          <a
            href={practice.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 text-white px-7 py-4 text-[15px] font-semibold hover:bg-white/10 hover:border-white/60 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Phone size={16} strokeWidth={2} />
            Call {practice.phoneDisplay}
          </a>
        </div>
      </div>
      </Reveal>
    </section>
  );
}
