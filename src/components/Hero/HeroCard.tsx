"use client";

import React from "react";

export const HeroCard: React.FC = () => {
  return (
    <>
      <style>{`
        .hero-visit-btn:hover {
          background-color: #fff233 !important;
          top: 2px !important;
        }
        .hero-visit-btn:active {
          top: 8px !important;
          background-color: #e6d400 !important;
        }
      `}</style>
      {/* OUTER CARD */}
      <div
        className="w-full max-w-[756px]"
        style={{
          borderRadius: "20px",
          backgroundColor: "rgba(117, 61, 190, 0.6)",
          padding: "10px",
          boxSizing: "border-box",
          flexShrink: 0,
        }}
      >
        {/* INNER BORDER */}
        <div
          className="w-full"
          style={{
            borderRadius: "20px",
            border: "1.5px dashed rgba(255, 255, 255, 0.4)",
            boxSizing: "border-box",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          {/* CONTENT AREA */}
          <div
            className="w-full"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: "12px",
            }}
          >
            {/* Subtitle */}
            <p
              className="text-[20px] sm:text-[26px] md:text-[32px]"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: "400",
                color: "#ffffff",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Seeing Every Child
            </p>

            {/* Main Heading */}
            <h1
              className="text-[28px] sm:text-[38px] md:text-[52px]"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: "900",
                color: "#FFE600",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Beyond Their Diagnosis
            </h1>

            {/* Quote */}
            <p
              className="text-[13px] sm:text-[14px] md:text-[15px]"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: "600",
                fontStyle: "italic",
                color: "#ffffff",
                lineHeight: "1.75",
                margin: 0,
              }}
            >
              "Every child deserves a champion-an adult who will never give up on
              them, who understands the power of connection and insists that they
              become the best that they can possibly be" -Rita Pierson
            </p>
          </div>

          {/* BUTTON — 3D drop shadow style */}
          <div
            style={{
              position: "relative",
              width: "198px",
              height: "50px", // 42px height + 8px shadow offset
              flexShrink: 0,
            }}
          >
            {/* Shadow layer */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "198px",
                height: "42px",
                backgroundColor: "#b8ab00",
                borderRadius: "21px",
              }}
            />
            {/* Button layer */}
            <button
              className="hero-visit-btn"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "198px",
                height: "42px",
                borderRadius: "21px",
                backgroundColor: "#F5E300",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "top 0.1s ease, background-color 0.2s ease",
              }}
            >
              <span
                style={{
                  fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#5F3B03",
                  whiteSpace: "nowrap",
                }}
              >
                Request Visit Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
