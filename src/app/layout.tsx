import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lovetamin — Nurture Real Relationships",
  description:
    "Beyond swiping. Lovetamin is the relationship nurturing platform for couples, friends, and family. Build deeper connections that last.",
  keywords: [
    "relationship app",
    "dating app",
    "nurture relationships",
    "couples app",
    "relationship goals",
    "social dating",
  ],
  openGraph: {
    title: "Lovetamin — Nurture Real Relationships",
    description:
      "Beyond swiping. Build deeper connections that last with Lovetamin.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
