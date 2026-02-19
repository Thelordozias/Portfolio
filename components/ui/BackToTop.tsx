/**
 * components/ui/BackToTop.tsx
 *
 * Floating "back to top" button — appears after scrolling 400px.
 * Positioned bottom-right, above the noise overlay (z-index < 999).
 */

"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 998,
        width: "40px",
        height: "40px",
        background: "var(--surface)",
        border: "1px solid rgba(255,255,255,0.1)",
        color: "var(--accent)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "border-color 0.2s, background 0.2s",
        fontSize: "1.1rem",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
        (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.08)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
        (e.currentTarget as HTMLElement).style.background = "var(--surface)";
      }}
    >
      ↑
    </button>
  );
}
