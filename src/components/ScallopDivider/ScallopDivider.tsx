import React from "react";

interface ScallopDividerProps {
  /** The fill colour of the scallop arcs */
  color?: string;
  /** Flip vertically so arcs point upward */
  flip?: boolean;
  /** Extra Tailwind classes on the wrapper */
  className?: string;
}

/**
 * A repeating scallop / bunting divider rendered as an inline SVG.
 * Use `color` to match the section the arcs merge into, and `flip`
 * to reverse the direction.
 */
export const ScallopDivider: React.FC<ScallopDividerProps> = ({
  color = "#00084b",
  flip = false,
  className = "",
}) => (
  <div
    className={`w-full overflow-hidden leading-[0] ${className}`}
    style={{ transform: flip ? "scaleY(-1)" : undefined }}
  >
    <svg
      className="w-full block"
      viewBox="0 0 1440 30"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={`scallop-${color.replace("#", "")}`}
          x="0"
          y="0"
          width="40"
          height="30"
          patternUnits="userSpaceOnUse"
        >
          <path d={`M0 30 Q10 0 20 30 Q30 0 40 30 Z`} fill={color} />
        </pattern>
      </defs>
      <rect
        width="1440"
        height="30"
        fill={`url(#scallop-${color.replace("#", "")})`}
      />
    </svg>
  </div>
);
