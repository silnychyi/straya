"use client";

import { useReducedMotion } from "motion/react";
import Image, { type StaticImageData } from "next/image";
import { Corners } from "./primitives";

/**
 * Framed viewport for drone imagery with a HUD overlay.
 */
export function DroneFrame({
  src,
  alt = "Straya FP-5 interceptor",
  className = "",
  priority = false,
}: {
  src?: string | StaticImageData;
  alt?: string;
  className?: string;
  priority?: boolean;
}) {
  const reduced = useReducedMotion();

  return (
    <div className={`relative overflow-hidden border border-line bg-panel ${className}`}>
      <Corners />

      <div className="relative aspect-4/3">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain p-3 md:p-4"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative size-28 md:size-36">
              <div className="absolute inset-0 border border-line-bright/70" />
              {reduced ? null : (
                <div className="absolute inset-0 animate-sweep">
                  <div className="absolute top-1/2 left-1/2 h-px w-1/2 origin-left bg-gradient-to-r from-brand to-transparent" />
                </div>
              )}
              <div className="absolute top-1/2 left-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 bg-brand" />
            </div>
          </div>
        )}

        <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(251,70,0,0.10),transparent_62%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-0 h-px w-full bg-line-bright/50"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 h-full w-px bg-line-bright/50"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-[14%] border border-brand/40"
        >
          <Corners className="border-brand" size={14} />
        </div>
      </div>
    </div>
  );
}
