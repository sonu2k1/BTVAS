"use client";

import React from "react";

export const HeroCard: React.FC = () => {
  return (
    /* OUTER CARD */
    <div
      style={{
        width: "756px",
        height: "382px",
        borderRadius: "20px",
        backgroundColor: "rgba(117, 61, 190, 0.6)",
        padding: "10px",
        boxSizing: "border-box",
        flexShrink: 0,
      }}
    >
      {/* INNER BORDER */}
      <div
        style={{
          width: "736px",
          height: "362px",
          borderRadius: "20px",
          border: "1.5px dashed rgba(255, 255, 255, 0.4)",
          boxSizing: "border-box",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* CONTENT AREA */}
        <div
          style={{
            width: "688px",
            height: "248px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: "12px",
          }}
        >
          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "32px",
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
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "52px",
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
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "15px",
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

        {/* BUTTON */}
        <button
          style={{
            width: "198px",
            height: "42px",
            borderRadius: "40px",
            backgroundColor: "#F5E300",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "15px",
              fontWeight: "800",
              color: "#5F3B03",
            }}
          >
            Request Visit Now
          </span>
        </button>
      </div>
    </div>
  );
};
