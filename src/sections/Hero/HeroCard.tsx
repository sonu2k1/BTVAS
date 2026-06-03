"use client";

import React, { useState } from "react";
import { ScheduleTourModal } from "../../components/ScheduleTourModal";

export const HeroCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&family=Baloo+2:wght@400;500;600;700;800&family=Mochiy+Pop+One&family=Mochiy+Pop+P+One&family=Prompt:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap');

        .hero-subtitle-br {
          display: none;
        }

        .hero-visit-btn:hover {
          background-color: #fff233 !important;
          top: 2px !important;
        }
        .hero-visit-btn:active {
          top: 8px !important;
          background-color: #e6d400 !important;
        }
        @media (min-width: 1025px) and (max-width: 1439px) {
          .hero-card-outer,
          .hero-card-inner,
          .hero-card-content {
            width: 100% !important;
            max-width: min(580px, 92vw) !important;
          }
          .hero-card-quote {
            width: 100% !important;
            max-width: 100% !important;
          }
        }

        @media (max-width: 1024px) {
          .hero-card-outer {
            width: 100% !important;
            max-width: min(580px, 90vw) !important;
            height: auto !important;
            padding: 8px !important;
            flex-shrink: 1 !important;
          }
          .hero-card-inner {
            width: 100% !important;
            height: auto !important;
            min-height: auto !important;
            padding: 16px !important;
            gap: 16px !important;
            border-radius: 12px !important;
          }
          .hero-card-content {
            width: 100% !important;
            height: auto !important;
            gap: 8px !important;
          }
          .hero-card-subtitle {
            font-size: 30px !important;
          }
          .hero-subtitle-br {
            display: block !important;
          }
          .hero-card-title {
            font-size: 38px !important;
          }
          .hero-card-title span {
            font-size: inherit !important;
            margin-top: 4px !important;
          }
          .hero-card-quote {
            font-size: 15px !important;
            line-height: 1.5 !important;
            width: auto !important;
            height: auto !important;
          }
        }

        @media (max-width: 480px) {
          .hero-card-outer {
            padding: 6px !important;
          }
          .hero-card-inner {
            padding: 26px 20px 40px !important;
            gap: 16px !important;
            min-height: auto !important;
            border-radius: 14px !important;
          }
          .hero-card-title {
            font-size: 26px !important;
          }
          .hero-card-title span {
            font-size: inherit !important;
            margin-top: 3px !important;
          }
          .hero-card-subtitle {
            font-size: 24px !important;
          }
        }
      `}</style>
      {/* OUTER CARD */}
      <div
        className="hero-card-outer"
        style={{
          width: "100%",
          maxWidth: "580px",
          height: "auto",
          minHeight: "282px",
          borderRadius: "20px",
          backgroundColor: "rgba(117, 61, 190, 0.6)",
          padding: "10px",
          boxSizing: "border-box",
          flexShrink: 0,
        }}
      >
        {/* INNER BORDER */}
        <div
          className="hero-card-inner"
          style={{
            width: "100%",
            maxWidth: "580px",
            height: "auto",
            minHeight: "262px",
            borderRadius: "20px",
            border: "1.5px dashed rgba(255, 255, 255, 0.4)",
            boxSizing: "border-box",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          {/* CONTENT AREA */}
          <div
            className="hero-card-content"
            style={{
              width: "100%",
              maxWidth: "688px",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: "12px",
            }}
          >
            {/* Main Heading — Company Name */}
            <h1
              className="hero-card-title"
              style={{
                fontFamily: "'Mochiy Pop P One', 'Mochiy Pop One', sans-serif",
                fontSize: "52px",
                fontWeight: "800",
                color: "#FFE600",
                margin: 0,
                lineHeight: 1.15,
              }}
            >
              Beyond The View
              <span style={{ display: "block", fontSize: "inherit", fontWeight: "inherit", color: "#ffffff", marginTop: "8px", letterSpacing: "0.5px" }}>
                Autism Services
              </span>
            </h1>

            {/* Tagline */}
            <p
              className="hero-card-subtitle"
              style={{
                fontFamily: "'Annie Use Your Telescope', cursive",
                fontSize: "42px",
                fontWeight: "400",
                color: "#ffffff",
                margin: "4px 0 0 0",
                lineHeight: 1.2,
              }}
            >
              Seeing Every Child <br className="hero-subtitle-br" /> Beyond Their Diagnosis
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
              onClick={() => setIsOpen(true)}
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
                Schedule a Tour
              </span>
            </button>
          </div>
        </div>
      </div>

      <ScheduleTourModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
