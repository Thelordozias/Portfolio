/**
 * components/ui/Footer.tsx
 *
 * Reusable footer component.
 * Accepts an optional `note` prop for page-specific text
 * (e.g. "Research conducted at BMCC with Professor Benkarroum").
 */

type FooterProps = {
  note?: string;
};

export default function Footer({ note }: FooterProps) {
  return (
    <footer
      className="flex flex-col md:flex-row items-center justify-between gap-3 px-6 md:px-12 py-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      <p className="font-mono text-xs text-muted">
        © 2026 Ozias Kafando — Built with intention.
      </p>
      {note ? (
        <p className="font-mono text-xs text-muted">{note}</p>
      ) : (
        <p className="font-mono text-xs text-muted">CS @ BMCC · New York City</p>
      )}
    </footer>
  );
}
