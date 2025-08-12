import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config";

const inter = Inter({ subsets: ["latin"] });
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
      <body className={inter.className}>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
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
