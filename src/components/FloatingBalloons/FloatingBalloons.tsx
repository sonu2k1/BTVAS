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

const BALLOONS: BalloonConfig[] = [
  { id: "b1", left: "3%", size: 48, color: "#FF4880", shine: "#ff7aa3", duration: 28, delay: 0, drift: 14 },
  { id: "b2", left: "22%", size: 36, color: "#7e5cb3", shine: "#a88fd4", duration: 34, delay: 10, drift: -12 },
  { id: "b3", left: "41%", size: 40, color: "#fee70a", shine: "#fff06a", duration: 31, delay: 20, drift: 14 },
  { id: "b4", left: "60%", size: 32, color: "#4AB8D4", shine: "#8FD4EA", duration: 36, delay: 30, drift: -14 },
  { id: "b5", left: "79%", size: 44, color: "#f94a8a", shine: "#ff8ab0", duration: 29, delay: 40, drift: 12 },
  { id: "b6", left: "96%", size: 34, color: "#753DBE", shine: "#9b6fd4", duration: 33, delay: 50, drift: -10 },
  { id: "b7", left: "12%", size: 40, color: "#FFD740", shine: "#ffe566", duration: 30, delay: 60, drift: 16 },
  { id: "b8", left: "88%", size: 30, color: "#39B1D1", shine: "#7ecae3", duration: 35, delay: 70, drift: -12 },
  { id: "b9", left: "31%", size: 36, color: "#FF4880", shine: "#ff8aab", duration: 32, delay: 80, drift: 10 },
  { id: "b10", left: "69%", size: 28, color: "#7e5cb3", shine: "#b39ad8", duration: 37, delay: 90, drift: -10 },
  { id: "b11", left: "50%", size: 26, color: "#4AB8D4", shine: "#9adcef", duration: 38, delay: 100, drift: 12 },
  { id: "b12", left: "7%", size: 30, color: "#fee70a", shine: "#fff59d", duration: 27, delay: 110, drift: -14 },
  { id: "b13", left: "93%", size: 24, color: "#f94a8a", shine: "#ff9ec0", duration: 40, delay: 120, drift: 10 },
  { id: "b14", left: "55%", size: 22, color: "#753DBE", shine: "#a67fd8", duration: 39, delay: 130, drift: -8 },
];

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

export const FloatingBalloons: React.FC = () => {
  return (
    <>
      <style>{`
        .floating-balloons-layer {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
        }

        .floating-balloon {
          position: absolute;
          bottom: 0;
          opacity: 0;
          will-change: transform, opacity;
          animation: floating-balloon-rise linear infinite;
          filter: saturate(1.25) drop-shadow(0 6px 10px rgba(1, 12, 111, 0.12));
        }

        @keyframes floating-balloon-rise {
          0% {
            transform: translate3d(0, 24px, 0) rotate(-6deg);
            opacity: 0;
          }
          8% {
            opacity: 0.72;
          }
          50% {
            transform: translate3d(var(--drift), -48vh, 0) rotate(4deg);
            opacity: 0.88;
          }
          92% {
            opacity: 0.68;
          }
          100% {
            transform: translate3d(calc(var(--drift) * 1.4), -100vh, 0) rotate(-3deg);
            opacity: 0;
          }
        }

        @keyframes floating-balloon-sway {
          0%, 100% {
            margin-left: 0;
          }
          50% {
            margin-left: 6px;
          }
        }

        .floating-balloon-inner {
          display: block;
          animation: floating-balloon-sway 4s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .floating-balloon--hide-mobile {
            display: none;
          }
          .floating-balloon {
            filter: drop-shadow(0 4px 6px rgba(1, 12, 111, 0.1));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .floating-balloons-layer {
            display: none;
          }
        }
      `}</style>

      <div className="floating-balloons-layer" aria-hidden="true">
        {BALLOONS.map((balloon, index) => (
          <div
            key={balloon.id}
            className={`floating-balloon${index >= 5 ? " floating-balloon--hide-mobile" : ""}`}
            style={
              {
                left: balloon.left,
                animationDuration: `${balloon.duration}s`,
                animationDelay: `${balloon.delay}s`,
                "--drift": `${balloon.drift}px`,
              } as React.CSSProperties
            }
          >
            <span className="floating-balloon-inner">
              <BalloonSvg size={balloon.size} color={balloon.color} shine={balloon.shine} />
            </span>
          </div>
        ))}
      </div>
    </>
  );
};
