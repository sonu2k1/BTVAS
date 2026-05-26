"use client";

import React from "react";
import Image from "next/image";

const visionaries = [
  {
    id: 1,
    name: "Danielle Strickland",
    credentials: "BCBA, LBA",
    role: "Co-Founder",
    quote: '"Dedicated to the science of behavior and the art of human connection…"',
    image: "/images/visionary.png",
  },
  {
    id: 2,
    name: "Sheneice Willis Lewis",
    credentials: "BCBA, LBA",
    role: "Co-Founder",
    quote: '"Empowering families through structured, compassionate intervention strategies…"',
    image: "/images/visionary-2.png",
  },
];

export const Visionaries: React.FC = () => {
  return (
    <section
      className="visionaries-section"
      style={{
        width: "1440px",
        height: "552px",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        padding: "0 80px",
        gap: "32px",
        margin: "0 auto",
      }}
    >
      <style>{`
        @media (max-width: 1024px) {
          .visionaries-section {
            width: 100% !important;
            height: auto !important;
            padding: 40px 16px !important;
          }
          .visionaries-heading {
            width: 100% !important;
            text-align: center !important;
          }
          .visionaries-row {
            width: 100% !important;
            height: auto !important;
            flex-direction: column !important;
            gap: 24px !important;
            align-items: center !important;
          }
          .visionary-card {
            width: 100% !important;
            max-width: 380px !important;
            height: auto !important;
            flex-direction: row !important;
            align-items: stretch !important;
            text-align: left !important;
          }
          .visionary-bg-circle {
            display: block !important;
            width: 150px !important;
            height: 150px !important;
            left: -20px !important;
          }
          .visionary-img-wrap {
            width: 110px !important;
            height: auto !important;
            min-height: 100% !important;
          }
          .visionary-text-wrap {
            width: auto !important;
            flex: 1 !important;
            padding: 16px 14px !important;
            gap: 8px !important;
          }
          .visionary-name {
            font-size: 16px !important;
            margin-bottom: 2px !important;
          }
          .visionary-credentials {
            font-size: 12px !important;
            margin-bottom: 0px !important;
          }
          .visionary-role {
            font-size: 11px !important;
          }
          .visionary-quote {
            font-size: 11.5px !important;
            line-height: 1.45 !important;
            margin-top: 8px !important;
          }
        }
      `}</style>

      {/* HEADING */}
      <div className="visionaries-heading" style={{ width: "1280px" }}>
        <h2
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "36px",
            fontWeight: "900",
            color: "#1a1a1a",
            margin: 0,
          }}
        >
          <span style={{ textDecoration: "underline", textDecorationColor: "#FF4880", textUnderlineOffset: "8px", textDecorationThickness: "4px" }}>The</span>{" "}
          <span style={{ color: "#FF4880" }}>Visionaries</span>
        </h2>
      </div>

      {/* CARDS ROW */}
      <div
        className="visionaries-row"
        style={{
          width: "1280px",
          height: "354px",
          display: "flex",
          gap: "48px",
          alignItems: "center",
        }}
      >
        {visionaries.map((person) => (
          <div
            key={person.id}
            className="visionary-card"
            style={{
              width: "616px",
              height: "300px",
              borderRadius: "22px",
              backgroundColor: "#FFDC68",
              display: "flex",
              flexDirection: "row",
              overflow: "hidden",
              position: "relative",
              flexShrink: 0,
            }}
          >
            {/* Circle background behind image */}
            <div
              className="visionary-bg-circle"
              style={{
                position: "absolute",
                left: "-30px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "240px",
                height: "240px",
                borderRadius: "50%",
                backgroundColor: "#FFCC26",
                zIndex: 0,
              }}
            />

            {/* IMAGE */}
            <div
              className="visionary-img-wrap"
              style={{
                width: "200px",
                height: "300px",
                position: "relative",
                flexShrink: 0,
                zIndex: 1,
              }}
            >
              <Image
                src={person.image}
                alt={person.name}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* TEXT */}
            <div
              className="visionary-text-wrap"
              style={{
                flex: 1,
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                zIndex: 1,
              }}
            >
              <div>
                <h3
                  className="visionary-name"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "24px",
                    fontWeight: "900",
                    color: "#1a1a1a",
                    margin: "0 0 6px 0",
                  }}
                >
                  {person.name}
                </h3>
                <p
                  className="visionary-credentials"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#333",
                    margin: "0 0 2px 0",
                  }}
                >
                  {person.credentials}
                </p>
                <p
                  className="visionary-role"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "13px",
                    fontWeight: "400",
                    color: "#555",
                    margin: 0,
                  }}
                >
                  {person.role}
                </p>
              </div>

              <p
                className="visionary-quote"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "14px",
                  fontWeight: "600",
                  fontStyle: "italic",
                  color: "#333",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {person.quote}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
