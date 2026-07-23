import { MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { locations, practice } from "../data/content";
import { locationAssets } from "../data/assets";
import FieldMotif from "./FieldMotif";
import Reveal from "./Reveal";

export default function TwoLocations() {
  return (
    <section id="locations" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-[13px] font-semibold tracking-[0.15em] uppercase text-[var(--color-olive)]">
            Two locations, one practice
          </p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl sm:text-4xl">
            More room to care for you.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-warm-gray)]">
            Nothing you love goes away — we're simply giving it more room to
            grow. Same doctors, same records, same warm care, now across two
            thoughtfully designed offices.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* ---- John Street ---- */}
          <Reveal direction="left">
          <div
            className="group relative rounded-3xl border border-[var(--color-sage)] overflow-hidden shadow-[0_1px_2px_rgba(74,68,56,0.06)] hover:shadow-[0_28px_56px_-24px_rgba(74,68,56,0.28)] hover:-translate-y-1.5 transition-all duration-300"
            style={{
              background:
                "linear-gradient(160deg, #FFFFFF 0%, #FFFFFF 65%, var(--color-sage) 180%)",
            }}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={locationAssets.johnStreetReceptionDesk}
                alt="John Street reception, rendering"
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(47,74,14,0.05) 0%, rgba(47,74,14,0.35) 100%)",
                }}
                aria-hidden="true"
              />
              <span className="absolute top-5 left-5 inline-flex items-center rounded-full bg-white/95 backdrop-blur-sm text-[var(--color-olive)] text-[12px] font-semibold tracking-wide px-3.5 py-1.5 shadow-sm">
                New
              </span>
              <p className="absolute bottom-5 left-6 text-white text-[13px] font-medium tracking-wide">
                Architectural rendering
              </p>
            </div>

            {/* Thin brand accent bar — sits at the seam between photo and
                content, reveals on hover. Same language as the Trust card
                and Services cards. */}
            <div
              className="h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-olive), var(--color-lime-mid))",
              }}
              aria-hidden="true"
            />

            <div className="relative p-8 sm:p-9">
              <h3 className="font-[var(--font-display)] text-2xl">
                {locations.johnStreet.label}
              </h3>
              <p className="mt-1 text-[15px] font-medium text-[var(--color-olive)]">
                {locations.johnStreet.role}
              </p>

              <div className="mt-5 flex items-center gap-2.5">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-sage)] text-[var(--color-olive)] shrink-0">
                  <MapPin size={14} />
                </div>
                <p className="text-[14px] text-[var(--color-warm-gray)]">
                  {locations.johnStreet.address}
                </p>
              </div>

              <div className="mt-4 pl-[42px]">
                <span className="inline-flex items-center rounded-full border border-[var(--color-olive)]/30 text-[var(--color-olive)] text-[12.5px] font-semibold tracking-wide px-3 py-1">
                  {locations.johnStreet.status}
                </span>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/new-office"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-olive)] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[var(--color-olive-deep)] transition-colors"
                >
                  See the new office
                  <ArrowUpRight size={15} />
                </Link>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    locations.johnStreet.mapQuery
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[var(--color-warm-gray)]/30 px-5 py-2.5 text-sm font-semibold text-[var(--color-ink)] hover:border-[var(--color-olive)] transition-colors"
                >
                  Get directions
                </a>
              </div>
            </div>

            <FieldMotif
              className="absolute -bottom-2 -right-2 w-24 h-12 opacity-[0.07] pointer-events-none"
              tone="olive"
            />
          </div>
          </Reveal>

          {/* ---- Main Street ---- */}
          <Reveal direction="right">
          <div
            className="group relative rounded-3xl border border-[var(--color-sage)] overflow-hidden shadow-[0_1px_2px_rgba(74,68,56,0.06)] hover:shadow-[0_28px_56px_-24px_rgba(74,68,56,0.28)] hover:-translate-y-1.5 transition-all duration-300"
            style={{
              background:
                "linear-gradient(160deg, #FFFFFF 0%, #FFFFFF 65%, var(--color-sage) 180%)",
            }}
          >
            {/* No confirmed exterior photo yet — an intentional, elegant
                placeholder (not a real photo) rather than an empty box.
                Swap for a real image the same way John Street's card works
                once photography is confirmed. */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-sage)] flex items-center justify-center">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(60% 80% at 50% 45%, rgba(91,140,0,0.10) 0%, rgba(91,140,0,0) 70%)",
                }}
                aria-hidden="true"
              />
              <FieldMotif className="relative w-40 h-16 opacity-80" tone="olive" />
              <p className="absolute bottom-5 left-6 text-[13px] font-medium tracking-wide text-[var(--color-warm-gray)]">
                Photography coming soon
              </p>
            </div>

            <div
              className="h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-olive), var(--color-lime-mid))",
              }}
              aria-hidden="true"
            />

            <div className="relative p-8 sm:p-9">
              <h3 className="font-[var(--font-display)] text-2xl">
                {locations.mainStreet.label}
              </h3>
              <p className="mt-1 text-[15px] font-medium text-[var(--color-olive)]">
                {locations.mainStreet.role}
              </p>

              <div className="mt-5 flex items-center gap-2.5">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-sage)] text-[var(--color-olive)] shrink-0">
                  <MapPin size={14} />
                </div>
                <p className="text-[14px] text-[var(--color-warm-gray)]">
                  {locations.mainStreet.address}
                </p>
              </div>

              <div className="mt-4 pl-[42px]">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-olive)] text-white text-[12.5px] font-semibold tracking-wide px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-lime-mid)] animate-pulse" />
                  {locations.mainStreet.status}
                </span>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={practice.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-olive)] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[var(--color-olive-deep)] transition-colors"
                >
                  Book at Main Street
                  <ArrowUpRight size={15} />
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    locations.mainStreet.mapQuery
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[var(--color-warm-gray)]/30 px-5 py-2.5 text-sm font-semibold text-[var(--color-ink)] hover:border-[var(--color-olive)] transition-colors"
                >
                  Get directions
                </a>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
