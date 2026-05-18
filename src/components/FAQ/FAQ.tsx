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
    <div style={{ width: "1440px", margin: "0 auto", display: "flex", flexDirection: "column" }}>
      {/* ── FAQ SECTION ── */}
      <section
        className="bg-white flex items-center justify-center overflow-hidden flex-shrink-0"
        style={{ width: "1440px", height: "452px" }}
      >
        <div
          className="flex items-center"
          style={{ width: "1440px", height: "452px", paddingLeft: "37px", paddingRight: "37px", boxSizing: "border-box" }}
        >
          {/* ── LEFT: Image block ── */}
          <div
            className="relative flex-shrink-0"
            style={{
              width: "734px",
              height: "452px",
              display: "flex",
              alignItems: "flex-end",
              paddingBottom: "0px",
            }}
          >
            <div
              style={{
                width: "734px",
                height: "398px",
                borderRadius: "20px",
                overflow: "hidden",
                position: "absolute",
                bottom: "0",
                left: "0",
              }}
            >
              {/* Purple overlay */}
              <div
                className="absolute inset-0 z-10"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(109,40,217,0.45) 0%, rgba(139,92,246,0.35) 50%, rgba(109,40,217,0.2) 100%)",
                  borderRadius: "20px",
                }}
              />
              <Image
                src="/images/faq-child.png"
                alt="Child thinking with glasses"
                width={734}
                height={398}
                className="w-full h-full object-cover object-center"
                priority
              />

              {/* FAQ label top-left */}
              <div className="absolute z-20" style={{ top: "28px", left: "28px" }}>
                <p
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.85)",
                    letterSpacing: "0.08em",
                    marginBottom: "6px",
                  }}
                >
                  FAQ
                </p>
                <h2
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "28px",
                    fontWeight: 800,
                    color: "#ffffff",
                    lineHeight: 1.15,
                    margin: 0,
                  }}
                >
                  Frequently Asked
                  <br />
                  Questions
                </h2>
              </div>

              {/* Bottom CTA */}
              <div className="absolute z-20" style={{ bottom: "24px", left: "28px" }}>
                <p
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.8)",
                    marginBottom: "4px",
                  }}
                >
                  Have other questions ?
                </p>
                
                <a
                  href="#"
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#FFD740",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Get Started <span style={{ fontSize: "16px" }}>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* ── GAP 24px ── */}
          <div style={{ width: "24px", flexShrink: 0 }} />

          {/* ── RIGHT: FAQ accordion ── */}
          <div
            className="flex flex-col justify-center flex-shrink-0"
            style={{ width: "628px", height: "294px", gap: "6px" }}
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  width: "628px",
                  minHeight: "46px",
                  borderRadius: "10px",
                  border: "1.5px solid #E5E7EB",
                  overflow: "hidden",
                  background: "#fff",
                  transition: "box-shadow 0.2s",
                  boxShadow: openIndex === i ? "0 2px 12px rgba(124,58,237,0.08)" : "none",
                }}
              >
                {/* Question row — exactly 46px */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between"
                  style={{
                    height: "46px",
                    padding: "0 16px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Georgia', serif",
                      fontSize: "13.5px",
                      fontWeight: 500,
                      color: "#111827",
                      lineHeight: 1.3,
                    }}
                  >
                    {faq.question}
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: 300,
                      color: "#374151",
                      flexShrink: 0,
                      marginLeft: "12px",
                      transition: "transform 0.2s",
                      transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                      display: "inline-block",
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Answer — expands below */}
                {openIndex === i && (
                  <div
                    style={{
                      padding: "0 16px 14px 16px",
                      fontFamily: "'Georgia', serif",
                      fontSize: "13px",
                      color: "#6B7280",
                      lineHeight: 1.6,
                      borderTop: "1px solid #F3F4F6",
                      paddingTop: "10px",
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCEPTED INSURANCE BANNER ── */}
      <div
        className="flex flex-col items-center bg-white flex-shrink-0"
        style={{ width: "1440px", height: "156px", justifyContent: "center" }}
      >
        <p
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "18px",
            color: "#888c99",
            marginBottom: "16px",
            fontWeight: 500,
          }}
        >
          Accepted Insurance
        </p>
        <div
          className="flex items-center justify-center"
          style={{ width: "1440px", height: "74px", gap: "125px" }}
        >
          <div style={{ height: "74px", display: "flex", alignItems: "center" }}>
            <Image src="/images/logo-georgia-health-Photoroom.svg" alt="Georgia Department of Community Health" width={180} height={74} className="object-contain" />
          </div>
          <div style={{ height: "74px", display: "flex", alignItems: "center" }}>
            <Image src="/images/logo-bcbs-Photoroom.svg" alt="BlueCross BlueShield" width={180} height={74} className="object-contain" />
          </div>
          <div style={{ height: "74px", display: "flex", alignItems: "center" }}>
            <Image src="/images/logo-unitedhealth-Photoroom.svg" alt="UnitedHealth Group" width={180} height={74} className="object-contain" />
          </div>
          <div style={{ height: "74px", display: "flex", alignItems: "center" }}>
            <Image src="/images/logo-caresource-Photoroom.svg" alt="CareSource" width={180} height={74} className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};
