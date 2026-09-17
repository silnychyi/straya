"use client";

import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  type Transition,
} from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const EASE_OUT: Transition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1],
};

/** Fades + lifts content into view once, with an optional stagger delay. */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ ...EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}

/** A 1px rule that draws itself horizontally when scrolled into view. */
export function DrawLine({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`h-px w-full origin-left bg-line-bright ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}

/** Counts up to `value` when visible. Keeps digit width stable while ticking. */
export function Counter({
  value,
  decimals = 0,
  duration = 1.4,
}: {
  value: number;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value, duration, reduced]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toFixed(decimals)}
    </span>
  );
}

/** Four corner ticks framing a panel. */
export function Corners({
  className = "border-brand",
  size = 10,
}: {
  className?: string;
  size?: number;
}) {
  const s = { width: size, height: size };
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <span
        style={s}
        className={`absolute -top-px -left-px border-t border-l ${className}`}
      />
      <span
        style={s}
        className={`absolute -top-px -right-px border-t border-r ${className}`}
      />
      <span
        style={s}
        className={`absolute -bottom-px -left-px border-b border-l ${className}`}
      />
      <span
        style={s}
        className={`absolute -right-px -bottom-px border-r border-b ${className}`}
      />
    </div>
  );
}

/** Section heading with optional right-side meta. */
export function SectionHeader({
  title,
  meta,
}: {
  title: string;
  meta?: string;
}) {
  return (
    <div className="mb-10 md:mb-14">
      <DrawLine className="mb-6" />
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
        <h2 className="font-display text-xl leading-snug font-medium tracking-tight uppercase md:text-3xl md:leading-snug">
          {title}
        </h2>
        {meta ? (
          <span className="label max-w-md text-right leading-relaxed">
            {meta}
          </span>
        ) : null}
      </div>
    </div>
  );
}
