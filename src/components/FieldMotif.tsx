// Signature element: fine, gently swaying field/grove strokes echoing the
// SVDC logo and Monterey County's farm country. Used sparingly as ambient
// detail — a divider, not a wallpaper.

type FieldMotifProps = {
  className?: string;
  tone?: "olive" | "sage";
};

export default function FieldMotif({ className = "", tone = "olive" }: FieldMotifProps) {
  const stroke = tone === "olive" ? "#5B8C00" : "#8FBF2A";

  const strokes = Array.from({ length: 9 }, (_, i) => i);

  return (
    <svg
      viewBox="0 0 240 40"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {strokes.map((i) => {
        const x = 10 + i * 26;
        const height = 22 + (i % 3) * 6;
        const delay = (i % 4) * 0.4;
        return (
          <line
            key={i}
            x1={x}
            y1={40}
            x2={x}
            y2={40 - height}
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            className="field-stroke"
            style={{ animationDelay: `${delay}s`, opacity: 0.55 }}
          />
        );
      })}
    </svg>
  );
}
