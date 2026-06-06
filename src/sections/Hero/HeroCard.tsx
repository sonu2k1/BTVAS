"use client";

import React, { useState } from "react";
import { ScheduleTourModal } from "../../components/ScheduleTourModal";

export const HeroCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&family=Baloo+2:wght@400;500;600;700;800&family=Mochiy+Pop+One&family=Mochiy+Pop+P+One&family=Prompt:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap');

        @keyframes heroCardFadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroCardFloat {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes ambientGlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes revealItem {
          from {
            opacity: 0;
            transform: translateY(15px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .hero-card-outer {
          position: relative;
          animation: heroCardFadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, background-color 0.3s ease !important;
        }

        .hero-card-outer::before {
          content: '';
          position: absolute;
          inset: -5px;
          background: linear-gradient(135deg, #753DBE, #FF4880, #FFE600, #753DBE);
          background-size: 300% 300%;
          border-radius: inherit;
          z-index: -1;
          filter: blur(20px);
          opacity: 0.45;
          animation: ambientGlow 8s ease infinite;
          transition: opacity 0.4s ease, filter 0.4s ease;
        }

        .hero-card-inner {
          animation: heroCardFloat 6s ease-in-out infinite;
        }

        .hero-card-title {
          opacity: 0;
          animation: revealItem 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s;
        }

        .hero-card-subtitle {
          opacity: 0;
          animation: revealItem 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.4s;
        }

        .hero-btn-pop {
          opacity: 0;
          animation: revealItem 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.6s;
        }

        @media (min-width: 768px) {
          .hero-card-outer:hover {
            transform: translateY(-5px) scale(1.015) !important;
            box-shadow: 0 25px 50px rgba(117, 61, 190, 0.4) !important;
            background-color: rgba(117, 61, 190, 0.72) !important;
          }
          .hero-card-outer:hover::before {
            opacity: 0.75;
            filter: blur(25px);
          }
        }

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
        @media (min-width: 768px) and (max-width: 1439px) {
          .hero-card-outer,
          .hero-card-inner,
          .hero-card-content {
            width: 100% !important;
            max-width: min(520px, 92vw) !important;
          }
          .hero-card-quote {
            width: 100% !important;
            max-width: 100% !important;
          }
        }

        @media (max-width: 767px) {
          .hero-card-outer {
            width: 100% !important;
            max-width: min(340px, 88vw) !important;
            height: auto !important;
            min-height: auto !important;
            padding: 8px !important;
            flex-shrink: 1 !important;
            border-radius: 24px !important;
          }
          .hero-card-inner {
            width: 100% !important;
            height: auto !important;
            min-height: auto !important;
            padding: 20px 16px 24px 16px !important;
            gap: 12px !important;
            border-radius: 16px !important;
          }
          .hero-card-content {
            width: 100% !important;
            height: auto !important;
            gap: 8px !important;
          }
          .hero-card-subtitle {
            font-size: 20px !important;
          }
          .hero-subtitle-br {
            display: block !important;
          }
          .hero-card-title {
            font-size: 24px !important;
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
            max-width: min(320px, 86vw) !important;
            min-height: auto !important;
            border-radius: 22px !important;
          }
          .hero-card-inner {
            padding: 20px 16px 24px 16px !important;
            gap: 12px !important;
            min-height: auto !important;
            border-radius: 16px !important;
          }
          .hero-card-title {
            font-size: 22px !important;
          }
          .hero-card-title span {
            font-size: inherit !important;
            margin-top: 3px !important;
          }
          .hero-card-subtitle {
            font-size: 18px !important;
          }
        }
      `}</style>
      {/* OUTER CARD */}
      <div
        className="hero-card-outer"
        style={{
          width: "100%",
          maxWidth: "520px",
          height: "auto",
          minHeight: "250px",
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
            maxWidth: "520px",
            height: "auto",
            minHeight: "230px",
            borderRadius: "20px",
            border: "1.5px dashed rgba(255, 255, 255, 0.4)",
            boxSizing: "border-box",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "center",
            gap: "16px",
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
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "12px",
            }}
          >
            {/* Main Heading — Company Name */}
            <h1
              className="hero-card-title"
              style={{
                fontFamily: "'Mochiy Pop P One', 'Mochiy Pop One', sans-serif",
                fontSize: "46px",
                fontWeight: "800",
                color: "#FFE600",
                margin: 0,
                lineHeight: 1.15,
                textAlign: "center",
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
                fontSize: "36px",
                fontWeight: "400",
                color: "#ffffff",
                margin: "4px 0 0 0",
                lineHeight: 1.2,
                textAlign: "center",
              }}
            >
              Seeing Every Child <br className="hero-subtitle-br" /> Beyond Their Diagnosis
            </p>
          </div>

          {/* BUTTON — 3D drop shadow style */}
          <div
            className="hero-btn-pop"
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
