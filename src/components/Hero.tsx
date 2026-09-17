"use client";

import { motion } from "motion/react";
import { DroneFrame } from "./DroneFrame";
import { Logo } from "./Logo";
import img1 from "@/img/img1.png";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 md:pt-16">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-60" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(251,70,0,0.10),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid items-end gap-10 pt-12 pb-8 md:pt-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(1.5rem,4.8vw,4rem)] leading-[0.85] font-extrabold tracking-tighter text-brand"
            >
              FP-5
            </motion.p>

            <h1 id="hero-logo" className="mt-4 md:mt-6">
              <span className="sr-only">Straya FP-5</span>
              <motion.div
                aria-hidden
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <Logo className="h-[clamp(2.4rem,7.2vw,6.2rem)] w-auto text-paper" />
              </motion.div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28 }}
              className="mt-6 max-w-lg font-display text-sm tracking-[0.08em] uppercase text-mute md:mt-8 md:text-lg"
            >
              Autonomous counter-UAS interceptor
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.42 }}
              className="mt-8 md:mt-10"
            >
              <a
                href="#specifications"
                className="aim group relative inline-block border border-line px-6 py-3.5 transition-colors hover:border-line-bright"
              >
                <span className="label transition-colors group-hover:text-brand">
                  View specifications
                </span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <DroneFrame src={img1} priority />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
