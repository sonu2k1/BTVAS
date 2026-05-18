"use client";

import React from "react";
import Image from "next/image";

export const Mission: React.FC = () => {
  return (
    <section
      id="about"
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
      {/* INNER WRAPPER */}
      <div
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
          style={{
            width: "518px",
            height: "454px",
            position: "relative",
            flexShrink: 0,
          }}
        >
          {/* Cream circle background */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              backgroundColor: "#f0e6d3",
              zIndex: 0,
            }}
          />

          {/* 25+ badge */}
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "30px",
              zIndex: 3,
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                backgroundColor: "#753DBE",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "22px",
                  fontWeight: "900",
                  color: "#fff",
                }}
              >
                25+
              </span>
            </div>
            <span
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "16px",
                fontWeight: "700",
                color: "#1a1a1a",
              }}
            >
              Years Of Experience
            </span>
          </div>

          {/* Main image */}
          <div
            style={{
              position: "absolute",
              top: "50px",
              left: "100px",
              width: "420px",
              height: "400px",
              borderRadius: "22px",
              overflow: "hidden",
              zIndex: 1,
            }}
          >
            <Image
              src="/images/0O3A2500.jpg"
              alt="Beyond The View team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT — Description */}
        <div
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
          {/* Our Mission label */}
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "15px",
              fontWeight: "600",
              color: "#888",
              margin: 0,
              letterSpacing: "1px",
            }}
          >
            Our Mission
          </p>

          {/* Heading */}
          <div>
            <h2
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "38px",
                fontWeight: "900",
                color: "#1a1a1a",
                margin: "0 0 4px 0",
                lineHeight: 1.1,
              }}
            >
              Nurturing Growth
            </h2>
            <h2
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "38px",
                fontWeight: "900",
                margin: 0,
                lineHeight: 1.1,
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
            Our mission at Beyond The View Autism Services, is to meet each child's
            individual needs, create limitless opportunities for learning, and support
            each child on their journey to reach their full potential.
            <br />
            Founded by two local BCAs, we bring clinician-led expertise to every family
            we serve
          </p>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              marginTop: "8px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "22px" }}>🧸</span>
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
              <span style={{ fontSize: "22px", color: "#FF4880" }}>📍</span>
              <span
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#1a1a1a",
                }}
              >
                Clinic & Community (Day)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
