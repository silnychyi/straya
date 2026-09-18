"use client";

import { Corners, Counter, Reveal, SectionHeader } from "./primitives";
import { useI18n } from "./I18nProvider";

export function Configurations() {
  const { t } = useI18n();
  return (
    <section
      id="configurations"
      className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28"
    >
      <SectionHeader title={t.configurations.title} />

      <div className="grid gap-px bg-line lg:grid-cols-3">
        {t.configurations.items.map((config, i) => (
          <Reveal key={config.optic} delay={i * 0.08} className="h-full">
            <article className="group relative flex h-full flex-col justify-between bg-ink p-6 transition-colors duration-500 hover:bg-panel md:p-8">
              <Corners
                className="border-line-bright transition-colors duration-500 group-hover:border-brand"
                size={12}
              />

              <div>
                <h3 className="font-display text-[21px] leading-tight font-bold tracking-tight uppercase md:text-[23px]">
                  {config.optic}
                </h3>
                <p className="mt-3 text-[15px] text-mute">{config.detail}</p>

                <div className="mt-8 h-px w-full bg-line" />

                <div className="mt-8 flex items-baseline gap-0.5">
                  <span className="font-display text-[30px] font-bold leading-none tracking-tighter text-brand md:text-[40px]">
                    $
                  </span>
                  <span className="font-display text-[39px] leading-none font-bold tracking-tighter md:text-[51px]">
                    <Counter value={config.price} />
                  </span>
                </div>
                <p className="label mt-3 text-[13px]">{t.configurations.perUnit}</p>
              </div>

              <p className="mt-10 text-[15px] text-mute">{config.range}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
