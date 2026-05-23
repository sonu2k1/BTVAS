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
      {/* ── DESKTOP VIEW: 100% EXACT ORIGINAL LAYOUT & PIXELS (Visible on lg and larger) ── */}
      <section
        className="hidden lg:flex relative overflow-hidden flex-col"
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

          {/* Right: Get Started button — 3D drop shadow style (Pure CSS Hover) */}
          <div style={{ position: "relative", width: "216px", height: "50px", flexShrink: 0 }}>
            {/* Shadow layer */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "216px",
                height: "42px",
                background: "#c93360",
                borderRadius: "21px",
              }}
            />
            {/* Button layer */}
            <button
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "216px",
                height: "42px",
                background: "#FF4880",
                borderRadius: "21px",
                border: "none",
                color: "#ffffff",
                fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: "0.01em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="transition-all duration-100 ease-in-out hover:top-[2px] hover:bg-[#ff5f95] active:top-[6px] active:bg-[#e03570]"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* ── SEPARATOR ── */}
        <div style={{ height: "60px", flexShrink: 0 }} />

        {/* ── BOTTOM PART — 1380×223.36 ── */}
        <div
          className="relative flex flex-col"
          style={{ width: "1380px", height: "223.36px", flexShrink: 0 }}
        >
          {/* Step titles row */}
          <div className="flex" style={{ width: "1380px" }}>
            {steps.map((step) => (
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

      {/* ── MOBILE / TABLET VIEW: DYNAMIC FLUID & RESPONSIVE (Visible below lg) ── */}
      <section className="flex lg:hidden flex-col w-full px-6 py-12 md:py-16 gap-8">
        {/* Top Part */}
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col justify-center">
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
                fontSize: "32px",
                fontWeight: 800,
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              <span style={{ color: "#ffffff" }}>Getting </span>
              <span style={{ color: "#FFD740" }}>Start</span>
            </h2>
          </div>

          <div className="flex items-center">
            <p
              style={{
                fontFamily: "'Georgia', serif",
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
          <div style={{ position: "relative", width: "216px", height: "50px", flexShrink: 0 }}>
            {/* Shadow layer */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "216px",
                height: "42px",
                background: "#c93360",
                borderRadius: "21px",
              }}
            />
            {/* Button layer */}
            <button
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "216px",
                height: "42px",
                background: "#FF4880",
                borderRadius: "21px",
                border: "none",
                color: "#ffffff",
                fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: "0.01em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="transition-all duration-100 ease-in-out hover:top-[2px] hover:bg-[#ff5f95] active:top-[6px] active:bg-[#e03570]"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Separator */}
        <div className="h-4" />

        {/* Mobile Vertical Timeline */}
        <div className="flex flex-col relative w-full gap-8 pl-8">
          {/* Vertical connecting line */}
          <div
            className="absolute left-[13px] top-4 bottom-4 w-0.5"
            style={{ backgroundColor: "#FF4880" }}
          />

          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col gap-1 text-left">
              {/* Number bubble */}
              <div
                className="absolute -left-8 flex items-center justify-center"
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
                  zIndex: 10,
                }}
              >
                {step.number}
              </div>

              <h4
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                {step.title}
              </h4>
              <p
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.85)",
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
    </div>
  );
};