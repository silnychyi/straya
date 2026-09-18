"use client";

import Image from "next/image";
import { Logo } from "./Logo";
import { ParallaxY } from "./Parallax";
import { FadeUp } from "./primitives";
import { useI18n } from "./I18nProvider";
import img1 from "@/img/img1.png";

function SpecsLink({ className = "" }: { className?: string }) {
  const { t } = useI18n();
  return (
    <a
      href="#specifications"
      className={`aim group relative border border-line px-6 py-3.5 text-center transition-colors hover:border-line-bright ${className}`}
    >
      <span className="label text-xs tracking-[0.18em] transition-colors group-hover:text-brand">
        {t.hero.viewSpecs}
      </span>
    </a>
  );
}

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative overflow-hidden pt-14 md:pt-16">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-60" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(251,70,0,0.10),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid items-center gap-5 pt-6 pb-6 md:gap-8 md:pt-16 md:pb-16 lg:grid-cols-12 lg:gap-0">
          <div className="relative z-10 order-1 lg:col-span-5">
            <FadeUp
              as="p"
              y={10}
              duration={0.7}
              className="font-display text-[clamp(1.5rem,4.8vw,4rem)] leading-[0.85] font-extrabold tracking-tighter text-brand"
            >
              FP-5
            </FadeUp>

            <h1 id="hero-logo" className="mt-4 md:mt-6">
              <span className="sr-only">Straya FP-5</span>
              <FadeUp aria-hidden y={18} delay={0.12} duration={0.9}>
                <Logo className="h-[clamp(2.4rem,7.2vw,6.2rem)] w-auto text-paper" />
              </FadeUp>
            </h1>

            <FadeUp
              as="p"
              y={14}
              delay={0.28}
              duration={0.8}
              className="mt-6 max-w-lg font-display text-sm tracking-[0.08em] uppercase text-mute md:mt-8 md:text-lg"
            >
              {t.hero.subtitle}
            </FadeUp>

            <FadeUp
              y={14}
              delay={0.42}
              duration={0.8}
              className="mt-8 hidden md:mt-10 lg:block"
            >
              <SpecsLink className="inline-block" />
            </FadeUp>
          </div>

          <FadeUp
            y={12}
            delay={0.2}
            duration={1.1}
            className="relative order-2 pb-8 lg:col-span-7 lg:pb-0"
          >
            <div className="relative mx-auto w-[90%] lg:ml-auto lg:w-full lg:max-w-[600px]">
              <ParallaxY>
                <Image
                  src={img1}
                  alt={t.hero.imageAlt}
                  priority
                  sizes="(max-width: 1024px) 90vw, 600px"
                  className="h-auto w-full drop-shadow-[0_16px_24px_rgba(0,0,0,0.5)]"
                />
              </ParallaxY>
              <div className="absolute inset-x-0 bottom-0 z-10 translate-y-1/2 lg:hidden">
                <SpecsLink className="block w-full bg-ink/80 backdrop-blur-sm" />
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
