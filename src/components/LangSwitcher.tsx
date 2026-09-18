"use client";

import Link from "next/link";
import { LOCALES, localePath } from "@/lib/i18n";
import { useI18n } from "./I18nProvider";

export function LangSwitcher() {
  const { locale, t } = useI18n();

  return (
    <div className="flex items-center gap-1.5" role="navigation" aria-label="Language">
      {LOCALES.map((code, i) => {
        const active = locale === code;
        return (
          <span key={code} className="flex items-center gap-1.5">
            {i > 0 ? (
              <span aria-hidden className="text-[0.65rem] text-mute-2">
                /
              </span>
            ) : null}
            <Link
              href={localePath(code)}
              hrefLang={code === "ua" ? "uk" : "en"}
              aria-current={active ? "page" : undefined}
              className={`label text-xs tracking-[0.18em] transition-colors ${
                active ? "text-paper" : "hover:text-paper"
              }`}
            >
              {t.lang[code]}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
