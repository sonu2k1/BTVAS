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
          min-height: auto;
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
          min-height: 420px;
          height: clamp(380px, 38vw, 454px);
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
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: clamp(12px, 2vw, 16px);
        }

        .mission-heading {
          font-family: 'Mochiy Pop One', sans-serif;
          font-weight: 400;
          line-height: 1.2;
          font-size: clamp(26px, 3.2vw, 38px);
        }

        .mission-headings {
          width: 100%;
        }

        .mission-heading-first {
          color: #1a1a1a;
          margin: 0 0 4px 0;
        }

        .mission-heading-second {
          margin: 0;
        }

        .mission-description {
          font-family: 'Nunito', sans-serif;
          font-size: clamp(14px, 1.6vw, 16px);
          font-weight: 400;
          color: #555;
          line-height: 1.75;
          margin: 0;
        }

        .mission-tags {
          display: flex;
          align-items: center;
          gap: clamp(16px, 3vw, 40px);
          margin-top: 8px;
          flex-wrap: wrap;
        }

        .mission-tag-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .mission-tag-label {
          font-family: 'Nunito', sans-serif;
          font-size: clamp(12px, 1.4vw, 14px);
          font-weight: 700;
          color: #1a1a1a;
        }

        @media (min-width: 1440px) {
          .mission-left {
            height: 454px;
          }
        }

        @media (min-width: 1025px) and (max-width: 1439px) {
          .mission-left {
            flex: 1 1 42%;
            max-width: 480px;
            height: auto;
            min-height: 360px;
            aspect-ratio: 1.14;
          }

          .mission-right {
            flex: 1 1 50%;
            max-width: none;
          }

          .mission-image-container {
            top: clamp(36px, 4vw, 50px);
            left: 12%;
            width: 84%;
            height: 86%;
          }

          .mission-badge {
            left: 25px !important;
          }
        }

        @media (max-width: 1024px) {
          .mission-wrapper {
            flex-direction: column;
            gap: 20px;
            align-items: center;
          }

          .mission-left {
            flex: 0 0 auto;
            width: 100%;
            max-width: min(420px, 100%);
            height: auto !important;
            min-height: 0 !important;
            margin: 0 auto;
            padding-top: 0;
          }

          .mission-image-container {
            position: relative;
            width: 100%;
            left: 0;
            top: 0;
            margin-top: 36px;
            aspect-ratio: 4 / 3;
            height: auto;
          }

          .mission-image-photo {
            object-fit: cover;
            object-position: center center;
          }

          .mission-badge {
            left: -20px !important;
            top: -18px !important;
            bottom: auto !important;
          }
          .mission-badge-circle {
            width: clamp(72px, 18vw, 90px);
            height: clamp(72px, 18vw, 90px);
          }

          .mission-badge-number {
            font-size: clamp(22px, 5vw, 28px);
          }

          .mission-badge-pill {
            width: auto !important;
            height: clamp(36px, 9vw, 44px);
            margin-left: -20px !important;
            padding-left: 32px !important;
            padding-right: 16px !important;
            border-radius: 0 22px 22px 0;
          }

          .mission-badge-pill-text {
            font-size: clamp(9.5px, 2.4vw, 11.5px);
          }

          .mission-right {
            flex: 0 0 auto;
            width: 100%;
            max-width: 640px;
            align-items: center;
            text-align: center;
            margin-top: 0;
            padding-top: 0;
          }

          .mission-bg-circle {
            display: none;
          }

          .mission-tags {
            justify-content: center;
          }
        }

        @media (max-width: 767px) {
          .mission-wrapper {
            gap: 16px;
          }

          .mission-left {
            max-width: min(360px, 100%);
          }

          .mission-image-container {
            margin-top: 30px;
            aspect-ratio: 3 / 2;
          }

          .mission-badge {
            left: -15px !important;
          }

          .mission-description {
            max-width: 520px;
          }
        }

        @media (max-width: 480px) {
          .mission-wrapper {
            gap: 12px;
          }

          .mission-left {
            max-width: 100%;
          }

          .mission-image-container {
            margin-top: 24px;
            border-radius: 12px;
          }

          .mission-image-inner {
            border-radius: 12px;
          }

          .mission-badge-circle {
            width: 68px;
            height: 68px;
          }

          .mission-badge-number {
            font-size: 20px;
          }

          .mission-badge-pill {
            width: auto !important;
            height: 34px;
            margin-left: -16px !important;
            padding-left: 24px !important;
            padding-right: 12px !important;
          }

          .mission-badge {
            left: -10px !important;
          }

          .mission-badge-pill-text {
            font-size: 9px;
          }

          .mission-tags {
            flex-direction: column;
            gap: 12px;
            align-items: center;
          }

          .mission-tag-item {
            justify-content: center;
          }
        }

        @media (max-width: 360px) {
          .mission-heading {
            font-size: 22px;
          }

          .mission-description {
            font-size: 13px;
            line-height: 1.65;
          }

          .mission-tag-label {
            font-size: 11px;
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
              top: "0px", // Positioned to overlap the image's top-left corner (moved 10px higher)
              left: "15px",
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
                width: "auto",
                height: "46px",
                backgroundColor: "#fff",
                borderRadius: "0 23px 23px 0",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "-25px", // Tucked under the purple circle
                paddingLeft: "40px", // Push text away from circle overlap (25px overlap + 15px gap)
                paddingRight: "24px",
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
                sizes="(max-width: 480px) 100vw, (max-width: 1024px) 90vw, 420px"
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
          <div className="mission-headings">
            <h2 className="mission-heading mission-heading-first">
              Nurturing Growth
            </h2>
            <h2 className="mission-heading mission-heading-second">
              <span style={{ color: "#753DBE" }}>Beyond </span>
              <span style={{ color: "#FF4880" }}>The Horizon</span>
            </h2>
          </div>

          {/* Description */}
          <p className="mission-description">
            Our mission at Beyond The View Autism Services, is to meet each child&apos;s
            individual needs, create limitless opportunities for learning, and support
            each child on their journey to reach their full potential.
            <br />
            Founded by two local BCBAs, we bring clinician-led expertise to every family
            we serve.
          </p>

          {/* Tags */}
          <div className="mission-tags">
            <div className="mission-tag-item">
              <Image src="/images/Baby.svg" alt="Baby Icon" width={24} height={24} />
              <span className="mission-tag-label">Ages 2–7 Years Old</span>
            </div>
            <div className="mission-tag-item">
              <Image src="/images/Loc.svg" alt="Location Icon" width={24} height={24} />
              <span className="mission-tag-label">Clinic & Community (Day Care)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
