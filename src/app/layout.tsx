import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Jiří Šedivec | Pohyb v Plzni & Weby",
  description:
    "Jsem Jirka Šedivec — učím pohyb v Plzni a tvořím weby. Skupinové lekce, individuály a prezentační weby na míru.",
  keywords: [
    "pohyb",
    "Plzeň",
    "movement",
    "lekce pohybu",
    "Jiří Šedivec",
    "weby",
    "tvorba webů",
  ],
  authors: [{ name: "Jiří Šedivec" }],
  creator: "Jiří Šedivec",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://jirisedivec.cz",
    title: "Jiří Šedivec | Pohyb v Plzni & Weby",
    description:
      "Jsem Jirka Šedivec — učím pohyb v Plzni a tvořím weby. Skupinové lekce, individuály a prezentační weby na míru.",
    siteName: "Jiří Šedivec",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jiří Šedivec | Pohyb v Plzni & Weby",
    description:
      "Jsem Jirka Šedivec — učím pohyb v Plzni a tvořím weby. Skupinové lekce, individuály a prezentační weby na míru.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-white text-zinc-900">{children}</body>
    </html>
  );
}
