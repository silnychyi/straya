"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/content";
import { Logo } from "./Logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [logoLive, setLogoLive] = useState(false);
  const [open, setOpen] = useState(false);
  const logoVisible = open || logoLive;

  const { scrollY } = useScroll();
  const fadeStart = useMotionValue(0);
  const fadeEnd = useMotionValue(160);
  const scrollOpacity = useTransform(
    [scrollY, fadeStart, fadeEnd],
    ([y, start, end]: number[]) => {
      if (y <= start) return 0;
      if (y >= end) return 1;
      return (y - start) / (end - start);
    },
  );

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));
  useMotionValueEvent(scrollOpacity, "change", (v) => setLogoLive(v > 0.08));

  useEffect(() => {
    const measure = () => {
      const mark = document.getElementById("hero-logo");
      if (!mark) return;
      const navH = 72;
      const top = mark.getBoundingClientRect().top + window.scrollY;
      const height = mark.offsetHeight;
      fadeStart.set(Math.max(0, top - navH - height * 0.35));
      fadeEnd.set(Math.max(80, top - navH + height));
    };

    measure();
    setScrolled(scrollY.get() > 24);
    setLogoLive(scrollOpacity.get() > 0.08);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [fadeStart, fadeEnd, scrollY, scrollOpacity]);

  useEffect(() => {
    if (!open) return;

    const { body, documentElement } = document;
    const scrollY = window.scrollY;
    const prevHtmlOverflow = documentElement.style.overflow;
    const prevBody = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    };

    documentElement.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    return () => {
      documentElement.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBody.overflow;
      body.style.position = prevBody.position;
      body.style.top = prevBody.top;
      body.style.left = prevBody.left;
      body.style.right = prevBody.right;
      body.style.width = prevBody.width;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`relative z-10 border-b transition-colors duration-500 ${
          open
            ? "border-line bg-ink"
            : scrolled
              ? "border-line bg-ink/85 backdrop-blur-md"
              : "border-transparent"
        }`}
      >
        <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-5 md:h-16 md:px-10">
          <motion.a
            href="#top"
            aria-label="Straya home"
            aria-hidden={!logoVisible}
            tabIndex={logoVisible ? 0 : -1}
            style={{ opacity: open ? 1 : scrollOpacity }}
            onClick={() => setOpen(false)}
            className={`text-paper ${logoVisible ? "" : "pointer-events-none"}`}
          >
            <Logo className="h-4 w-auto md:h-5" />
          </motion.a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="label relative py-2 transition-colors hover:text-paper"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand transition-all duration-300 hover:w-full" />
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2.5 lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute inset-x-0 top-1/2 h-px origin-center bg-paper transition-transform duration-300 ${
                  open ? "-translate-y-1/2 rotate-45" : "-translate-y-[6px]"
                }`}
              />
              <span
                className={`absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-paper transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 top-1/2 h-px origin-center bg-paper transition-transform duration-300 ${
                  open ? "-translate-y-1/2 -rotate-45" : "translate-y-[5px]"
                }`}
              />
            </span>
            <span className="label text-paper">Menu</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-0 flex flex-col overflow-hidden overscroll-none bg-ink lg:hidden"
          >
            <div aria-hidden className="absolute inset-0 grid-bg opacity-50" />
            <div className="relative flex h-dvh flex-col justify-center px-5 pt-14">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.06 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="border-b border-line py-5 font-display text-lg tracking-[0.14em] uppercase"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
