"use client";

import { Logo } from "./Logo";
import { useI18n } from "./I18nProvider";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="py-12 md:py-16">
          <Logo className="h-5 w-auto text-paper" />
          <p className="label mt-5 leading-relaxed">{t.footer.tagline}</p>
        </div>

        <div className="flex flex-col gap-4 border-t border-line py-6 md:flex-row md:items-center md:justify-between">
          <p className="label text-[0.55rem] leading-relaxed">
            {t.footer.designed}
            <span className="mx-2 text-brand">•</span>
            {t.footer.deployed}
          </p>
          <p className="label text-[0.55rem] text-mute-2">
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
