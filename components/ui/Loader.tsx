/**
 * components/ui/Loader.tsx
 *
 * Intro loader animation - appears on initial page load.
 * Shows "OC" initials with animated effects.
 * Fades out after 3.5 seconds.
 * 
 * "use client" required for useState and animation timing.
 */

"use client";

import { useState, useEffect } from "react";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Check if user has already seen the loader (sessionStorage)
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");
    
    if (hasSeenLoader) {
      // Skip loader on subsequent navigations
      setIsVisible(false);
      return;
    }

    // Start fade-out animation after 1.5s
    const fadeTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 1500);

    // Remove from DOM after animation completes (2 seconds total)
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("hasSeenLoader", "true");
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`loader-overlay ${isAnimating ? "active" : "fade-out"}`}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "var(--bg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      {/* Ambient glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,212,255,0.15) 0%, transparent 70%),
            radial-gradient(ellipse 40% 60% at 30% 70%, rgba(124,58,237,0.1) 0%, transparent 60%)
          `,
          opacity: isAnimating ? 1 : 0,
          transition: "opacity 1s ease",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 70%)",
          opacity: isAnimating ? 1 : 0,
          transition: "opacity 1s ease",
        }}
      />

      {/* Initials */}
      <div className="loader-content relative text-center">
        <h1
          className="font-serif font-bold tracking-tight loader-text"
          style={{
            fontSize: "clamp(5rem, 15vw, 12rem)",
            lineHeight: 1,
          }}
        >
          <span className="text-white loader-letter">O</span>
          <span className="text-accent loader-letter" style={{ animationDelay: "0.15s" }}>
            K
          </span>
          <span className="loader-dot">.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="font-mono text-xs tracking-widest uppercase text-muted mt-6 loader-subtitle"
          style={{ animationDelay: "0.7s" }}
        >
          Portfolio
        </p>

        {/* Loading bar */}
        <div
          className="loader-bar-container mx-auto mt-8"
          style={{
            width: "200px",
            height: "2px",
            background: "rgba(255,255,255,0.05)",
            overflow: "hidden",
          }}
        >
          <div
            className="loader-bar"
            style={{
              height: "100%",
              background: "linear-gradient(90deg, var(--accent), var(--accent2))",
            }}
          />
        </div>
      </div>
    </div>
  );
}
