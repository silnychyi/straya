"use client";

import { PLATFORM } from "@/lib/content";
import { DroneFrame } from "./DroneFrame";
import { Corners, Reveal, SectionHeader } from "./primitives";
import img2 from "@/img/img2.png";

export function Platform() {
  return (
    <section id="platform" className="relative">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <SectionHeader title="Platform" />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 border-t border-l border-line sm:grid-cols-2">
              {PLATFORM.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.05}>
                  <div className="group relative h-full border-r border-b border-line bg-ink/40 p-5 transition-colors duration-300 hover:bg-panel-2 md:p-6">
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Corners size={8} />
                    </div>
                    <p className="label">{item.title}</p>
                    <p className="mt-4 font-display text-sm leading-snug tracking-tight md:text-base">
                      {item.value}
                    </p>
                    {"note" in item && item.note ? (
                      <p className="mt-2.5 text-[0.7rem] leading-relaxed text-mute">
                        {item.note}
                      </p>
                    ) : null}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <DroneFrame src={img2} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
