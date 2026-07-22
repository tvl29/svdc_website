import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { practice } from "../data/content";
import { heroAssets } from "../data/assets";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-[var(--color-ink)]">
      {/* HERO VIDEO: replace src below with final video file(s). Poster shows
          before load, on failure, and whenever prefers-reduced-motion is set. */}
      {!reducedMotion ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroAssets.poster}
          aria-hidden="true"
        >
          <source src={heroAssets.videoWebm} type="video/webm" />
          <source src={heroAssets.video} type="video/mp4" />
        </video>
      ) : (
        <img
          src={heroAssets.poster}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Dark gradient overlay so light hero text stays readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(47,74,14,0.55) 0%, rgba(47,74,14,0.35) 35%, rgba(30,26,20,0.85) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 pb-16 pt-32 sm:pb-20 sm:pt-40">
          <div className="max-w-2xl">
            <span className="shimmer-pill inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[13px] font-medium tracking-wide text-white backdrop-blur-sm animate-[fadeIn_0.8s_ease-out]">
              Opening November 2026 · John Street
            </span>

            <h1 className="mt-6 font-[var(--font-display)] text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-white animate-[fadeIn_0.8s_ease-out_0.15s_both]">
              A new home for Salinas Valley smiles.
            </h1>

            <p className="mt-5 max-w-xl text-[15px] sm:text-base leading-relaxed text-white/85 animate-[fadeIn_0.8s_ease-out_0.3s_both]">
              This November, our family &amp; general dentistry moves to a
              larger office on John Street — more space, more appointment
              times, and the same team you trust. Specialty and advanced care
              continues, enhanced, at our Main Street practice.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-[fadeIn_0.8s_ease-out_0.45s_both]">
              <a
                href="/new-office"
                className="rounded-full bg-[var(--color-olive)] text-white px-6 py-3.5 text-[15px] font-semibold text-center hover:bg-[var(--color-lime)] transition-colors"
              >
                Explore the new office →
              </a>
              <a
                href={practice.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/40 text-white px-6 py-3.5 text-[15px] font-semibold text-center hover:bg-white/10 transition-colors"
              >
                Book an appointment
              </a>
            </div>

            <div className="mt-7 flex items-center gap-2 text-white/80 text-sm animate-[fadeIn_0.8s_ease-out_0.6s_both]">
              <span className="flex items-center gap-0.5 text-[var(--color-lime-mid)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
              <span>
                Trusted by families across Monterey County · {practice.reviewCount}{" "}
                five-star reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
