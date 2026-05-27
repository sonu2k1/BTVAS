"use client";

import React from "react";

export const CtaBanner: React.FC = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800;900&display=swap');

        .cta-banner-btn:hover {
          top: 2px !important;
          background: linear-gradient(135deg, #ff5f95 0%, #ff80b0 100%) !important;
        }
        .cta-banner-btn:active {
          top: 5px !important;
        }

        @media (max-width: 1024px) {
          .cta-banner-section {
            width: 100% !important;
            height: auto !important;
            padding: 28px 20px !important;
          }
          .cta-banner-wrapper {
            flex-direction: column !important;
            gap: 20px !important;
            align-items: center !important;
          }
          .cta-banner-left {
            align-items: center !important;
            text-align: center !important;
          }
          .cta-banner-right {
            align-items: center !important;
          }
          .cta-banner-btn-container {
            width: 100% !important;
            max-width: 460px !important;
          }
          .cta-banner-btn-shadow,
          .cta-banner-btn {
            width: 100% !important;
          }
          .cta-banner-btn span {
            font-size: 10px !important;
          }
        }

        @media (max-width: 480px) {
          .cta-banner-btn span {
            font-size: 10px !important;
          }
        }
      `}</style>

      <section
        className="cta-banner-section"
        style={{
          width: "1280px",
          height: "114px",
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #fbfbfbff 14%, #dbc1f9ff 60%, #dac3f9ff 86%, #cdbce2ff 100%)",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          margin: "0 auto",
          position: "relative",
          overflow: "hidden",
        }}
      >


        <div
          className="cta-banner-wrapper"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 40px",
            boxSizing: "border-box",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* LEFT: Heading + Star Rating */}
          <div
            className="cta-banner-left"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              flexShrink: 0,
            }}
          >
            <h2
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "22px",
                fontWeight: 900,
                color: "#1a1020",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Join 100+ Happy Parents
              <br />
              Who Trust BTVAS
            </h2>

            {/* Star Rating */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "#FF4880", fontSize: "18px" }}>★</span>
              <span
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "14px",
                  fontWeight: 800,
                  color: "#FF4880",
                }}
              >
                4.6/5
              </span>
              <span
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#3a2a50",
                }}
              >
                Rating
              </span>
            </div>
          </div>

          {/* RIGHT: Subtitle + 3D Button */}
          <div
            className="cta-banner-right"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              flexShrink: 0,
            }}
          >
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                color: "#5a3a8a",
                margin: 0,
                letterSpacing: "0.2px",
              }}
            >
              Have Questions ? We&apos;re here to help!
            </p>

            {/* 3D drop-shadow button */}
            <div
              className="cta-banner-btn-container"
              style={{ position: "relative", height: "46px", width: "460px" }}
            >
              {/* Shadow layer */}
              <div
                className="cta-banner-btn-shadow"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "460px",
                  height: "40px",
                  backgroundColor: "#c93360",
                  borderRadius: "23px",
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
                  width: "460px",
                  height: "40px",
                  borderRadius: "23px",
                  background:
                    "linear-gradient(135deg, #FF4880 0%, #ff6b9d 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "top 0.1s ease, background 0.2s ease",
                  padding: "0 28px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#ffffff",
                    whiteSpace: "nowrap",
                    letterSpacing: "0.2px",
                  }}
                >
                  Email intake@btvas.com to schedule a tour today
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};