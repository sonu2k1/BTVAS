"use client";

import React from "react";
import Image from "next/image";

const values = [
  {
    id: 1,
    title: "Compassion",
    description: "We believe every family deserves compassionate care from beginning to end and throughout treatment",
    image: "/images/0O3A2595.jpg",
    borderColor: "#f4a261",
  },
  {
    id: 2,
    title: "Integrity",
    description: "We act with honesty and transparency in everything we do for our clients and community.",
    image: "/images/0O3A2613.jpg",
    borderColor: "#4fc3f7",
  },
  {
    id: 3,
    title: "Collaboration",
    description: "We work together with families, caregivers and professionals to achieve the best outcomes.",
    image: "/images/0O3A2650.jpg",
    borderColor: "#a5d6a7",
  },
  {
    id: 4,
    title: "Inclusion",
    description: "Every child belongs. We create welcoming spaces where all abilities are celebrated.",
    image: "/images/0O3A2709.jpg",
    borderColor: "#ce93d8",
  },
];

export const CoreValues: React.FC = () => {
  return (
    <>
      <style>{`
        .val-card .val-img-wrap {
          height: 290px;
          transition: height 0.4s ease;
        }
        .val-card:hover .val-img-wrap {
          height: 185px;
        }
        .val-card .val-desc {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, opacity 0.4s ease;
        }
        .val-card:hover .val-desc {
          max-height: 120px;
          opacity: 1;
        }
        .val-text-box {
          background: #fff;
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex: 1;
          text-align: center;
          border-radius: 22px 22px 0 0;
          margin-top: -22px;
          position: relative;
          z-index: 2;
        }
      `}</style>

      <section
        id="values"
        style={{
          width: "1440px",
          height: "552px",
          backgroundColor: "#faf6f0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          boxSizing: "border-box",
          padding: "0 104px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "15px",
              fontWeight: "600",
              color: "#888",
              letterSpacing: "2px",
              textTransform: "uppercase",
              margin: "0 0 6px 0",
            }}
          >
            Our Core Values
          </p>
          <h2
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "48px",
              fontWeight: "800",
              color: "#1a1a1a",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            <span style={{ color: "#753DBE" }}>Care</span> That Matters
          </h2>
        </div>

        {/* CARDS ROW */}
        <div
          style={{
            width: "1232px",
            height: "365px",
            display: "flex",
            gap: "20px",
            flexShrink: 0,
          }}
        >
          {values.map((val) => (
            <div
              key={val.id}
              className="val-card"
              style={{
                width: "290px",
                height: "365px",
                borderRadius: "22px",
                border: `2px dashed ${val.borderColor}`,
                overflow: "hidden",
                background: "#fff",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
              {/* IMAGE */}
              <div
                className="val-img-wrap"
                style={{
                  width: "100%",
                  flexShrink: 0,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src={val.image}
                  alt={val.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* TEXT BOX — rounded top, overlaps image */}
              <div className="val-text-box">
                <h3
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "22px",
                    fontWeight: "900",
                    color: "#1a1a1a",
                    margin: 0,
                  }}
                >
                  {val.title}
                </h3>
                <p
                  className="val-desc"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "13.5px",
                    fontWeight: "400",
                    color: "#666",
                    lineHeight: "1.6",
                    margin: "8px 0 0 0",
                    textAlign: "center",
                  }}
                >
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};