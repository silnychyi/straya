"use client";

import { Corners, Counter, Reveal, SectionHeader } from "./primitives";
import { useI18n } from "./I18nProvider";

export function Specs() {
  const { t } = useI18n();
  return (
    <section
      id="specifications"
      className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28"
    >
      <SectionHeader title={t.specs.title} />

      <div className="grid grid-cols-1 border-t border-l border-line sm:grid-cols-2 lg:grid-cols-5">
        {t.specs.items.map((spec, i) => (
          <Reveal key={spec.label} delay={i * 0.06} className="h-full">
            <article className="group relative flex h-full flex-col justify-between gap-10 border-r border-b border-line bg-ink/40 px-5 py-7 transition-colors duration-300 hover:bg-panel md:px-6 md:py-9">
              <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Corners size={10} />
              </div>

              <p className="font-display text-sm tracking-[0.12em] uppercase text-mute md:text-base">
                {spec.label}
              </p>

              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-4xl leading-none font-bold tracking-tighter md:text-5xl">
                  <Counter value={spec.value} />
                </span>
                <span className="font-display text-xs text-brand md:text-sm">
                  {spec.unit}
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
