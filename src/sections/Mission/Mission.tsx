"use client";

import React from "react";
import Image from "next/image";

export const Mission: React.FC = () => {
  return (
    <section
      id="about"
      className="mission-section site-section-spacing"
      style={{
        width: "100%",
        minHeight: "552px",
        backgroundColor: "#ede5f8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap');

        .mission-section {
          width: 100%;
          max-width: none;
          margin: 0;
          background: linear-gradient(
            180deg,
            #f7f2fc 0%,
            #ede5f8 20%,
            #e3d6f4 80%,
            #ede5f8 100%
          ) !important;
        }

        .mission-wrapper {
          width: 100%;
          max-width: 1440px;
          min-height: 478px;
          height: auto;
          margin: 0 auto;
          padding: 0;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          gap: clamp(32px, 5vw, 80px);
        }

        .mission-left {
          flex: 1 1 518px;
          max-width: 518px;
          min-width: 0;
          width: 100%;
          height: 454px;
          position: relative;
          flex-shrink: 1;
        }

        .mission-image-container {
          position: absolute;
          top: 50px;
          left: 15%;
          width: 81%;
          height: 88%;
          border-radius: 16px;
          z-index: 1;
          background-color: #fff;
        }

        .mission-image-inner {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 16px;
          overflow: hidden;
          background-color: #fff;
        }

        .mission-image-photo {
          object-fit: cover;
          object-position: center center;
        }

        .mission-right {
          flex: 1 1 580px;
          max-width: 580px;
          min-width: 0;
          width: 100%;
          height: auto;
          min-height: 312px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
        }

        @media (min-width: 1025px) and (max-width: 1439px) {
          .mission-section {
            min-height: auto;
          }

          .mission-left {
            flex: 1 1 42%;
            max-width: 480px;
            height: auto;
            aspect-ratio: 1.14;
          }

          .mission-right {
            flex: 1 1 50%;
            max-width: none;
          }
        }

        @media (max-width: 1024px) {
          .mission-section {
            width: 100% !important;
            height: auto !important;
          }
          .mission-wrapper {
            width: 100% !important;
            height: auto !important;
            flex-direction: column !important;
            gap: 0 !important;
          }
          .mission-left {
            width: 100% !important;
            max-width: 340px !important;
            height: auto !important;
            aspect-ratio: unset !important;
            position: relative !important;
            margin: 0 auto !important;
            padding-top: 4px !important;
          }
          .mission-image-container {
            position: relative !important;
            width: 100% !important;
            height: auto !important;
            left: 0 !important;
            top: 0 !important;
            margin-top: 36px !important;
            aspect-ratio: 3 / 2 !important;
          }
          .mission-image-photo {
            object-fit: contain !important;
            object-position: center center !important;
          }
          .mission-badge {
            left: 4% !important;
            top: 0 !important;
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
            min-height: 0 !important;
            justify-content: flex-start !important;
            align-items: center !important;
            text-align: center !important;
            margin-top: 0 !important;
            padding-top: 0 !important;
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
      <div className="mission-wrapper">
        {/* LEFT — Image + 25+ badge */}
        <div className="mission-left">
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
              backgroundColor: "#F5E0C4",
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
          <div className="mission-image-container">
            <div className="mission-image-inner">
              <Image
                src="https://ik.imagekit.io/sonu2k1/TEst/Groups/0O3A2503.jpg"
                alt="Beyond The View team"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="mission-image-photo"
                priority
              />
            </div>
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
        <div className="mission-right">


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
              fontSize: "16px",
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
            Founded by two local BCBAs, we bring clinician-led expertise to every family
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
                Ages 2–7 Years Old
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
