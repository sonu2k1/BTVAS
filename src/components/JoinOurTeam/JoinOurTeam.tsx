"use client";

import React from "react";
import Image from "next/image";

// Each side has 3 stacked images + partial peeks on left/right edges
// Layout per side (left example):
//   col-left (partial, ~60px wide, clipped): img1-top, img2-mid, img3-bot
//   col-right (full 180px): img1-top, img2-mid, img3-bot

const LEFT_IMAGES = [
  "/images/0O3A2433.jpg",
  "/images/0O3A2433.jpg",
  "/images/0O3A2462.jpg",
];

const RIGHT_IMAGES = [
  "/images/0O3A2474.jpg",
  "/images/0O3A2486.jpg",
  "/images/0O3A2500.jpg",
];

const IMG_W = 180;
const IMG_H = 160;
const GAP = 12;
const PARTIAL_W = 60; // peeking column width
const SIDE_W = 372;
const SIDE_H = 476; // 3 images + 2 gaps = 3*160 + 2*12 = 504 → we clip to section height

export const JoinOurTeam: React.FC = () => {
  return (
    <section
      className="relative bg-white flex items-center justify-between overflow-hidden"
      style={{ width: "1440px", height: "455px", margin: "0 auto" }}
    >
      {/* ── LEFT IMAGE BLOCK ── */}
      <div
        className="relative flex-shrink-0 overflow-hidden"
        style={{ width: `${SIDE_W}px`, height: "455px" }}
      >
        {/* Partial peek column (leftmost, clipped) */}
        <div
          className="absolute top-0 left-0 flex flex-col"
          style={{ gap: `${GAP}px`, paddingTop: "0px" }}
        >
          {LEFT_IMAGES.map((src, i) => (
            <div
              key={`left-partial-${i}`}
              style={{
                width: `${PARTIAL_W}px`,
                height: `${IMG_H}px`,
                borderRadius: "12px",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <Image
                src={src}
                alt={`Team photo ${i + 1}`}
                width={IMG_W}
                height={IMG_H}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>

        {/* Main column */}
        <div
          className="absolute top-0 flex flex-col"
          style={{ left: `${PARTIAL_W + GAP}px`, gap: `${GAP}px` }}
        >
          {LEFT_IMAGES.map((src, i) => (
            <div
              key={`left-main-${i}`}
              style={{
                width: `${IMG_W}px`,
                height: `${IMG_H}px`,
                borderRadius: "12px",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <Image
                src={src}
                alt={`Team photo ${i + 1}`}
                width={IMG_W}
                height={IMG_H}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>

        {/* Right partial peek (overlaps into center gap area, subtle) */}
        <div
          className="absolute top-0 flex flex-col"
          style={{
            left: `${PARTIAL_W + GAP + IMG_W + GAP}px`,
            gap: `${GAP}px`,
          }}
        >
          {LEFT_IMAGES.map((src, i) => (
            <div
              key={`left-right-peek-${i}`}
              style={{
                width: `${PARTIAL_W}px`,
                height: `${IMG_H}px`,
                borderRadius: "12px",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <Image
                src={src}
                alt={`Team photo ${i + 1}`}
                width={IMG_W}
                height={IMG_H}
                className="w-full h-full object-cover object-right"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── MIDDLE TEXT SECTION ── */}
      {/* gap 32 on each side from image blocks */}
      <div
        className="flex flex-col items-center justify-center flex-shrink-0"
        style={{ width: "800px", height: "206px" }}
      >
        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "15px",
            color: "#9CA3AF",
            fontStyle: "italic",
            letterSpacing: "0.1em",
            marginBottom: "8px",
            textAlign: "center",
          }}
        >
          Helping Children
        </p>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "34px",
            fontWeight: 800,
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
            fontFamily: "'Georgia', serif",
            fontSize: "16px",
            color: "#4B5563",
            textAlign: "center",
            lineHeight: 1.6,
            marginBottom: "28px",
            maxWidth: "620px",
          }}
        >
          Build your career in a supportive environment that values learning,
          collaboration, and growth.
        </p>

        {/* Button */}
        <button
          style={{
            width: "198px",
            height: "42px",
            background: "linear-gradient(90deg, #F43F5E 0%, #EC4899 100%)",
            borderRadius: "999px",
            border: "none",
            color: "#ffffff",
            fontFamily: "'Georgia', serif",
            fontSize: "15px",
            fontWeight: 700,
            cursor: "pointer",
            letterSpacing: "0.01em",
          }}
        >
          Join Our Team
        </button>
      </div>

      {/* ── RIGHT IMAGE BLOCK (mirror of left) ── */}
      <div
        className="relative flex-shrink-0 overflow-hidden"
        style={{ width: `${SIDE_W}px`, height: "455px" }}
      >
        {/* Left partial peek */}
        <div
          className="absolute top-0 left-0 flex flex-col"
          style={{ gap: `${GAP}px` }}
        >
          {RIGHT_IMAGES.map((src, i) => (
            <div
              key={`right-left-peek-${i}`}
              style={{
                width: `${PARTIAL_W}px`,
                height: `${IMG_H}px`,
                borderRadius: "12px",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <Image
                src={src}
                alt={`Team photo ${i + 1}`}
                width={IMG_W}
                height={IMG_H}
                className="w-full h-full object-cover object-left"
              />
            </div>
          ))}
        </div>

        {/* Main column */}
        <div
          className="absolute top-0 flex flex-col"
          style={{ left: `${PARTIAL_W + GAP}px`, gap: `${GAP}px` }}
        >
          {RIGHT_IMAGES.map((src, i) => (
            <div
              key={`right-main-${i}`}
              style={{
                width: `${IMG_W}px`,
                height: `${IMG_H}px`,
                borderRadius: "12px",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <Image
                src={src}
                alt={`Team photo ${i + 1}`}
                width={IMG_W}
                height={IMG_H}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>

        {/* Right partial peek (clipped at edge) */}
        <div
          className="absolute top-0 flex flex-col"
          style={{
            left: `${PARTIAL_W + GAP + IMG_W + GAP}px`,
            gap: `${GAP}px`,
          }}
        >
          {RIGHT_IMAGES.map((src, i) => (
            <div
              key={`right-right-peek-${i}`}
              style={{
                width: `${PARTIAL_W}px`,
                height: `${IMG_H}px`,
                borderRadius: "12px",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <Image
                src={src}
                alt={`Team photo ${i + 1}`}
                width={IMG_W}
                height={IMG_H}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
