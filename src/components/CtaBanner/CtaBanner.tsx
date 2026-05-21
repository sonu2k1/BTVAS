"use client";

import React from "react";

export const CtaBanner: React.FC = () => {
  return (
    <>
      <style>{`
        .cta-banner-btn:hover {
          background-color: #ff5f95 !important;
          top: 2px !important;
        }
        .cta-banner-btn:active {
          top: 6px !important;
          background-color: #e03570 !important;
        }
      `}</style>
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

          {/* RIGHT BUTTON — 3D drop shadow style */}
          <div
            style={{
              position: "relative",
              width: "487px",
              height: "50px",
              flexShrink: 0,
            }}
          >
            {/* Shadow layer */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "487px",
                height: "42px",
                backgroundColor: "#c93360",
                borderRadius: "21px",
              }}
            />
            {/* Button layer */}
            <a
              href="mailto:intake@btvas.com"
              className="cta-banner-btn"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "487px",
                height: "42px",
                borderRadius: "21px",
                backgroundColor: "#FF4880",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                cursor: "pointer",
                transition: "top 0.1s ease, background 0.2s ease",
              }}
            >
              <span
                style={{
                  fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
                  fontSize: "17px",
                  fontWeight: "700",
                  color: "#ffffff",
                  whiteSpace: "nowrap",
                }}
              >
                Email intake@btvas.com to schedule a tour today
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
