"use client";

import { ADVANTAGES } from "@/lib/content";
import { Reveal, SectionHeader } from "./primitives";

export function Advantages() {
  return (
    <section id="advantages" className="relative">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <SectionHeader title="Advantages" />

        <div className="grid grid-cols-1 border-t border-l border-line md:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.07} className="h-full">
              <div className="group relative flex h-full flex-col border-r border-b border-line bg-ink/40 p-6 transition-colors duration-300 hover:bg-panel md:p-8">
                <h3 className="font-display text-sm leading-relaxed font-medium tracking-tight md:text-base">
                  {item.title}
                </h3>
                <p className="mt-3.5 text-xs leading-relaxed text-mute md:text-[0.8rem]">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
