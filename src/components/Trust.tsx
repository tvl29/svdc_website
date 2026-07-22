import { Star, Quote, CalendarCheck2 } from "lucide-react";
import { featuredReview, practice } from "../data/content";

export default function Trust() {
  return (
    <section id="trust" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <p className="text-[13px] font-semibold tracking-[0.15em] uppercase text-[var(--color-olive)] text-center">
          Trusted since {practice.since}
        </p>

        <div className="mt-8 relative rounded-3xl bg-white border border-[var(--color-sage)] shadow-[0_1px_2px_rgba(74,68,56,0.05)] px-8 py-12 sm:px-16 sm:py-16 text-center">
          <Quote
            size={36}
            strokeWidth={1.5}
            className="mx-auto text-[var(--color-olive)]/30"
            aria-hidden="true"
          />

          <div className="mt-5 flex justify-center gap-0.5 text-[var(--color-lime-mid)]">
            {Array.from({ length: featuredReview.rating }).map((_, i) => (
              <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
            ))}
          </div>

          <blockquote className="mt-6 font-[var(--font-display)] text-xl sm:text-2xl leading-snug text-[var(--color-ink)] italic">
            "{featuredReview.quote}"
          </blockquote>
          <p className="mt-4 text-sm font-medium text-[var(--color-warm-gray)]">
            — {featuredReview.author}
          </p>

          <div className="mt-10 pt-8 border-t border-[var(--color-sage)] flex flex-col sm:flex-row justify-center items-center gap-x-10 gap-y-3 text-sm text-[var(--color-warm-gray)]">
            <span className="flex items-center gap-2">
              <Star size={16} className="text-[var(--color-lime-mid)]" fill="currentColor" strokeWidth={0} />
              {practice.reviewCount} five-star reviews on Google &amp; Yelp
            </span>
            <span className="flex items-center gap-2">
              <CalendarCheck2 size={16} className="text-[var(--color-olive)]" />
              Caring for Salinas since {practice.since}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
