"use client";

import React from "react";
import Image from "next/image";

const IMG_SIZE = 130;
const GAP = 17;
const HALF_OFFSET = -(IMG_SIZE / 2);
const TEAM_IMG = "/images/0O3A2462.jpg";

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
          }
          .join-team-side-images {
            display: none !important;
          }
          .join-team-middle-content {
            width: 100% !important;
            padding: 0 !important;
          }
          .join-team-middle-content h2 {
            font-size: 28px !important;
          }
        }
      `}</style>
      <section
        className="relative bg-white flex items-center justify-between overflow-hidden join-team-section"
        style={{ width: "1440px", height: "455px", margin: "0 auto" }}
      >
        {/* ── LEFT IMAGE BLOCK ── */}
        <div
          className="relative flex-shrink-0 join-team-side-images"
          style={{ width: "240px", height: "80%" }}
        >
          {/* Col 1 — half cut off */}
          <div
            className="absolute flex flex-col"
            style={{
              left: `${HALF_OFFSET}px`,
              top: `${GAP}px`,
              gap: `${GAP}px`,
            }}
          >
            <div
              style={{
                width: `${IMG_SIZE}px`,
                height: `${IMG_SIZE}px`,
                backgroundColor: "#D1D5DB",
                borderRadius: "16px",
              }}
            />
            <div
              style={{
                width: `${IMG_SIZE}px`,
                height: `${IMG_SIZE}px`,
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <Image
                src={TEAM_IMG}
                alt="Team"
                width={IMG_SIZE}
                height={IMG_SIZE}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div
              style={{
                width: `${IMG_SIZE}px`,
                height: `${IMG_SIZE}px`,
                backgroundColor: "#D1D5DB",
                borderRadius: "16px",
              }}
            />
          </div>

          {/* Col 2 — full */}
          <div
            className="absolute flex flex-col"
            style={{
              left: `${HALF_OFFSET + IMG_SIZE + GAP}px`,
              top: `${GAP}px`,
              gap: `${GAP}px`,
            }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={`left-full-${i}`}
                style={{
                  width: `${IMG_SIZE}px`,
                  height: `${IMG_SIZE}px`,
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={TEAM_IMG}
                  alt="Team"
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
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "17px",
              fontWeight: "600",
              color: "#6B7280",
              marginBottom: "8px",
              textAlign: "center",
            }}
          >
            Helping Children
          </p>

          <h2
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "40px",
              fontWeight: 900,
              lineHeight: 1.2,
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            <span style={{ color: "#111827", textDecoration: "underline", textDecorationColor: "#FF4880", textUnderlineOffset: "8px", textDecorationThickness: "4px" }}>Be the Reason</span>{" "}
            <span style={{ color: "#FF4880" }}>Someone Smiles</span>
          </h2>

          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "17px",
              fontWeight: 400,
              color: "#4B5563",
              textAlign: "center",
              lineHeight: 1.6,
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
              href="#team"
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
                  fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
                  fontSize: "18px",
                  fontWeight: "700",
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
          style={{ width: "240px", height: "80%" }}
        >
          {/* Col 1 — full */}
          <div
            className="absolute flex flex-col"
            style={{
              right: `${HALF_OFFSET + IMG_SIZE + GAP}px`,
              top: `${GAP}px`,
              gap: `${GAP}px`,
            }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={`right-full-${i}`}
                style={{
                  width: `${IMG_SIZE}px`,
                  height: `${IMG_SIZE}px`,
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={TEAM_IMG}
                  alt="Team"
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
              top: `${GAP}px`,
              gap: `${GAP}px`,
            }}
          >
            <div
              style={{
                width: `${IMG_SIZE}px`,
                height: `${IMG_SIZE}px`,
                backgroundColor: "#D1D5DB",
                borderRadius: "16px",
              }}
            />
            <div
              style={{
                width: `${IMG_SIZE}px`,
                height: `${IMG_SIZE}px`,
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <Image
                src={TEAM_IMG}
                alt="Team"
                width={IMG_SIZE}
                height={IMG_SIZE}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div
              style={{
                width: `${IMG_SIZE}px`,
                height: `${IMG_SIZE}px`,
                backgroundColor: "#D1D5DB",
                borderRadius: "16px",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};
