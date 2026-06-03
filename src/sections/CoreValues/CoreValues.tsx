"use client";

import React, { useState } from "react";
import Image from "next/image";

const values = [
  {
    id: 1,
    title: "Compassion",
    description: "We believe every family deserves compassionate care from beginning to end and throughout treatment",
    image: "https://ik.imagekit.io/sonu2k1/TEst/card-1.webp",
    borderColor: "#f4a261",
    objectPosition: "center 5%",
  },
  {
    id: 2,
    title: "Integrity",
    description: "We act with honesty and transparency in everything we do for our clients and community.",
    image: "https://ik.imagekit.io/sonu2k1/TEst/card-2.webp",
    borderColor: "#4fc3f7",
    objectPosition: "center 5%",
  },
  {
    id: 3,
    title: "Hope",
    description: "Hope is the belief that growth is possible, progress matters, and brighter futures can be built through perseverance, partnership, and purpose. It is the driving force behind our commitment to supporting every child and family we serve.",
    image: "https://ik.imagekit.io/sonu2k1/TEst/card-3.webp",
    borderColor: "#a5d6a7",
    objectPosition: "center 5%",
  },
  {
    id: 4,
    title: "Growth",
    description: "Growth is the belief that every step forward matters. We meet individuals where they are, recognize their unique strengths, and create opportunities for them to thrive beyond expectations.",
    image: "https://ik.imagekit.io/sonu2k1/TEst/card-4.webp",
    borderColor: "#ce93d8",
    objectPosition: "center 5%",
  },
];

export const CoreValues: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap');

        .val-card .val-img-wrap {
          height: 290px;
          transition: height 0.4s ease;
        }
        .val-card:hover .val-img-wrap,
        .val-card.is-active .val-img-wrap {
          height: 185px;
        }
        .val-card .val-desc {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, opacity 0.4s ease;
        }
        .val-card:hover .val-desc,
        .val-card.is-active .val-desc {
          max-height: 160px;
          opacity: 1;
        }
        .val-text-box {
          background: #fff;
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justifyContent: center;
          flex: 1;
          text-align: center;
          border-radius: 22px 22px 0 0;
          margin-top: -22px;
          position: relative;
          z-index: 2;
        }

        @media (min-width: 1025px) and (max-width: 1439px) {
          .core-values-section {
            height: auto !important;
            padding: 48px clamp(24px, 4vw, 56px) !important;
          }
          .core-values-row {
            width: 100% !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 20px !important;
          }
          .val-card {
            width: calc(50% - 12px) !important;
            max-width: 290px !important;
          }
        }

        @media (max-width: 1024px) {
          .core-values-section {
            width: 100% !important;
            height: auto !important;
            padding: 40px 16px !important;
          }
          .core-values-row {
            width: 100% !important;
            height: auto !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 20px !important;
          }
          .val-card {
            width: 100% !important;
            max-width: 320px !important;
            height: 350px !important;
          }
          .val-card .val-img-wrap {
            height: 255px !important;
            transition: height 0.4s ease !important;
          }
          .val-card:hover .val-img-wrap,
          .val-card.is-active .val-img-wrap {
            height: 160px !important;
          }
          .val-card .val-desc {
            max-height: 0 !important;
            opacity: 0 !important;
            overflow: hidden !important;
            transition: max-height 0.4s ease, opacity 0.4s ease !important;
          }
          .val-card:hover .val-desc,
          .val-card.is-active .val-desc {
            max-height: 160px !important;
            opacity: 1 !important;
          }
        }
      `}</style>

      <section
        id="values"
        className="core-values-section site-section-root"
        style={{
          width: "100%",
          maxWidth: "1440px",
          height: "auto",
          backgroundColor: "#faf6f0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          boxSizing: "border-box",
          padding: "56px clamp(16px, 7vw, 104px)",
          margin: "0 auto",
        }}
      >
        {/* QUOTE */}
        <p
          style={{
            fontFamily: "'Annie Use Your Telescope', cursive",
            fontSize: "clamp(24px, 4.5vw, 42px)",
            color: "#0b0f8a",
            lineHeight: 1.3,
            fontWeight: "400",
            margin: "0 0 8px 0",
            maxWidth: "960px",
            textAlign: "center",
            textWrap: "balance",
          }}
        >
          If they can&apos;t learn the way we teach them, we teach them the way they learn
        </p>

        {/* HEADER */}
        <div style={{ textAlign: "center" }}>

          <h2
            style={{
              fontFamily: "'Mochiy Pop One', sans-serif",
              fontSize: "24px",
              fontWeight: "400",
              color: "#1a1a1a",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            <span style={{ color: "#1a1a1a", textDecoration: "underline", textDecorationColor: "#FF4880", textUnderlineOffset: "8px", textDecorationThickness: "4px" }}>Care</span> <span style={{ color: "#FF4880" }}>That Matters</span>
          </h2>
        </div>

        {/* CARDS ROW */}
        <div
          className="core-values-row site-inner-root"
          style={{
            width: "100%",
            maxWidth: "1232px",
            height: "390px",
            display: "flex",
            gap: "20px",
            flexShrink: 0,
          }}
        >
          {values.map((val) => (
            <div
              key={val.id}
              className={`val-card ${activeIndex === val.id ? "is-active" : ""}`}
              onClick={() => setActiveIndex(activeIndex === val.id ? null : val.id)}
              style={{
                width: "290px",
                height: "390px",
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
                  style={{ objectPosition: val.objectPosition }}
                  sizes="(max-width: 768px) 100vw, 290px"
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
                    fontSize: "16px",
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