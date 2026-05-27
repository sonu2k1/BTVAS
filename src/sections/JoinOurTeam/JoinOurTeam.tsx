"use client";

import React from "react";
import Image from "next/image";

const IMG_SIZE = 130;
const GAP = 17;
const HALF_OFFSET = -(IMG_SIZE / 2);

const leftCol1Images = [
  "/images/0O3A2459.jpg",
  "/images/0O3A2453.jpg",
  "/images/0O3A2433.jpg",
  "/images/0O3A2500.jpg",
];

const leftCol2Images = [
  "/images/0O3A2459.jpg",
  "/images/0O3A2486.jpg",
  "/images/0O3A2474.jpg",
  "/images/0O3A2500.jpg",
];

const rightCol1Images = [
  "/images/0O3A2462.jpg",
  "/images/0O3A2453.jpg",
  "/images/0O3A2433.jpg",
  "/images/0O3A2459.jpg",
];

const rightCol2Images = [
  "/images/0O3A2474.jpg",
  "/images/0O3A2486.jpg",
  "/images/0O3A2462.jpg",
  "/images/0O3A2453.jpg",
];

export const JoinOurTeam: React.FC = () => {
  return (
    <>
      <style>{`
        .join-team-btn:hover {
          background-color: #ff5f95 !important;
          top: 2px !important;
        }
        .join-team-btn:active {
          top: 6px !important;
          background-color: #e03570 !important;
        }
        @media (max-width: 1024px) {
          .join-team-section {
            width: 100% !important;
            height: auto !important;
            padding: 48px 16px !important;
            border-top: 4px solid #7e5cb3 !important;
            border-bottom: 1px solid #E5E7EB !important;
          }
          .join-team-side-images {
            display: none !important;
          }
          .join-team-middle-content {
            width: 100% !important;
            padding: 0 !important;
          }
          .join-team-middle-content h2 {
            font-size: 32px !important;
          }
        }
      `}</style>
      <section
        id="career"
        className="relative bg-white flex items-center justify-between overflow-hidden join-team-section scroll-mt-6"
        style={{
          width: "1440px",
          height: "455px",
          margin: "0 auto",
          borderTop: "6px solid #7e5cb3",
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        {/* ── LEFT IMAGE BLOCK ── */}
        <div
          className="relative flex-shrink-0 join-team-side-images"
          style={{ width: "240px", height: "100%" }}
        >
          {/* Col 1 — half cut off */}
          <div
            className="absolute flex flex-col"
            style={{
              left: `${HALF_OFFSET}px`,
              top: "-95px",
              gap: `${GAP}px`,
            }}
          >
            {leftCol1Images.map((src, i) => (
              <div
                key={`left-col1-${i}`}
                style={{
                  width: `${IMG_SIZE}px`,
                  height: `${IMG_SIZE}px`,
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={src}
                  alt={`Team Member ${i}`}
                  width={IMG_SIZE}
                  height={IMG_SIZE}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>

          {/* Col 2 — full */}
          <div
            className="absolute flex flex-col"
            style={{
              left: `${HALF_OFFSET + IMG_SIZE + GAP}px`,
              top: "-30px",
              gap: `${GAP}px`,
            }}
          >
            {leftCol2Images.map((src, i) => (
              <div
                key={`left-col2-${i}`}
                style={{
                  width: `${IMG_SIZE}px`,
                  height: `${IMG_SIZE}px`,
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={src}
                  alt={`Team Member ${i}`}
                  width={IMG_SIZE}
                  height={IMG_SIZE}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── MIDDLE TEXT SECTION ── */}
        <div
          className="flex flex-col items-center justify-center flex-shrink-0 join-team-middle-content"
          style={{ width: "800px", zIndex: 10 }}
        >
          <h2
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "44px",
              fontWeight: 900,
              lineHeight: 1.2,
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            <span style={{ color: "#111827", textDecoration: "underline", textDecorationColor: "#111827", textUnderlineOffset: "8px", textDecorationThickness: "4px" }}>Ready to Start Your</span>{" "}
            <span style={{ color: "#FF4880" }}>Career with Beyond the View?</span>
          </h2>

          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "17.5px",
              fontWeight: 500,
              color: "#4B5563",
              textAlign: "center",
              lineHeight: "1.6",
              marginBottom: "32px",
              maxWidth: "600px",
            }}
          >
            Build your career in a supportive environment that values learning, collaboration, and growth.
          </p>

          {/* Button — 3D drop shadow style */}
          <div
            style={{
              position: "relative",
              width: "198px",
              height: "50px",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "198px",
                height: "42px",
                backgroundColor: "#c93360",
                borderRadius: "21px",
              }}
            />
            <a
              href="#career"
              className="join-team-btn"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "198px",
                height: "42px",
                borderRadius: "21px",
                backgroundColor: "#FF4880",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                cursor: "pointer",
                border: "none",
                transition: "top 0.1s ease, background-color 0.2s ease",
              }}
            >
              <span
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "16px",
                  fontWeight: "800",
                  color: "#ffffff",
                  whiteSpace: "nowrap",
                }}
              >
                Join Our Team
              </span>
            </a>
          </div>
        </div>

        {/* ── RIGHT IMAGE BLOCK ── */}
        <div
          className="relative flex-shrink-0 join-team-side-images"
          style={{ width: "240px", height: "100%" }}
        >
          {/* Col 1 — full */}
          <div
            className="absolute flex flex-col"
            style={{
              right: `${HALF_OFFSET + IMG_SIZE + GAP}px`,
              top: "-50px",
              gap: `${GAP}px`,
            }}
          >
            {rightCol1Images.map((src, i) => (
              <div
                key={`right-col1-${i}`}
                style={{
                  width: `${IMG_SIZE}px`,
                  height: `${IMG_SIZE}px`,
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={src}
                  alt={`Team Member ${i}`}
                  width={IMG_SIZE}
                  height={IMG_SIZE}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>

          {/* Col 2 — half cut off */}
          <div
            className="absolute flex flex-col"
            style={{
              right: `${HALF_OFFSET}px`,
              top: "-85px",
              gap: `${GAP}px`,
            }}
          >
            {rightCol2Images.map((src, i) => (
              <div
                key={`right-col2-${i}`}
                style={{
                  width: `${IMG_SIZE}px`,
                  height: `${IMG_SIZE}px`,
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={src}
                  alt={`Team Member ${i}`}
                  width={IMG_SIZE}
                  height={IMG_SIZE}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
