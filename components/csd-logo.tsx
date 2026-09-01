type CsdLogoProps = {
  className?: string;
};

export function CsdLogo({ className = "" }: CsdLogoProps) {
  return (
    <svg
      aria-hidden="true"
      className={`brand-mark ${className}`.trim()}
      focusable="false"
      viewBox="0 0 64 64"
    >
      <path className="brand-mark-base" d="M6 4h39l13 13v43H19L6 47Z" />
      <path className="brand-mark-corner" d="M45 4v13h13Z" />
      <path className="brand-mark-outline" d="M12 10h30l10 10v34H22L12 44Z" />
      <text className="brand-mark-letters" x="31" y="38" textAnchor="middle">CSD</text>
      <path className="brand-mark-signal" d="M15 45c7 7 25 9 36-2" />
      <circle className="brand-mark-node" cx="51" cy="43" r="2.7" />
    </svg>
  );
}
