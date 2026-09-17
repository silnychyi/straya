"use client";

import { motion } from "motion/react";
import { SYSTEMS } from "@/lib/content";
import { Corners, Reveal, SectionHeader } from "./primitives";

export function Systems() {
  return (
    <section
      id="systems"
      className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28"
    >
      <SectionHeader title="In-house systems" />

      <div className="grid gap-px bg-line md:grid-cols-2">
        {SYSTEMS.map((system, i) => (
          <Reveal key={system.codename} delay={i * 0.1} className="h-full">
            <article className="group relative h-full bg-ink p-6 transition-colors duration-500 hover:bg-panel md:p-10">
              <Corners
                className="border-line-bright transition-colors duration-500 group-hover:border-brand"
                size={12}
              />

              <div className="flex items-center gap-3">
                <span className="size-1.5 bg-brand" />
                <span className="label text-brand">{system.role}</span>
              </div>

              <h3 className="mt-6 font-display text-lg leading-snug font-bold tracking-tight uppercase md:text-2xl">
                {system.codename}
              </h3>

              <motion.div
                className="mt-6 h-px origin-left bg-line-bright"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.1 }}
              />

              <p className="mt-6 text-sm leading-relaxed text-mute">
                {system.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
