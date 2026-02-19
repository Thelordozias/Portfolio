/**
 * app/layout.tsx
 *
 * Root layout — rendered once and wraps EVERY page in the app.
 * Responsibilities:
 *  - Set <html> lang and metadata
 *  - Import global CSS
 *  - Render the persistent <Nav> component
 *  - Provide the {children} slot for page content
 */

import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/ui/Nav";
import Loader from "@/components/ui/Loader";
import BackToTop from "@/components/ui/BackToTop";

/* ── Page metadata (appears in browser tab + SEO) ── */
export const metadata: Metadata = {
  metadataBase: new URL("https://oziaskafando.vercel.app"), // ← update with your domain
  title: {
    default: "Ozias Kafando — CS Student & Researcher",
    template: "%s — Ozias Kafando",
  },
  description:
    "Portfolio of Ozias Kafando — Computer Science student at BMCC, medical imaging researcher, and builder of technology for resource-constrained environments.",
  keywords: ["portfolio", "computer science", "medical imaging", "CT reconstruction", "BMCC", "Burkina Faso", "React", "Next.js", "Python"],
  authors: [{ name: "Ozias Kafando" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ozias Kafando — CS Student & Researcher",
    description:
      "CS student at BMCC, medical imaging researcher, and builder of technology for resource-constrained environments.",
    siteName: "Ozias Kafando Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ozias Kafando — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ozias Kafando — CS Student & Researcher",
    description:
      "CS student at BMCC, medical imaging researcher, and builder of technology for resource-constrained environments.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Skip to main content — keyboard accessibility (CSS-only, no JS needed) */}
        <a href="#main-content" className="skip-link font-mono text-xs">
          Skip to main content
        </a>

        {/* Intro loader animation */}
        <Loader />

        {/* Persistent navigation */}
        <Nav />

        {/*
          Main content area.
          pt-16 = padding-top to clear the fixed navbar (64px tall).
          Each page renders here via the {children} slot.
        */}
        <main id="main-content" className="pt-16">{children}</main>

        {/* Floating back-to-top button */}
        <BackToTop />
      </body>
    </html>
  );
}
