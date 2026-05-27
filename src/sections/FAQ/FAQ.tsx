"use client";

import React, { useState } from "react";
import Image from "next/image";
import { faqs, INSURANCE_LOGOS } from "@/constants";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="faq-outer-container" style={{ width: "1440px", margin: "0 auto", display: "flex", flexDirection: "column" }}>
      <style>{`
        .insurance-marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
        }
        .insurance-marquee-track {
          display: flex;
          align-items: center;
          animation: insurance-marquee-scroll 35s linear infinite;
          width: max-content;
        }
        .insurance-logo-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          height: 74px;
          margin-right: 75px;
        }
        @keyframes insurance-marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (max-width: 1024px) {
          .faq-outer-container {
            width: 100% !important;
          }
          .faq-section {
            width: 100% !important;
            height: auto !important;
            padding: 40px 16px !important;
          }
          .faq-inner-row {
            width: 100% !important;
            height: auto !important;
            flex-direction: column !important;
            gap: 24px !important;
            padding: 0 !important;
          }
          .faq-img-wrap {
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            aspect-ratio: 1.857 !important;
            border-radius: 0 120px 0 0 !important;
            margin: 0 auto !important;
          }
          .faq-accordion-wrap {
            width: 100% !important;
            padding: 0 !important;
          }
          .insurance-banner {
            width: 100% !important;
            height: auto !important;
            padding: 40px 0 !important;
          }
          .insurance-logo-wrapper {
            height: 50px !important;
          }
          .insurance-logo-wrapper img {
            height: 50px !important;
            width: auto !important;
          }
        }
      `}</style>
      {/* ── FAQ SECTION ── */}
      <section
        id="faq"
        className="bg-white flex items-center justify-center flex-shrink-0 faq-section scroll-mt-6"
        style={{ width: "1440px", padding: "60px 0 0 0", borderBottom: "1px solid #E5E7EB" }}
      >
        <div
          className="flex items-center justify-start faq-inner-row"
          style={{ width: "1440px", paddingRight: "60px", boxSizing: "border-box", gap: "24px" }}
        >
          {/* ── LEFT: Image block ── */}
          <div
            className="relative flex-shrink-0 faq-img-wrap"
            style={{
              width: "700px", // Takes up the left side
              height: "377px", // Matches the height of the 5 FAQs
              borderRadius: "0 120px 0 0",
              overflow: "hidden",
              marginLeft: "-12px"
            }}
          >
            <Image
              src="/images/FAQimg.png" // Using the provided FAQ image
              alt="FAQ Section Image"
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* ── RIGHT: FAQ accordion ── */}
          <div
            className="flex flex-col justify-center flex-shrink-0 faq-accordion-wrap"
            style={{ width: "668px", gap: "16px" }}
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  width: "100%",
                  minHeight: "52px",
                  borderRadius: "8px",
                  border: "1px solid #D1D5DB", // Thin grey border
                  overflow: "hidden",
                  background: "#fff",
                  transition: "all 0.2s",
                  boxShadow: openIndex === i ? "0 4px 12px rgba(0,0,0,0.05)" : "none",
                }}
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between"
                  style={{
                    minHeight: "52px",
                    padding: "0 20px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#111827",
                      lineHeight: 1.3,
                    }}
                  >
                    {faq.question}
                  </span>
                  <span
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#111827",
                      flexShrink: 0,
                      marginLeft: "16px",
                      transition: "transform 0.2s",
                      transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Answer — expands below */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: openIndex === i ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.3s ease-in-out",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <div
                      style={{
                        padding: openIndex === i ? "0 20px 20px 20px" : "0 20px 0 20px",
                        opacity: openIndex === i ? 1 : 0,
                        transition: "all 0.3s ease-in-out",
                        fontFamily: "'Nunito', sans-serif",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#4B5563",
                        lineHeight: 1.6,
                      }}
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCEPTED INSURANCE BANNER ── */}
      <div
        id="accepted-insurance"
        className="flex flex-col items-center bg-white flex-shrink-0 insurance-banner scroll-mt-6"
        style={{ width: "1440px", padding: "24px 0 48px 0", boxSizing: "border-box" }}
      >
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "18px",
            color: "#888c99",
            marginBottom: "16px",
            fontWeight: 700,
          }}
        >
          Accepted Insurance
        </p>
        <div className="insurance-marquee-container">
          <div className="insurance-marquee-track">
            {/* First copy of logos */}
            {INSURANCE_LOGOS.map((logo, index) => (
              <div key={`logo-1-${index}`} className="insurance-logo-wrapper">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                  style={{ height: "auto" }}
                />
              </div>
            ))}
            {/* Second copy of logos for seamless marquee loop */}
            {INSURANCE_LOGOS.map((logo, index) => (
              <div key={`logo-2-${index}`} className="insurance-logo-wrapper">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                  style={{ height: "auto" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
