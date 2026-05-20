"use client";

import React from "react";

const steps = [
  {
    number: 1,
    title: "Intake Form",
    description:
      "Complete our intake form so we can learn more about your child & your family's needs",
  },
  {
    number: 2,
    title: "Submit Required Document",
    description:
      "Provide your child's psychological evaluation, insurance card, & any supporting medical documentation",
  },
  {
    number: 3,
    title: "Insurance Verification",
    description:
      "Our team verifies your insurance benefits & confirm ABA coverage",
  },
  {
    number: 4,
    title: "Autism Behavior Screening Survey",
    description:
      "Autism screening to assess your child's support needs.",
  },
  {
    number: 5,
    title: "Initial Assessment",
    description:
      "A Board Certified Behaviour Analyst (BCBA) conducts comprehensive assessment with your child",
  },
  {
    number: 6,
    title: "Treatment Plan",
    description:
      "An Individualized treatment plan is created based on the assessment & submitted for insurance approval",
  },
  {
    number: 7,
    title: "Begin Therapy",
    description:
      "Once approved services are scheduled & your child begins ABA therapy",
  },
];

export const GettingStarted: React.FC = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "#753DBE" }}>
    <section
      className="relative overflow-hidden flex flex-col"
      style={{
        maxWidth: "1440px",
        height: "455.36px",
        backgroundColor: "#753DBE",
        paddingLeft: "50px",
        paddingRight: "50px",
        margin: "0 auto",
      }}
    >
      {/* ── TOP PART ── */}
      <div
        className="flex items-center justify-between flex-shrink-0"
        style={{ marginTop: "50px", height: "72px" }}
      >
        {/* Left: heading block — 373×72 */}
        <div
          className="flex flex-col justify-center"
          style={{ width: "373px", height: "72px" }}
        >
          <p
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "14px",
              color: "rgba(255,255,255,0.75)",
              marginBottom: "4px",
              letterSpacing: "0.02em",
            }}
          >
            Steps Toward Your Child's Care
          </p>
          <h2
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "36px",
              fontWeight: 800,
              lineHeight: 1,
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
              fontFamily: "'Georgia', serif",
              fontSize: "17px",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            Our goal is to make the process simple so your child can begin services as quickly as possible
          </p>
        </div>

        {/* Right: Get Started button — 200×41 */}
        <button
          style={{
            width: "200px",
            height: "41px",
            background: "#FF4880",
            borderRadius: "999px",
            border: "none",
            color: "#ffffff",
            fontFamily: "'Georgia', serif",
            fontSize: "16px",
            fontWeight: 700,
            cursor: "pointer",
            flexShrink: 0,
            letterSpacing: "0.01em",
          }}
        >
          Get Started
        </button>
      </div>

      {/* ── SEPARATOR: 60px gap between top and bottom ── */}
      <div style={{ height: "60px", flexShrink: 0 }} />

      {/* ── BOTTOM PART — 1380×223.36 ── */}
      <div
        className="relative flex flex-col"
        style={{ width: "1380px", height: "223.36px", flexShrink: 0 }}
      >
        {/* Step titles row */}
        <div className="flex" style={{ width: "1380px" }}>
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center"
              style={{ width: `${1380 / 7}px`, flexShrink: 0 }}
            >
              <p
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "13.5px",
                  fontWeight: 700,
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

        {/* Timeline row: line + numbered circles */}
        <div className="relative flex items-center" style={{ width: "1380px", height: "32px", flexShrink: 0 }}>
          {/* Horizontal red line */}
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
          {/* Numbered circles */}
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex items-center justify-center flex-shrink-0 relative z-10"
              style={{
                width: `${1380 / 7}px`,
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "#FF4880",
                  color: "#ffffff",
                  fontFamily: "'Georgia', serif",
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
                  fontFamily: "'Georgia', serif",
                  fontSize: "12.5px",
                  color: "rgba(255,255,255,0.85)",
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
    </section>
    </div>
  );
};
