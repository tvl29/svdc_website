import { useState } from "react";

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  definition: string;
};

type OfficeGalleryProps = {
  images: GalleryImage[];
};

export default function OfficeGallery({ images }: OfficeGalleryProps) {
  const [active, setActive] = useState(0);
  const current = images[active];

  return (
    <div className="grid gap-6 md:grid-cols-[2fr_1fr] items-start">
      {/* Left: big image on top, definition text below it */}
      <div>
        <div className="relative rounded-2xl overflow-hidden bg-[var(--color-sage)] border border-white shadow-[0_20px_45px_-20px_rgba(74,68,56,0.35)] h-[300px] sm:h-[420px] lg:h-[500px]">
          <img
            key={current.src}
            src={current.src}
            alt={current.alt}
            className="w-full h-full object-cover animate-[fadeIn_0.35s_ease-out]"
          />
        </div>

        {/* Definition — swaps with the active photo */}
        <div key={current.src + "-def"} className="mt-5 animate-[fadeIn_0.35s_ease-out]">
          <p className="text-[13px] font-semibold tracking-[0.15em] uppercase text-[var(--color-olive)]">
            {current.caption}
          </p>
          <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--color-warm-gray)]">
            {current.definition}
          </p>
        </div>
      </div>

      {/* Right: thumbnails, stacked */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-1 md:pb-0">
        {images.map((img, i) => {
          const isActive = i === active;
          return (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={isActive}
              aria-label={`Show ${img.caption}`}
              className={`relative shrink-0 w-28 h-20 md:w-full md:h-[110px] lg:h-[130px] rounded-xl overflow-hidden transition-all duration-200 ${
                isActive
                  ? "ring-2 ring-[var(--color-olive)] ring-offset-2 ring-offset-[var(--color-off-white)]"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
