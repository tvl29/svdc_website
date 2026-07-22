import { HeartHandshake, Sparkles, ShieldCheck, Siren } from "lucide-react";
import { services } from "../data/content";

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

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <div
                key={service.title}
                className="group relative rounded-3xl bg-white p-8 sm:p-9 border border-transparent hover:border-[var(--color-olive)]/15 shadow-[0_1px_2px_rgba(74,68,56,0.05)] hover:shadow-[0_20px_40px_-18px_rgba(74,68,56,0.2)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-sage)] text-[var(--color-olive)] group-hover:bg-[var(--color-olive)] group-hover:text-white transition-colors duration-300">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 font-[var(--font-display)] text-xl">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-[var(--color-warm-gray)]">
                  {service.description}
                </p>
                <div className="mt-6 h-px w-10 bg-[var(--color-olive)]/25 group-hover:w-16 transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
