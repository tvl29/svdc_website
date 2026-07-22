import {
  Star,
  MapPin,
  Sparkles,
  Truck,
  HeartHandshake,
  Check,
  CalendarCheck,
  ArrowLeft,
} from "lucide-react";
import {
  practice,
  locations,
  whatThisMeans,
  movingToJohnStreet,
  sameAcrossBoth,
} from "../data/content";
import { locationAssets, heroCoverAsset } from "../data/assets";
import FieldMotif from "../components/FieldMotif";
import OfficeGallery from "../components/OfficeGallery";

export default function NewOfficeLanding() {
  return (
    <main>
      {/* ---- Hero — cover image behind copy ---- */}
      {/* HERO COVER IMAGE: drop your image at public/assets/new-office-hero-cover.jpg
          (see heroCoverAsset in src/data/assets.ts). object-cover crops to fill;
          the gradient overlay below keeps the white text readable regardless
          of what image goes in. */}
      <section className="relative overflow-hidden bg-[var(--color-sage)] pt-16 pb-14 sm:pt-20 sm:pb-16">
        <img
          src={heroCoverAsset}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(47,74,14,0.55) 0%, rgba(47,74,14,0.4) 45%, rgba(30,26,20,0.75) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-[13px] font-medium tracking-wide text-white">
            {locations.johnStreet.status}
          </span>
          <h1 className="mt-6 font-[var(--font-display)] text-4xl sm:text-5xl leading-[1.08] text-white">
            Your dental home just got bigger.
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-[15px] sm:text-base leading-relaxed text-white/85">
            A welcoming space begins with thoughtful design. Our new John
            Street office was created to make every visit more comfortable,
            with more appointment availability and the same exceptional care
            from the team you know and trust.
          </p>
          <p className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-white">
            <MapPin size={16} />
            {locations.johnStreet.address}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={practice.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--color-olive)] text-white px-6 py-3.5 text-[15px] font-semibold hover:bg-[var(--color-lime)] transition-colors"
            >
              Book an appointment
            </a>
            <a
              href={practice.phoneHref}
              className="rounded-full border border-white/40 text-white px-6 py-3.5 text-[15px] font-semibold hover:bg-white/10 transition-colors"
            >
              Call {practice.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* ---- Gallery — interior renders (Design Ergonomics Inc., 12/23/25) ---- */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-[13px] font-semibold tracking-[0.15em] uppercase text-[var(--color-olive)] mb-6">
            A first look inside
          </p>
          <OfficeGallery
            images={[
              {
                src: locationAssets.johnStreetWaitingRoom,
                alt: "John Street waiting area and reception, rendering",
                caption: "Waiting area & reception",
                definition:
                  "An open, light-filled waiting area with comfortable seating and a clear view to the front desk — designed so nothing feels clinical or rushed.",
              },
              {
                src: locationAssets.johnStreetReceptionDesk,
                alt: "John Street reception desk with field view, rendering",
                caption: "Reception desk",
                definition:
                  "The front desk sits beneath natural light, with a window view out to the surrounding Salinas Valley farmland.",
              },
              {
                src: locationAssets.johnStreetHallway,
                alt: "John Street treatment-room hallway, rendering",
                caption: "Treatment-room hallway",
                definition:
                  "More treatment rooms means more appointment availability — each room designed with the same comfort-first approach patients already know.",
              },
              {
                src: locationAssets.johnStreetSinkNook,
                alt: "John Street hallway sink nook, rendering",
                caption: "Hallway sink nook",
                definition:
                  "Thoughtful details throughout, down to the hallway sink and mirror nook — small touches that make the space feel considered, not clinical.",
              },
            ]}
          />
          <p className="mt-4 text-[13px] text-[var(--color-warm-gray)]">
            Architectural renderings — final finishes may vary slightly from
            what's shown here. Tap a thumbnail to bring it into view.
          </p>
        </div>
      </section>

      {/* ---- A New Space / What's Moving / The Same Care ---- */}
      <section className="bg-[var(--color-sage)] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                label: "A New Space",
                icon: Sparkles,
                items: whatThisMeans.map((i) => i.title),
              },
              {
                label: "What's Moving",
                icon: Truck,
                items: movingToJohnStreet,
              },
              {
                label: "The Same Care",
                icon: HeartHandshake,
                items: sameAcrossBoth,
              },
            ].map((col) => {
              const Icon = col.icon;
              return (
                <div
                  key={col.label}
                  className="rounded-3xl bg-white p-8 sm:p-9 border border-transparent hover:border-[var(--color-olive)]/15 shadow-[0_1px_2px_rgba(74,68,56,0.05)] hover:shadow-[0_20px_40px_-18px_rgba(74,68,56,0.16)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[var(--color-sage)] text-[var(--color-olive)]">
                    <Icon size={19} strokeWidth={1.75} />
                  </div>
                  <p className="mt-5 text-[13px] font-semibold tracking-[0.15em] uppercase text-[var(--color-olive)]">
                    {col.label}
                  </p>
                  <ul className="mt-4 space-y-3 text-[15px] text-[var(--color-ink)]">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check
                          size={16}
                          strokeWidth={2.5}
                          className="mt-0.5 shrink-0 text-[var(--color-lime)]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-16 flex justify-center">
            <FieldMotif className="w-48 h-10" tone="olive" />
          </div>
        </div>
      </section>

      {/* ---- Closing CTA — grounding dark band, same treatment as the
           homepage CTABand, so both pages land on the same premium note ---- */}
      <section className="relative overflow-hidden bg-[var(--color-olive-deep)] py-24 sm:py-28 text-center">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 90% at 50% 15%, rgba(143,191,42,0.16) 0%, rgba(47,74,14,0) 70%)",
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

        <div className="relative mx-auto max-w-2xl px-5 sm:px-8">
          <div className="flex justify-center gap-0.5 text-[var(--color-lime-mid)]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={17} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <h2 className="mt-6 font-[var(--font-display)] text-3xl sm:text-4xl text-white">
            We look forward to welcoming you.
          </h2>
          <p className="mt-3 text-white/75 text-[15px] sm:text-base">
            Schedule your next visit today.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={practice.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[var(--color-olive-deep)] px-7 py-3.5 text-[15px] font-semibold shadow-[0_8px_24px_-8px_rgba(0,0,0,0.4)] hover:bg-[var(--color-sage)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <CalendarCheck size={17} strokeWidth={2} />
              Book an appointment
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 text-white px-7 py-3.5 text-[15px] font-semibold hover:bg-white/10 hover:border-white/60 hover:-translate-y-0.5 transition-all duration-300"
            >
              <ArrowLeft size={16} strokeWidth={2} />
              Back to homepage
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
