"use client";

import { type CSSProperties, type HTMLAttributes, type ReactNode } from "react";

export const EASE_OUT = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1],
} as const;

function enterStyle(delay: number, y: number, duration: number): CSSProperties {
  return {
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    ["--enter-y" as string]: `${y}px`,
  };
}

/** CSS fade-up — runs in the browser even if JS hydration is late. */
export function FadeUp({
  children,
  className = "",
  delay = 0,
  y = 14,
  duration = 0.8,
  as: Tag = "div",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  as?: "div" | "p";
} & HTMLAttributes<HTMLElement>) {
  return (
    <Tag
      className={`animate-fade-up ${className}`}
      style={enterStyle(delay, y, duration)}
      {...rest}
    >
      {children}
    </Tag>
  );
}

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
    <div
      className={`animate-fade-up ${className ?? ""}`}
      style={enterStyle(delay, y, 0.7)}
    >
      {children}
    </div>
  );
}

/** A 1px rule that draws itself horizontally. */
export function DrawLine({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px w-full origin-left animate-draw-x bg-line-bright ${className}`}
    />
  );
}

/** Counts up to `value` when visible. Keeps digit width stable while ticking. */
export function Counter({
  value,
  decimals = 0,
}: {
  value: number;
  decimals?: number;
}) {
  return <span className="tabular-nums">{value.toFixed(decimals)}</span>;
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
  line = true,
}: {
  title: string;
  meta?: string;
  line?: boolean;
}) {
  return (
    <div className="mb-10 md:mb-14">
      {line ? <DrawLine className="mb-6" /> : null}
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
