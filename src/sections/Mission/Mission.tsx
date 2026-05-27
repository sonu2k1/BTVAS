"use client";

import React from "react";
import Image from "next/image";

export const Mission: React.FC = () => {
  return (
    <section
      id="about"
      className="mission-section"
      style={{
        width: "1440px",
        height: "552px",
        backgroundColor: "#faf6f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        margin: "0 auto",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap');

        @media (max-width: 1024px) {
          .mission-section {
            width: 100% !important;
            height: auto !important;
            padding: 40px 16px !important;
          }
          .mission-wrapper {
            width: 100% !important;
            height: auto !important;
            flex-direction: column !important;
            gap: 32px !important;
          }
          .mission-left {
            width: 100% !important;
            max-width: 360px !important;
            height: auto !important;
            aspect-ratio: 1.14 !important;
            position: relative !important;
            margin: 0 auto !important;
          }
          .mission-image-container {
            width: 81% !important;
            height: 88% !important;
            left: 15% !important;
            top: 11% !important;
            position: absolute !important;
          }
          .mission-badge {
            left: 5% !important;
            top: 2% !important;
            position: absolute !important;
          }
          .mission-badge-circle {
            width: 80px !important;
            height: 80px !important;
          }
          .mission-badge-number {
            font-size: 24px !important;
          }
          .mission-badge-pill {
            width: 120px !important;
            height: 38px !important;
            margin-left: -15px !important;
            padding-left: 12px !important;
            border-radius: 0 19px 19px 0 !important;
          }
          .mission-badge-pill-text {
            font-size: 10px !important;
          }
          .mission-heading {
            font-size: 32px !important;
          }
          .mission-right {
            width: 100% !important;
            height: auto !important;
            align-items: center !important;
            text-align: center !important;
          }
          .mission-bg-circle {
            display: none !important;
          }
          .mission-tags {
            flex-direction: row !important;
            flex-wrap: wrap !important;
            gap: 20px !important;
            justify-content: center !important;
            align-items: center !important;
          }
        }
      `}</style>

      {/* INNER WRAPPER */}
      <div
        className="mission-wrapper"
        style={{
          width: "1280px",
          height: "478px",
          display: "flex",
          alignItems: "center",
          gap: "80px",
        }}
      >
        {/* LEFT — Image + 25+ badge */}
        <div
          className="mission-left"
          style={{
            width: "518px",
            height: "454px",
            position: "relative",
            flexShrink: 0,
          }}
        >
          {/* Cream circle background */}
          <div
            className="mission-bg-circle"
            style={{
              position: "absolute",
              top: "70px",
              left: "-10px",
              width: "200px",
              height: "340px",
              borderRadius: "170px 0 0 170px",
              backgroundColor: "#F3E8D6", // Matches the screenshot cream color
              zIndex: 0,
            }}
          />

          {/* 25+ badge */}
          <div
            className="mission-badge"
            style={{
              position: "absolute",
              top: "10px", // Positioned to overlap the image's top-left corner
              left: "40px",
              zIndex: 3,
              display: "flex",
              alignItems: "center",
              marginBottom: "5px", // User's requested bottom margin
            }}
          >
            {/* Purple circle */}
            <div
              className="mission-badge-circle"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                backgroundColor: "#9B72CF", // Matches screenshot purple
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                padding: "6px",
              }}
            >
              {/* Inner dashed border */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  border: "2px dashed rgba(255,255,255,0.7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  className="mission-badge-number"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "30px",
                    fontWeight: "900",
                    color: "#fff",
                  }}
                >
                  25+
                </span>
              </div>
            </div>

            {/* White pill text container */}
            <div
              className="mission-badge-pill"
              style={{
                width: "146px", // User requested width
                height: "46px", // User requested height
                backgroundColor: "#fff",
                borderRadius: "0 23px 23px 0",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "-20px", // Tucked under the purple circle
                paddingLeft: "15px", // Push text away from circle
                boxShadow: "4px 4px 15px rgba(0,0,0,0.06)",
                zIndex: 1,
              }}
            >
              <span
                className="mission-badge-pill-text"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "12.5px",
                  fontWeight: "800",
                  color: "#333",
                  whiteSpace: "nowrap",
                }}
              >
                Years Of Experience
              </span>
            </div>
          </div>

          {/* Main image */}
          <div
            className="mission-image-container"
            style={{
              position: "absolute",
              top: "50px",
              left: "80px",
              width: "420px",
              height: "400px",
              borderRadius: "16px",
              zIndex: 1,
              backgroundColor: "#fff",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/0O3A2500.jpg"
                alt="Beyond The View team"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover"
                priority
              />
            </div>
            {/* Dashed Border Overlay matching screenshot */}
            <div
              style={{
                position: "absolute",
                top: "8px",
                left: "8px",
                width: "calc(100% - 16px)",
                height: "calc(100% - 16px)",
                borderRadius: "12px",
                border: "2px dashed #D2B48C",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />
          </div>
        </div>

        {/* RIGHT — Description */}
        <div
          className="mission-right"
          style={{
            width: "580px",
            height: "312px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "16px",
            flexShrink: 0,
          }}
        >


          {/* Heading */}
          <div>
            <h2
              className="mission-heading"
              style={{
                fontFamily: "'Mochiy Pop One', sans-serif",
                fontSize: "38px",
                fontWeight: "400",
                color: "#1a1a1a",
                margin: "0 0 4px 0",
                lineHeight: 1.2,
              }}
            >
              Nurturing Growth
            </h2>
            <h2
              className="mission-heading"
              style={{
                fontFamily: "'Mochiy Pop One', sans-serif",
                fontSize: "38px",
                fontWeight: "400",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              <span style={{ color: "#753DBE" }}>Beyond </span>
              <span style={{ color: "#FF4880" }}>The Horizon</span>
            </h2>
          </div>

          {/* Description */}
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "15px",
              fontWeight: "400",
              color: "#555",
              lineHeight: "1.75",
              margin: 0,
            }}
          >
            Our mission at Beyond The View Autism Services, is to meet each {"child's"}
            individual needs, create limitless opportunities for learning, and support
            each child on their journey to reach their full potential.
            <br />
            Founded by two local BCAs, we bring clinician-led expertise to every family
            we serve
          </p>

          {/* Tags */}
          <div
            className="mission-tags"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              marginTop: "8px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Image src="/images/Baby.svg" alt="Baby Icon" width={24} height={24} />
              <span
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#1a1a1a",
                }}
              >
                Ages 2–6 Years
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Image src="/images/Loc.svg" alt="Location Icon" width={24} height={24} />
              <span
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#1a1a1a",
                }}
              >
                Clinic & Community (Day Care)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
