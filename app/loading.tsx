/**
 * app/loading.tsx
 *
 * Global loading UI — shown by Next.js during page navigation
 * while server components are being fetched/rendered.
 * Matches the portfolio's design system.
 */

export default function Loading() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Animated bar */}
        <div
          style={{
            width: "120px",
            height: "2px",
            background: "rgba(255,255,255,0.05)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "40%",
              background: "linear-gradient(90deg, var(--accent), var(--accent2))",
              animation: "loadingSlide 1.2s ease-in-out infinite",
            }}
          />
        </div>
        <p className="font-mono text-xs text-muted tracking-widest uppercase">
          Loading
        </p>
      </div>

      <style>{`
        @keyframes loadingSlide {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(150%); }
          100% { transform: translateX(350%); }
        }
      `}</style>
    </div>
  );
}
