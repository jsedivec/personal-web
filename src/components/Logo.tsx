type LogoProps = {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
};

/** Simple filled mark: teal plate + JŠ. */
export default function Logo({
  className = "",
  markClassName = "h-9 w-9",
  showWordmark = true,
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 ${markClassName}`}
        aria-hidden={showWordmark}
      >
        {!showWordmark ? <title>Jirka Šedivec</title> : null}
        <rect width="40" height="40" rx="10" className="fill-teal" />
        <text
          x="20"
          y="26.5"
          textAnchor="middle"
          fill="var(--paper, #f3eadc)"
          style={{
            fontFamily: "var(--font-space), ui-sans-serif, system-ui, sans-serif",
            fontSize: "15px",
            fontWeight: 600,
            letterSpacing: "-0.08em",
          }}
        >
          JŠ
        </text>
      </svg>
      {showWordmark ? (
        <span className="font-display text-lg tracking-tight text-foreground">
          Jirka Šedivec
        </span>
      ) : null}
    </span>
  );
}
