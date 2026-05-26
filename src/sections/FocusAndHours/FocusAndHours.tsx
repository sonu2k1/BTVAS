"use client";

import React from "react";

const features = [
  "Individualised Plans",
  "Early Intervention Focus",
  "Individualised Plans",
  "Caregivers & Providers",
];

export const FocusAndHours: React.FC = () => {
  return (
    <section
      className="focus-hours-section"
      style={{
        width: "1440px",
        height: "400px",
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        margin: "0 auto",
      }}
    >
      <style>{`
        @media (max-width: 1024px) {
          .focus-hours-section {
            width: 100% !important;
            height: auto !important;
            padding: 40px 16px !important;
          }
          .focus-hours-wrapper {
            width: 100% !important;
            height: auto !important;
            flex-direction: column !important;
            gap: 40px !important;
          }
          .focus-left {
            width: 100% !important;
            height: auto !important;
            align-items: center !important;
            text-align: center !important;
          }
          .focus-features-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
            width: 100% !important;
            justify-items: center !important;
          }
          .hours-right {
            width: 100% !important;
            max-width: 343px !important;
            height: 235px !important;
          }
        }
      `}</style>

      {/* INNER WRAPPER */}
      <div
        className="focus-hours-wrapper"
        style={{
          width: "1280px",
          height: "235px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "159px",
        }}
      >
        {/* LEFT SECTION */}
        <div
          className="focus-left"
          style={{
            width: "778px",
            height: "235px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          {/* Heading */}
          <h2
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "36px",
              fontWeight: "900",
              color: "#1a1a1a",
              margin: "0 0 12px 0",
              lineHeight: 1.1,
            }}
          >
            Our <span style={{ color: "#FF4880" }}>Focus</span>
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "14.5px",
              fontWeight: "400",
              color: "#555",
              lineHeight: "1.75",
              margin: "0 0 20px 0",
              maxWidth: "680px",
            }}
          >
            Our comprehensive early intervention program provides specialized ABA therapy for children
            ages 2-6. We focus on functional communication, social integration, and developmental
            milestones through evidence-based, compassionate care.
          </p>

          {/* Features grid */}
          <div
            className="focus-features-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px 40px",
            }}
          >
            {features.map((feature, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {/* Pink check circle */}
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: "#FF4880",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7L5.5 10L11.5 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "14px",
                    fontWeight: "800",
                    color: "#1a1a1a",
                  }}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Operation Hours */}
        <div
          className="hours-right"
          style={{
            width: "343px",
            height: "235px",
            borderRadius: "16px",
            backgroundColor: "#010C6F",
            flexShrink: 0,
            padding: "28px 32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          <h3
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "18px",
              fontWeight: "900",
              color: "#ffffff",
              margin: "0 0 20px 0",
            }}
          >
            Operation Hours
          </h3>

          {/* Mon - Fri */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "16px",
              borderBottom: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <span
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "14px",
                fontWeight: "600",
                color: "#ffffff",
              }}
            >
              Mon - Fri
            </span>
            <span
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "14px",
                fontWeight: "700",
                color: "#ffffff",
              }}
            >
              9:00am - 5:00pm
            </span>
          </div>

          {/* Clinic Tours */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "16px",
            }}
          >
            <span
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "14px",
                fontWeight: "600",
                color: "#ffffff",
              }}
            >
              Clinic Tours
            </span>
            <span
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "14px",
                fontWeight: "700",
                color: "#ffffff",
              }}
            >
              10:00am - 3:00pm
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
