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
        className="w-[calc(100%-32px)] sm:w-[calc(100%-64px)] max-w-[1280px] mx-auto px-4 sm:px-6 py-6 sm:py-0"
        style={{
          backgroundColor: "rgba(117, 61, 190, 0.5)",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <div
          className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 py-4 sm:py-0"
          style={{
            boxSizing: "border-box",
          }}
        >
          {/* LEFT TEXT */}
          <div
            className="w-full sm:flex-1 text-center sm:text-left"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "8px",
              flexShrink: 0,
            }}
          >
            <h2
              className="text-[20px] sm:text-[22px] md:text-[24px]"
              style={{
                fontFamily: "'Nunito', sans-serif",
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
            className="relative w-full sm:w-auto max-w-[487px] h-[50px] flex-shrink-0"
          >
            {/* Shadow layer */}
            <div
              className="absolute bottom-0 left-0 w-full h-[42px]"
              style={{
                backgroundColor: "#c93360",
                borderRadius: "21px",
              }}
            />
            {/* Button layer */}
            <a
              href="mailto:intake@btvas.com"
              className="cta-banner-btn absolute top-0 left-0 w-full h-[42px]"
              style={{
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
                className="text-[14px] sm:text-[15px] md:text-[17px]"
                style={{
                  fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
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
