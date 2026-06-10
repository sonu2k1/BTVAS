import React from "react";

type BalloonConfig = {
  id: string;
  left: string;
  size: number;
  color: string;
  shine: string;
  duration: number;
  delay: number;
  drift: number;
};

const PALETTE = [
  { color: "#FF4880", shine: "#ff7aa3" },
  { color: "#7e5cb3", shine: "#a88fd4" },
  { color: "#fee70a", shine: "#fff06a" },
  { color: "#4AB8D4", shine: "#8FD4EA" },
  { color: "#753DBE", shine: "#9b6fd4" },
  { color: "#f94a8a", shine: "#ff8ab0" },
];

function hashSeed(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

const BALLOON_SLOTS = [10, 50, 90];

function buildBalloons(seed: string): BalloonConfig[] {
  const base = hashSeed(seed);

  return [0, 1, 2].map((index) => {
    const mix = base + index * 97;
    const palette = PALETTE[mix % PALETTE.length];
    const jitter = (mix % 5) - 2;

    return {
      id: `${seed}-${index}`,
      left: `${BALLOON_SLOTS[index] + jitter}%`,
      size: 22 + (mix % 18),
      color: palette.color,
      shine: palette.shine,
      duration: 24 + (mix % 14),
      delay: index * 14 + (mix % 4),
      drift: ((mix % 2 === 0 ? 1 : -1) * (10 + (mix % 18))),
    };
  });
}

const BalloonSvg: React.FC<{ size: number; color: string; shine: string }> = ({ size, color, shine }) => (
  <svg
    width={size}
    height={size * 1.35}
    viewBox="0 0 48 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <ellipse cx="24" cy="26" rx="20" ry="24" fill={color} />
    <ellipse cx="18" cy="18" rx="6" ry="8" fill={shine} opacity="0.45" />
    <path d="M22 48 L24 58 L26 48 Z" fill={color} />
    <path
      d="M24 58 Q26 62 24 64 Q22 62 24 58"
      stroke={color}
      strokeWidth="1.2"
      fill="none"
      opacity="0.6"
    />
  </svg>
);

type SectionBalloonLayerProps = {
  seed: string;
};

export const SectionBalloonLayer: React.FC<SectionBalloonLayerProps> = ({ seed }) => {
  const balloons = buildBalloons(seed);

  return (
    <>
      <style>{`
        .section-balloon-layer {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
        }

        .section-balloon {
          position: absolute;
          bottom: 0;
          opacity: 0;
          will-change: transform, opacity;
          animation: section-balloon-rise linear infinite;
          filter: drop-shadow(0 5px 8px rgba(1, 12, 111, 0.1));
        }

        @keyframes section-balloon-rise {
          0% {
            transform: translate3d(0, 16px, 0) rotate(-5deg);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          55% {
            transform: translate3d(var(--drift), -55%, 0) rotate(3deg);
            opacity: 0.62;
          }
          90% {
            opacity: 0.35;
          }
          100% {
            transform: translate3d(calc(var(--drift) * 1.2), -115%, 0) rotate(-2deg);
            opacity: 0;
          }
        }

        .section-balloon-inner {
          display: block;
          animation: section-balloon-sway 4.5s ease-in-out infinite;
        }

        @keyframes section-balloon-sway {
          0%, 100% {
            margin-left: 0;
          }
          50% {
            margin-left: 5px;
          }
        }

        @media (max-width: 768px) {
          .section-balloon--hide-mobile {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .section-balloon-layer {
            display: none;
          }
        }
      `}</style>

      <div className="section-balloon-layer" aria-hidden="true">
        {balloons.map((balloon, index) => (
          <div
            key={balloon.id}
            className={`section-balloon${index >= 2 ? " section-balloon--hide-mobile" : ""}`}
            style={
              {
                left: balloon.left,
                animationDuration: `${balloon.duration}s`,
                animationDelay: `${balloon.delay}s`,
                "--drift": `${balloon.drift}px`,
              } as React.CSSProperties
            }
          >
            <span className="section-balloon-inner">
              <BalloonSvg size={balloon.size} color={balloon.color} shine={balloon.shine} />
            </span>
          </div>
        ))}
      </div>
    </>
  );
};
