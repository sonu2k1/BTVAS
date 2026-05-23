"use client";

import React from "react";
import Image from "next/image";

export const Mission: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full max-w-[1440px] mx-auto py-10 md:py-16 px-4 sm:px-8 md:px-16"
      style={{
        backgroundColor: "#faf6f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      {/* INNER WRAPPER */}
      <div
        className="w-full max-w-[1280px] flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-20"
      >
        {/* LEFT — Image + 25+ badge */}
        <div
          className="relative w-full md:w-[518px] h-[350px] sm:h-[400px] md:h-[454px] flex-shrink-0"
        >
          {/* Cream circle background */}
          <div
            className="hidden md:block"
            style={{
              position: "absolute",
              top: "70px",
              left: "-10px",
              width: "200px",
              height: "340px",
              borderRadius: "170px 0 0 170px",
              backgroundColor: "#F3E8D6",
              zIndex: 0,
            }}
          />

          {/* 25+ badge */}
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              zIndex: 3,
              display: "flex",
              alignItems: "center",
              marginBottom: "5px",
            }}
          >
            {/* Purple circle */}
            <div
              className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
              style={{
                borderRadius: "50%",
                backgroundColor: "#9B72CF",
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
                  className="text-[22px] md:text-[30px]"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
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
              className="w-[120px] md:w-[146px] h-[36px] md:h-[46px]"
              style={{
                backgroundColor: "#fff",
                borderRadius: "0 23px 23px 0",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "-20px",
                paddingLeft: "15px",
                boxShadow: "4px 4px 15px rgba(0,0,0,0.06)",
                zIndex: 1,
              }}
            >
              <span
                className="text-[11px] md:text-[12.5px]"
                style={{
                  fontFamily: "'Nunito', sans-serif",
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
            className="absolute top-[50px] left-4 sm:left-10 md:left-[80px] w-[calc(100%-32px)] sm:w-[calc(100%-80px)] md:w-[420px] h-[280px] sm:h-[340px] md:h-[400px]"
            style={{
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
          className="w-full md:w-[580px] flex flex-col justify-center gap-4 flex-shrink-0"
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
              className="text-[28px] sm:text-[32px] md:text-[38px]"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: "900",
                color: "#1a1a1a",
                margin: "0 0 4px 0",
                lineHeight: 1.1,
              }}
            >
              Nurturing Growth
            </h2>
            <h2
              className="text-[28px] sm:text-[32px] md:text-[38px]"
              style={{
                fontFamily: "'Nunito', sans-serif",
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
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-10 mt-2"
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
