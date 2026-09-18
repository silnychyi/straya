import { Home } from "@/components/Home";
import { I18nProvider } from "@/components/I18nProvider";
import { DEFAULT_LOCALE, localePath } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import type { Metadata } from "next";

const t = getDictionary(DEFAULT_LOCALE);

export const metadata: Metadata = {
  title: t.meta.title,
  description: t.meta.description,
  alternates: {
    canonical: localePath("en"),
    languages: {
      en: localePath("en"),
      uk: localePath("ua"),
      "x-default": localePath("en"),
    },
  },
  openGraph: {
    title: t.meta.title,
    description: t.meta.ogDescription,
    locale: "en",
    type: "website",
  },
};

export default function RootPage() {
  return (
    <I18nProvider locale={DEFAULT_LOCALE} t={t}>
      <Home />
    </I18nProvider>
  );
}
