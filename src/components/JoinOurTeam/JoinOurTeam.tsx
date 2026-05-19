"use client";

import React from "react";
import Image from "next/image";

// Layout constants for a perfect fit in 455px height
const IMG_SIZE = 130;
const GAP = 17;
const HALF_OFFSET = -(IMG_SIZE / 2); // -65px so it's exactly half hidden

const TEAM_IMG = "/images/0O3A2433.jpg"; // We'll just use one of the team images as the repeating one

export const JoinOurTeam: React.FC = () => {
  return (
    <section
      className="relative bg-white flex items-center justify-between overflow-hidden"
      style={{ width: "1440px", height: "455px", margin: "0 auto" }}
    >
      {/* ── LEFT IMAGE BLOCK ── */}
      <div
        className="relative flex-shrink-0"
        style={{ width: "240px", height: "100%" }}
      >
        {/* Col 1 (Far Left - Half cut off) */}
        <div
          className="absolute flex flex-col"
          style={{
            left: `${HALF_OFFSET}px`,
            top: `${GAP}px`,
            gap: `${GAP}px`,
          }}
        >
          {/* Top: Grey block */}
          <div
            style={{
              width: `${IMG_SIZE}px`,
              height: `${IMG_SIZE}px`,
              backgroundColor: "#D1D5DB", // Grey block
              borderRadius: "16px",
            }}
          />
          {/* Middle: Image */}
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
          {/* Bottom: Grey block */}
          <div
            style={{
              width: `${IMG_SIZE}px`,
              height: `${IMG_SIZE}px`,
              backgroundColor: "#D1D5DB", // Grey block
              borderRadius: "16px",
            }}
          />
        </div>

        {/* Col 2 (Inner Left - Full) */}
        <div
          className="absolute flex flex-col"
          style={{
            left: `${HALF_OFFSET + IMG_SIZE + GAP}px`, // -65 + 130 + 17 = 82px
            top: `${GAP}px`,
            gap: `${GAP}px`,
          }}
        >
          {[1, 2, 3].map((_, i) => (
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
        className="flex flex-col items-center justify-center flex-shrink-0"
        style={{ width: "800px", zIndex: 10 }}
      >
        {/* Subtitle */}
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

        {/* Heading */}
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
          <span style={{ color: "#111827" }}>Be the Reason </span>
          <span style={{ color: "#7C3AED" }}>Someone Smiles</span>
        </h2>

        {/* Description */}
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

        {/* Button */}
        <button
          style={{
            width: "200px",
            height: "48px",
            backgroundColor: "#FF4880",
            borderRadius: "50px",
            border: "none",
            color: "#ffffff",
            fontFamily: "'Nunito', sans-serif",
            fontSize: "16px",
            fontWeight: 800,
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(255, 72, 128, 0.25)",
          }}
        >
          Join Our Team
        </button>
      </div>

      {/* ── RIGHT IMAGE BLOCK ── */}
      <div
        className="relative flex-shrink-0"
        style={{ width: "240px", height: "100%" }}
      >
        {/* Col 1 (Inner Right - Full) */}
        <div
          className="absolute flex flex-col"
          style={{
            right: `${HALF_OFFSET + IMG_SIZE + GAP}px`, // 82px from right
            top: `${GAP}px`,
            gap: `${GAP}px`,
          }}
        >
          {[1, 2, 3].map((_, i) => (
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

        {/* Col 2 (Far Right - Half cut off) */}
        <div
          className="absolute flex flex-col"
          style={{
            right: `${HALF_OFFSET}px`, // -65px from right
            top: `${GAP}px`,
            gap: `${GAP}px`,
          }}
        >
          {/* Top: Grey block */}
          <div
            style={{
              width: `${IMG_SIZE}px`,
              height: `${IMG_SIZE}px`,
              backgroundColor: "#D1D5DB", // Grey block
              borderRadius: "16px",
            }}
          />
          {/* Middle: Image */}
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
          {/* Bottom: Grey block */}
          <div
            style={{
              width: `${IMG_SIZE}px`,
              height: `${IMG_SIZE}px`,
              backgroundColor: "#D1D5DB", // Grey block
              borderRadius: "16px",
            }}
          />
        </div>
      </div>
    </section>
  );
};
