import { useState } from "react";
import {
  Star,
  Quote,
  CalendarCheck2,
  ChevronLeft,
  ChevronRight,
  User,
  BadgeCheck,
} from "lucide-react";
import { reviews, practice } from "../data/content";
import Reveal from "./Reveal";
import FieldMotif from "./FieldMotif";

export default function Trust() {
  const [index, setIndex] = useState(0);
  // Tracks which way the content should slide in from — "next" slides in
  // from the right (like moving forward), "prev" from the left.
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const current = reviews[index];

  const showPrev = () => {
    setDirection("prev");
    setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  };
  const showNext = () => {
    setDirection("next");
    setIndex((i) => (i + 1) % reviews.length);
  };
  const goTo = (target: number) => {
    setDirection(target > index ? "next" : "prev");
    setIndex(target);
  };

  return (
    <section id="trust" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <p className="text-[13px] font-semibold tracking-[0.15em] uppercase text-[var(--color-olive)] text-center">
          Trusted since {practice.since}
        </p>

        <Reveal direction="up">
        <div className="relative mt-14">
          {/* Arrows — sit outside the card on desktop, drop below it on
              mobile where there's no room to the sides. Only shown when
              there's more than one review to page through. */}
          {reviews.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPrev}
                aria-label="Previous review"
                className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 items-center justify-center w-11 h-11 rounded-full border border-[var(--color-olive)]/25 text-[var(--color-olive)] hover:bg-[var(--color-olive)] hover:text-white hover:border-[var(--color-olive)] transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Next review"
                className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 items-center justify-center w-11 h-11 rounded-full border border-[var(--color-olive)]/25 text-[var(--color-olive)] hover:bg-[var(--color-olive)] hover:text-white hover:border-[var(--color-olive)] transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <div
            className="relative rounded-3xl border border-[var(--color-sage)] shadow-[0_30px_60px_-30px_rgba(74,68,56,0.25)] px-8 pt-14 pb-12 sm:px-16 sm:pt-16 sm:pb-16 text-center overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 70%, var(--color-sage) 160%)",
            }}
          >
            {/* Thin brand accent bar along the top edge */}
            <div
              className="absolute top-0 left-0 right-0 h-1.5"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-olive) 0%, var(--color-lime-mid) 50%, var(--color-olive) 100%)",
              }}
              aria-hidden="true"
            />

            {/* Floating quote medallion — a small "seal" overlapping the
                top edge, echoing the icon-badge language used in the
                Services section elsewhere on the site. */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-7 w-14 h-14 rounded-full bg-[var(--color-olive)] shadow-[0_10px_24px_-6px_rgba(47,74,14,0.5)] flex items-center justify-center">
              <Quote size={22} strokeWidth={2} className="text-white" fill="currentColor" />
            </div>

            <div className="flex justify-center gap-0.5 text-[var(--color-lime-mid)]">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </div>

            <div
              key={index}
              className={
                direction === "next"
                  ? "animate-[slideInFromRight_0.4s_ease-out]"
                  : "animate-[slideInFromLeft_0.4s_ease-out]"
              }
            >
              <blockquote className="mt-6 font-[var(--font-display)] text-xl sm:text-2xl leading-snug text-[var(--color-ink)] italic">
                "{current.quote}"
              </blockquote>

              {/* Patient identity + verification badge — reinforces this
                  is a real, sourced review rather than just decorative
                  copy, which matters most for a healthcare audience. */}
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[var(--color-sage)] text-[var(--color-olive)] shrink-0">
                  <User size={16} strokeWidth={2} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-[var(--color-ink)]">
                    {current.author}
                  </p>
                  <p className="flex items-center gap-1 text-[12px] text-[var(--color-warm-gray)]">
                    <BadgeCheck size={13} className="text-[var(--color-olive)]" />
                    Verified Google review
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile-only arrows, centered below the quote since there's no
                side room to place them like on desktop */}
            {reviews.length > 1 && (
              <div className="sm:hidden flex justify-center gap-4 mt-7">
                <button
                  type="button"
                  onClick={showPrev}
                  aria-label="Previous review"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-olive)]/25 text-[var(--color-olive)]"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next review"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-olive)]/25 text-[var(--color-olive)]"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}

            {/* Dot indicators */}
            {reviews.length > 1 && (
              <div className="flex justify-center gap-2 mt-7">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Show review ${i + 1}`}
                    aria-current={i === index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index
                        ? "w-6 bg-[var(--color-olive)]"
                        : "w-1.5 bg-[var(--color-olive)]/25"
                    }`}
                  />
                ))}
              </div>
            )}

            <div className="relative mt-10 pt-8 border-t border-[var(--color-sage)] flex flex-col sm:flex-row justify-center items-center gap-x-10 gap-y-3 text-sm text-[var(--color-warm-gray)]">
              <span className="flex items-center gap-2">
                <Star size={16} className="text-[var(--color-lime-mid)]" fill="currentColor" strokeWidth={0} />
                {practice.reviewCount} five-star reviews on Google &amp; Yelp
              </span>
              <span className="flex items-center gap-2">
                <CalendarCheck2 size={16} className="text-[var(--color-olive)]" />
                Caring for Salinas since {practice.since}
              </span>
            </div>

            <FieldMotif
              className="absolute -bottom-2 -right-2 w-32 h-16 opacity-[0.08] pointer-events-none"
              tone="olive"
            />
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
