import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const geistSans = GeistSans;
const geistMono = GeistMono;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ozias.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ozias — CS Research & Systems Portfolio",
    template: "%s | Ozias",
  },
  description:
    "Ozias is a computer science researcher and systems engineer. Explore projects in distributed systems, low-level programming, and applied research.",
  keywords: [
    "Ozias",
    "CS Research",
    "Systems Engineering",
    "Computer Science",
    "Distributed Systems",
    "Portfolio",
    "Software Engineer",
    "Research",
  ],
  authors: [{ name: "Ozias", url: siteUrl }],
  creator: "Ozias",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Ozias — CS Research & Systems Portfolio",
    description:
      "Computer science researcher and systems engineer. Projects in distributed systems, low-level programming, and applied research.",
    siteName: "Ozias Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ozias — CS Research & Systems Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ozias — CS Research & Systems Portfolio",
    description:
      "Computer science researcher and systems engineer. Projects in distributed systems, low-level programming, and applied research.",
    images: ["/og-image.png"],
    creator: "@ozias",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#060608",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
