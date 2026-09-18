"use client";

import { Reveal } from "./primitives";
import { useI18n } from "./I18nProvider";

export function Statement() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden border-y border-line bg-panel">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_15%_50%,rgba(251,70,0,0.12),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <Reveal>
          <div className="grid items-center md:grid-cols-[1fr_1px_1fr]">
            <p className="text-center font-display text-xl leading-snug font-medium tracking-tight uppercase md:pr-12 md:text-right md:text-3xl md:leading-snug">
              {t.statement.netherlands}
            </p>
            <span aria-hidden className="my-8 block h-px w-full bg-line md:my-0 md:h-full md:w-px" />
            <p className="text-center font-display text-xl leading-snug font-medium tracking-tight uppercase md:pl-12 md:text-left md:text-3xl md:leading-snug">
              {t.statement.ukraine}
            </p>
          </div>
          <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-mute md:mt-14">
            {t.statement.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
