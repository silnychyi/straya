import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { JetBrains_Mono, Martian_Mono } from "next/font/google";
import { I18nProvider } from "@/components/I18nProvider";
import {
  DEFAULT_LOCALE,
  HTML_LANG,
  isLocale,
  localePath,
  LOCALES,
} from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import "../globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-jetbrains",
  display: "swap",
});

const martian = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-martian",
  display: "swap",
  weight: ["400", "500", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#050505",
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const t = getDictionary(raw);
  const canonical = localePath(raw);

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical,
      languages: {
        en: localePath("en"),
        uk: localePath("ua"),
        "x-default": localePath(DEFAULT_LOCALE),
      },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.ogDescription,
      locale: HTML_LANG[raw],
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={HTML_LANG[locale]}
      className={`${jetbrains.variable} ${martian.variable}`}
    >
      <body>
        <I18nProvider locale={locale} t={getDictionary(locale)}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
