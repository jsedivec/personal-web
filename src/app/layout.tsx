import type { Metadata } from "next";
import { Figtree, Space_Grotesk } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jirka Šedivec | Pohyblivý ajťák",
  description:
    "Jsem Jirka Šedivec — učím pohyb v Plzni a tvořím weby. Skupinové lekce, individuály a prezentační weby na míru.",
  keywords: [
    "pohyb",
    "Plzeň",
    "movement",
    "lekce pohybu",
    "Jirka Šedivec",
    "weby",
    "tvorba webů",
  ],
  authors: [{ name: "Jirka Šedivec" }],
  creator: "Jirka Šedivec",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://jirisedivec.cz",
    title: "Jirka Šedivec | Pohyblivý ajťák",
    description:
      "Jsem Jirka Šedivec — učím pohyb v Plzni a tvořím weby. Skupinové lekce, individuály a prezentační weby na míru.",
    siteName: "Jirka Šedivec",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jirka Šedivec | Pohyblivý ajťák",
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
    <html lang="cs" className={`${figtree.variable} ${spaceGrotesk.variable} antialiased`}>
      <body className="min-h-screen bg-paper font-sans text-foreground">{children}</body>
    </html>
  );
}
