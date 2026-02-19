/** @type {import('tailwindcss').Config} */
const config = {
  // Scan all files in app/ and components/ for class names
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Custom color palette ──────────────────────────────────
      colors: {
        bg:       "#080b10",
        surface:  "#0e1420",
        accent:   "#00d4ff",
        accent2:  "#7c3aed",
        muted:    "#6b7a99",
        border:   "rgba(255,255,255,0.07)",
      },
      // ── Custom fonts (must match globals.css import) ──────────
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        mono:  ["var(--font-dm-mono)",  "monospace"],
        sans:  ["var(--font-syne)",     "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
