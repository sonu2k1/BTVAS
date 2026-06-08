"use client";

import React, { useState } from "react";
import { steps } from "@/constants";


export const GettingStarted: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="getting-started" className="scroll-mt-6" style={{ width: "100%", backgroundColor: "#753DBE" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Prompt:wght@400;500;600;700;800&display=swap');

        #getting-started,
        #getting-started .getting-started-section {
          background-color: #753DBE !important;
        }

        .get-started-btn-wrapper {
          position: relative;
          width: 216px;
          height: 50px;
          flex-shrink: 0;
        }
        .get-started-btn-shadow {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 216px;
          height: 42px;
          background: #c93360;
          border-radius: 21px;
        }
        .get-started-btn {
          position: absolute;
          top: 0;
          left: 0;
          width: 216px;
          height: 42px;
          background: #FF4880;
          border-radius: 21px;
          border: none;
          color: #ffffff;
          font-family: 'Comic Sans MS', 'Chalkboard SE', cursive;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 0.01em;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: top 0.1s ease, background-color 0.2s ease;
          text-decoration: none;
        }
        .get-started-btn:hover {
          background-color: #ff5f95;
          top: 2px;
        }
        .get-started-btn:active {
          top: 8px;
          background-color: #e03570;
        }
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @media (min-width: 1024px) and (max-width: 1279px) {
          .getting-started-top {
            flex-direction: column !important;
            align-items: flex-start !important;
            height: auto !important;
            gap: 20px !important;
            margin-top: 32px !important;
          }
          .getting-started-steps-wrap {
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 8px;
          }
        }
      `}</style>
      {/* ── DESKTOP VIEW: 100% EXACT ORIGINAL LAYOUT & PIXELS (Visible on lg and larger) ── */}
      <section
        className="getting-started-section hidden lg:flex relative overflow-hidden flex-col site-section-root"
        style={{
          width: "100%",
          maxWidth: "1440px",
          height: "auto",
          minHeight: "455.36px",
          backgroundColor: "#753DBE",
          paddingLeft: "clamp(24px, 4vw, 50px)",
          paddingRight: "clamp(24px, 4vw, 50px)",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {/* ── TOP PART ── */}
        <div
          className="flex items-center justify-between flex-shrink-0 getting-started-top"
          style={{ marginTop: "50px", height: "72px" }}
        >
          {/* Left: heading block — 373×72 */}
          <div
            className="flex flex-col justify-center"
            style={{ width: "373px", height: "72px" }}
          >
            <p
              style={{
                fontFamily: "'Prompt', sans-serif",
                fontSize: "20px",
                color: "rgba(255, 255, 255, 0.6)",
                width: "326px",
                height: "26px",
                marginBottom: "4px",
                letterSpacing: "0.02em",
                margin: 0,
              }}
            >
              {"Steps Toward Your Child's Care"}
            </p>
            <h2
              style={{
                fontFamily: "'Mochiy Pop One', sans-serif",
                fontSize: "36px",
                fontWeight: 400,
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              <span style={{ color: "#ffffff" }}>Getting </span>
              <span style={{ color: "#FFD740" }}>Start</span>
            </h2>
          </div>

          {/* Center: goal text — 495×44 */}
          <div
            className="flex items-center"
            style={{ width: "495px", height: "44px" }}
          >
            <p
              style={{
                fontFamily: "'Prompt', sans-serif",
                fontSize: "17px",
                fontWeight: 700,
                color: "#f3e8e8ff",
                lineHeight: 1.3,
                margin: 0,
              }}
            >
              Our goal is to make the process simple so your child can begin services as quickly as possible
            </p>
          </div>

          {/* Right: Get Started button — 3D drop shadow style (Pure CSS Hover) */}
          <div className="get-started-btn-wrapper">
            {/* Shadow layer */}
            <div className="get-started-btn-shadow" />
            {/* Button layer */}
            <button className="get-started-btn" onClick={() => setIsOpen(true)}>
              Get Started
            </button>
          </div>
        </div>

        {/* ── SEPARATOR ── */}
        <div style={{ height: "60px", flexShrink: 0 }} />

        {/* ── BOTTOM PART — 1380×223.36 ── */}
        <div className="getting-started-steps-wrap w-full">
        <div
          className="relative flex flex-col"
          style={{ width: "100%", maxWidth: "1380px", minWidth: "900px", minHeight: "223.36px", height: "auto", flexShrink: 0 }}
        >
          {/* Step titles row */}
          <div className="flex w-full" style={{ maxWidth: "1380px" }}>
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center"
                style={{ width: `${1380 / 7}px`, flexShrink: 0 }}
              >
                <p
                  style={{
                    fontFamily: "'Prompt', sans-serif",
                    fontSize: "16px",
                    fontWeight: 800,
                    color: "#ffffff",
                    lineHeight: 1.3,
                    minHeight: "40px",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    margin: 0,
                    paddingBottom: "10px",
                    textAlign: "center",
                  }}
                >
                  {step.title}
                </p>
              </div>
            ))}
          </div>

          {/* Timeline row */}
          <div className="relative flex items-center" style={{ width: "1380px", height: "32px", flexShrink: 0 }}>
            <div
              className="absolute"
              style={{
                top: "50%",
                left: `${(1380 / 7) * 0.5}px`,
                right: `${(1380 / 7) * 0.5}px`,
                height: "2px",
                background: "#FF4880",
                transform: "translateY(-50%)",
              }}
            />
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-center justify-center flex-shrink-0 relative z-10"
                style={{ width: `${1380 / 7}px` }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "#FF4880",
                    color: "#ffffff",
                    fontFamily: "'Prompt', sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    boxShadow: "0 0 0 3px rgba(255,72,128,0.3)",
                    flexShrink: 0,
                  }}
                >
                  {step.number}
                </div>
              </div>
            ))}
          </div>

          {/* Descriptions row */}
          <div className="flex" style={{ width: "1380px", marginTop: "14px" }}>
            {steps.map((step) => (
              <div
                key={step.number}
                className="text-center"
                style={{
                  width: `${1380 / 7}px`,
                  flexShrink: 0,
                  paddingLeft: "8px",
                  paddingRight: "8px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Prompt', sans-serif",
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.5,
                    margin: 0,
                    textAlign: "center",
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* ── MOBILE / TABLET VIEW: DYNAMIC FLUID & RESPONSIVE (Visible below lg) ── */}
      <section
        className="getting-started-section flex lg:hidden flex-col w-full"
        style={{
          padding: "48px 20px",
          boxSizing: "border-box",
          gap: "32px",
          backgroundColor: "#753DBE",
        }}
      >
        {/* Top Part */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                fontFamily: "'Prompt', sans-serif",
                fontSize: "14px",
                color: "rgba(255, 255, 255, 0.6)",
                width: "306px",
                height: "26px",
                marginBottom: "4px",
                letterSpacing: "0.02em",
                margin: 0,
              }}
            >
              {"Steps Toward Your Child's Care"}
            </p>
            <h2
              style={{
                fontFamily: "'Mochiy Pop One', sans-serif",
                fontSize: "32px",
                fontWeight: 400,
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              <span style={{ color: "#ffffff" }}>Getting </span>
              <span style={{ color: "#FFD740" }}>Start</span>
            </h2>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <p
              style={{
                fontFamily: "'Prompt', sans-serif",
                fontSize: "16px",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              Our goal is to make the process simple so your child can begin services as quickly as possible
            </p>
          </div>

          {/* Button wrapper */}
          <div className="get-started-btn-wrapper">
            {/* Shadow layer */}
            <div className="get-started-btn-shadow" />
            {/* Button layer */}
            <button className="get-started-btn" onClick={() => setIsOpen(true)}>
              Get Started
            </button>
          </div>
        </div>

        {/* Separator */}
        <div style={{ height: "16px" }} />

        {/* Mobile Vertical Timeline */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            paddingLeft: "40px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {steps.map((step, idx) => (
            <div
              key={step.number}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                textAlign: "left",
              }}
            >
              {idx < steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    left: "-21px",
                    top: "14px",
                    bottom: "-46px",
                    width: "2px",
                    backgroundColor: "#FF4880",
                    zIndex: 0,
                  }}
                />
              )}
              {/* Number bubble */}
              <div
                style={{
                  position: "absolute",
                  left: "-34px",
                  top: "0px",
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "#FF4880",
                  color: "#ffffff",
                  fontFamily: "'Prompt', sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  boxShadow: "0 0 0 3px rgba(255,72,128,0.3)",
                  zIndex: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {step.number}
              </div>

              <h4
                style={{
                  fontFamily: "'Prompt', sans-serif",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#ffffff",
                  margin: 0,
                  lineHeight: "28px",
                }}
              >
                {step.title}
              </h4>
              <p
                style={{
                  fontFamily: "'Prompt', sans-serif",
                  fontSize: "14.5px",
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── RESPONSIVE GOOGLE FORM MODAL ── */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(1, 12, 111, 0.45)",
            backdropFilter: "blur(8px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "680px",
              height: "90vh",
              maxHeight: "800px",
              backgroundColor: "#ffffff",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 24px 64px rgba(1, 12, 111, 0.25)",
              display: "flex",
              flexDirection: "column",
              border: "2px solid rgba(117, 61, 190, 0.15)",
              animation: "modalFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 24px",
                borderBottom: "1px solid #E5E7EB",
                backgroundColor: "#F9FAFB",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "20px",
                    fontWeight: 900,
                    color: "#010C6F",
                    margin: 0,
                  }}
                >
                  Intake & Registration Form
                </h3>
                <span style={{ fontSize: "12px", color: "#666", fontWeight: 500 }}>
                  Please fill out the intake form to get started.
                </span>
              </div>
              
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#9CA3AF",
                  padding: "6px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s ease",
                  marginLeft: "auto",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#F3F4F6";
                  e.currentTarget.style.color = "#FF4880";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#9CA3AF";
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Iframe Area */}
            <div style={{ flex: 1, position: "relative", width: "100%", height: "100%", backgroundColor: "#ffffff" }}>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfP-G19gE8Z2-Z0N67q1kRNDh6g05g_ZqFv6L0aHn4-vNszhA/viewform?embedded=true"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                style={{
                  border: "none",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};