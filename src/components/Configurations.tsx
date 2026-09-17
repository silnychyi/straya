"use client";

import { CONFIGURATIONS } from "@/lib/content";
import { Corners, Counter, Reveal, SectionHeader } from "./primitives";

export function Configurations() {
  return (
    <section
      id="configurations"
      className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28"
    >
      <SectionHeader
        title="Configurations"
        meta="Unit cost by optics package — one airframe, three sensor loadouts"
      />

      <div className="grid gap-px bg-line lg:grid-cols-3">
        {CONFIGURATIONS.map((config, i) => (
          <Reveal key={config.optic} delay={i * 0.08} className="h-full">
            <article className="group relative flex h-full flex-col justify-between bg-ink p-6 transition-colors duration-500 hover:bg-panel md:p-8">
              <Corners
                className="border-line-bright transition-colors duration-500 group-hover:border-brand"
                size={12}
              />

              <div>
                <h3 className="font-display text-lg leading-tight font-bold tracking-tight uppercase md:text-xl">
                  {config.optic}
                </h3>
                <p className="mt-3 text-xs text-mute">{config.detail}</p>

                <div className="mt-8 h-px w-full bg-line" />

                <div className="mt-8 flex items-start gap-1">
                  <span className="mt-1.5 font-display text-sm text-brand">
                    $
                  </span>
                  <span className="font-display text-4xl leading-none font-bold tracking-tighter md:text-5xl">
                    <Counter value={config.price} />
                  </span>
                </div>
                <p className="label mt-3">Per unit</p>
              </div>

              <p className="mt-10 text-[0.7rem] text-mute">{config.range}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
