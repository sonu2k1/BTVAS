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
      className="w-full max-w-[1440px] mx-auto py-10 md:py-16 px-4 sm:px-8 md:px-16"
      style={{
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      {/* INNER WRAPPER */}
      <div
        className="w-full max-w-[1280px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16"
      >
        {/* LEFT SECTION */}
        <div
          className="w-full lg:w-[778px] flex flex-col justify-between flex-shrink-0 gap-3"
        >
          {/* Heading */}
          <h2
            className="text-[28px] sm:text-[32px] md:text-[36px]"
            style={{
              fontFamily: "'Nunito', sans-serif",
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
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-x-10 sm:gap-y-3"
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
          className="w-full lg:w-[343px]"
          style={{
            borderRadius: "16px",
            backgroundColor: "#010C6F",
            flexShrink: 0,
            padding: "28px 32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
            gap: "16px",
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
