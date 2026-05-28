"use client";

import React, { useState } from "react";
import { ScheduleTourModal } from "../../components/ScheduleTourModal";

export const HeroCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&family=Baloo+2:wght@400;500;600;700;800&family=Prompt:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap');

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
            max-width: min(756px, 92vw) !important;
          }
          .hero-card-quote {
            width: 100% !important;
            max-width: 100% !important;
          }
        }

        @media (max-width: 1024px) {
          .hero-card-outer {
            width: 100% !important;
            max-width: 90vw !important;
            height: auto !important;
            padding: 8px !important;
            flex-shrink: 1 !important;
          }
          .hero-card-inner {
            width: 100% !important;
            height: auto !important;
            padding: 16px !important;
            gap: 16px !important;
          }
          .hero-card-content {
            width: 100% !important;
            height: auto !important;
            gap: 8px !important;
          }
          .hero-card-subtitle {
            font-size: 28px !important;
          }
          .hero-card-title {
            font-size: 40px !important;
          }
          .hero-card-quote {
            font-size: 15px !important;
            line-height: 1.5 !important;
            width: auto !important;
            height: auto !important;
          }
        }
      `}</style>
      {/* OUTER CARD */}
      <div
        className="hero-card-outer"
        style={{
          width: "100%",
          maxWidth: "756px",
          height: "auto",
          minHeight: "382px",
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
            maxWidth: "736px",
            height: "auto",
            minHeight: "362px",
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
            {/* Subtitle */}
            <p
              className="hero-card-subtitle"
              style={{
                fontFamily: "'Annie Use Your Telescope', cursive",
                fontSize: "45px",
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
              className="hero-card-title"
              style={{
                fontFamily: "'Baloo 2', sans-serif",
                fontSize: "64px",
                fontWeight: "800",
                color: "#FFE600",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Beyond Their Diagnosis
            </h1>

            {/* Quote */}
            <p
              className="hero-card-quote"
              style={{
                fontFamily: "'Prompt', sans-serif",
                fontSize: "18px",
                fontWeight: "500",
                fontStyle: "italic",
                color: "#ffffff",
                lineHeight: "1.4",
                margin: 0,
                marginTop: "4px",
                width: "100%",
                maxWidth: "602px",
                height: "auto",
                minHeight: "112px",
              }}
            >
              &ldquo;Every child deserves a champion-an adult who will never give up on
              them, who understands the power of connection and insists that they
              become the best that they can possibly be&rdquo; -Rita Pierson
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
