import "./globals.scss";
import type { Metadata } from "next";
import { Inter, Outfit, Alegreya } from "next/font/google";
import { siteConfig } from "@/config";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' });
const alegreya = Alegreya({ subsets: ["latin"], variable: '--font-alegreya' });
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Website",
  name: siteConfig.name,
  url: siteConfig.url,
  sameAs: [
    "https://github.com/TobiasTymkiw",
    "https://www.linkedin.com/in/tobias-tymkiw",
  ],
  description: siteConfig.description,
};

export const metadata: Metadata = {
  title: {
    default: "Tobias Tymkiw",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  keywords: [
    "portfolio",
    "tobias",
    "tymkiw",
    "tobias tymkiw",
    "curriculum",
    "cv",
  ],
  openGraph: {
    type: "website",
    locale: "en",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} ${alegreya.variable}`}>
        <Analytics />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.min.css"
          rel="stylesheet"
        />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
