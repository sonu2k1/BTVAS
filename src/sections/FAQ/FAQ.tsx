"use client";

import React, { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "Does Speech and OT require a separate referral from ABA?",
    answer:
      "No, our team will coordinate all necessary referrals and documentation as part of your child's comprehensive care plan.",
  },
  {
    question: "How long is the process to begin services?",
    answer:
      "The process typically takes 2–4 weeks from initial intake to starting therapy, depending on insurance verification and assessment scheduling.",
  },
  {
    question: "Will my child need ABA therapy forever?",
    answer:
      "ABA therapy is goal-oriented. As your child meets their targets and develops skills, services are gradually reduced. The goal is always independence.",
  },
  {
    question: "How many hours of ABA therapy will my child receive?",
    answer:
      "Hours are individualized based on your child's assessment and insurance approval, typically ranging from 10 to 40 hours per week.",
  },
  {
    question: "Can parents be involved in therapy?",
    answer:
      "Absolutely. Parent involvement is a core part of our approach. We provide training and regular updates so you can support your child's progress at home.",
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="faq-outer-container" style={{ width: "1440px", margin: "0 auto", display: "flex", flexDirection: "column" }}>
      <style>{`
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
            gap: 32px !important;
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
            padding: 40px 16px !important;
          }
          .insurance-logos-row {
            width: 100% !important;
            height: auto !important;
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px 16px !important;
            justify-items: center !important;
            align-items: center !important;
          }
          .insurance-logos-row > div {
            width: 100% !important;
            height: 60px !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
          }
          .insurance-logos-row img {
            max-width: 130px !important;
            height: auto !important;
          }
        }
      `}</style>
      {/* ── FAQ SECTION ── */}
      <section
        className="bg-white flex items-center justify-center flex-shrink-0 faq-section"
        style={{ width: "1440px", padding: "60px 0 24px 0" }}
      >
        <div
          className="flex items-center justify-between faq-inner-row"
          style={{ width: "1440px", paddingRight: "60px", boxSizing: "border-box" }}
        >
          {/* ── LEFT: Image block ── */}
          <div
            className="relative flex-shrink-0 faq-img-wrap"
            style={{
              width: "650px", // Takes up the left side
              height: "350px", // Matches the height of the 5 FAQs
              borderRadius: "0 120px 0 0",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/FAQimg.png" // Using the provided FAQ image
              alt="FAQ Section Image"
              fill
              sizes="(max-width: 768px) 100vw, 650px"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* ── RIGHT: FAQ accordion ── */}
          <div
            className="flex flex-col justify-center flex-shrink-0 faq-accordion-wrap"
            style={{ width: "660px", gap: "16px" }}
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
        className="flex flex-col items-center bg-white flex-shrink-0 insurance-banner"
        style={{ width: "1440px", height: "300px", justifyContent: "center", paddingTop: "24px", boxSizing: "border-box" }}
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
        <div
          className="flex items-center justify-center insurance-logos-row"
          style={{ width: "1440px", height: "74px", gap: "125px" }}
        >
          <div style={{ height: "74px", display: "flex", alignItems: "center" }}>
            <Image src="/images/logo-georgia-health-Photoroom.svg" alt="Georgia Department of Community Health" width={180} height={74} className="object-contain" style={{ height: "auto" }} />
          </div>
          <div style={{ height: "74px", display: "flex", alignItems: "center" }}>
            <Image src="/images/logo-bcbs-Photoroom.svg" alt="BlueCross BlueShield" width={180} height={74} className="object-contain" style={{ height: "auto" }} />
          </div>
          <div style={{ height: "74px", display: "flex", alignItems: "center" }}>
            <Image src="/images/logo-unitedhealth-Photoroom.svg" alt="UnitedHealth Group" width={180} height={74} className="object-contain" style={{ height: "auto" }} />
          </div>
          <div style={{ height: "74px", display: "flex", alignItems: "center" }}>
            <Image src="/images/logo-caresource-Photoroom.svg" alt="CareSource" width={180} height={74} className="object-contain" style={{ height: "auto" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
