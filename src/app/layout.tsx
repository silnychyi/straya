import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Martian_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const martian = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-martian",
  display: "swap",
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "STRAYA FP-5 — Autonomous Counter-UAS Interceptor",
  description:
    "STRAYA FP-5 is an autonomous counter-UAS interceptor. 310 km/h top speed, 30 km range, EW-resistant, airborne in under 30 seconds. Designed in the Netherlands, combat deployed in Ukraine.",
  openGraph: {
    title: "STRAYA FP-5 — Autonomous Counter-UAS Interceptor",
    description:
      "310 km/h · 30 km range · 5 km ceiling · EW-resistant. Designed in the Netherlands, combat deployed in Ukraine.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jetbrains.variable} ${martian.variable}`}>
      <body>{children}</body>
    </html>
  );
}
