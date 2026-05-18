"use client";

import React from "react";

export const CtaBanner: React.FC = () => {
  return (
    <section
      style={{
        width: "1280px",
        height: "114px",
        backgroundColor: "rgba(117, 61, 190, 0.5)",
        borderRadius: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        margin: "0 auto",
      }}
    >
      {/* INNER WRAPPER */}
      <div
        style={{
          width: "1280px",
          height: "114px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "85px",
          padding: "0 24px",
          boxSizing: "border-box",
        }}
      >
        {/* LEFT TEXT */}
        <div
          style={{
            width: "660px",
            height: "66px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "8px",
            flexShrink: 0,
          }}
        >
          <h2
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "24px",
              fontWeight: "900",
              color: "#ffffff",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Ready to see our space
          </h2>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "14px",
              fontWeight: "400",
              color: "rgba(255,255,255,0.85)",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Experience our compassionate environment firsthand with a guided clinic tour.
          </p>
        </div>

        {/* RIGHT BUTTON */}
        <a
          href="mailto:intake@btvas.com"
          style={{
            width: "487px",
            height: "42px",
            borderRadius: "40px",
            backgroundColor: "#FF4880",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "15px",
              fontWeight: "800",
              color: "#ffffff",
              whiteSpace: "nowrap",
            }}
          >
            Email intake@btvas.com to schedule a tour today
          </span>
        </a>
      </div>
    </section>
  );
};
