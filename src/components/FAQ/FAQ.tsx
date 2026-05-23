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
    <div className="w-full max-w-[1440px] mx-auto flex flex-col">
      {/* ── FAQ SECTION ── */}
      <section
        className="bg-white flex items-center justify-center flex-shrink-0 w-full px-4 sm:px-8 md:px-16 py-10 md:py-16"
      >
        <div
          className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 w-full"
        >
          {/* ── LEFT: Image block — hidden on mobile, shown on lg ── */}
          <div
            className="relative flex-shrink-0 hidden lg:block"
            style={{
              width: "650px",
              height: "350px",
              borderRadius: "0 120px 0 0",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/FAQimg.png"
              alt="FAQ Section Image"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* ── Mobile Image — shown only on mobile/tablet ── */}
          <div
            className="relative w-full lg:hidden overflow-hidden"
            style={{
              height: "200px",
              borderRadius: "16px",
            }}
          >
            <Image
              src="/images/FAQimg.png"
              alt="FAQ Section Image"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* ── RIGHT: FAQ accordion ── */}
          <div
            className="flex flex-col justify-center flex-shrink-0 w-full lg:w-[660px] gap-4"
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  width: "100%",
                  minHeight: "52px",
                  borderRadius: "8px",
                  border: "1px solid #D1D5DB",
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
                    padding: "0 16px sm:0 20px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    className="text-[14px] sm:text-[15px]"
                    style={{
                      fontFamily: "'Nunito', sans-serif",
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
        className="flex flex-col items-center bg-white flex-shrink-0 w-full py-8 md:py-12 px-4 sm:px-8"
        style={{ justifyContent: "center", boxSizing: "border-box" }}
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
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-16 lg:gap-[125px] w-full"
        >
          <div className="h-[50px] sm:h-[74px] flex items-center">
            <Image src="/images/logo-georgia-health-Photoroom.svg" alt="Georgia Department of Community Health" width={140} height={74} className="object-contain h-full w-auto" />
          </div>
          <div className="h-[50px] sm:h-[74px] flex items-center">
            <Image src="/images/logo-bcbs-Photoroom.svg" alt="BlueCross BlueShield" width={140} height={74} className="object-contain h-full w-auto" />
          </div>
          <div className="h-[50px] sm:h-[74px] flex items-center">
            <Image src="/images/logo-unitedhealth-Photoroom.svg" alt="UnitedHealth Group" width={140} height={74} className="object-contain h-full w-auto" />
          </div>
          <div className="h-[50px] sm:h-[74px] flex items-center">
            <Image src="/images/logo-caresource-Photoroom.svg" alt="CareSource" width={140} height={74} className="object-contain h-full w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};
