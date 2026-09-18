"use client";

import { motion } from "motion/react";
import Image from "next/image";
import img2 from "@/img/img2.png";
import { ParallaxY } from "./Parallax";
import { Corners, Reveal, SectionHeader } from "./primitives";
import { useI18n } from "./I18nProvider";

export function Systems() {
  const { t } = useI18n();
  return (
    <section id="systems" className="relative overflow-hidden">
      <div className="relative top-[50px] w-full md:mx-auto md:max-w-[1100px] md:px-10">
        <div className="relative left-1/2 w-[105vw] -translate-x-1/2 md:left-auto md:w-full md:translate-x-0">
          <ParallaxY>
            <Image
              src={img2}
              alt={t.systems.imageAlt}
              sizes="(max-width: 768px) 105vw, 1100px"
              className="h-auto w-full"
            />
          </ParallaxY>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,#050505,transparent_50%)]"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 pb-20 md:px-10 md:pb-28">
        <SectionHeader title={t.systems.title} line={false} />

        <div className="grid gap-px bg-line md:grid-cols-2">
          {t.systems.items.map((system, i) => (
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
      </div>
    </section>
  );
}
