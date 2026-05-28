"use client";

import React, { useState } from "react";
import Image from "next/image";
import { faqs, INSURANCE_LOGOS } from "@/constants";
import { ScheduleTourModal } from "@/components/ScheduleTourModal";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="faq-outer-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Prompt:wght@400;500;600;700;800&display=swap');

        .faq-outer-container {
          width: 100%;
          max-width: none;
          margin: 0;
          display: flex;
          flex-direction: column;
        }

        .insurance-banner {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          box-sizing: border-box;
          padding: 24px 16px 80px;
        }

        .insurance-banner-title {
          font-family: 'Nunito', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #888c99;
          margin: 0 0 12px;
          padding: 0 8px;
          text-align: center;
          line-height: 1.3;
        }

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
          height: 44px;
          margin-right: 36px;
        }

        .insurance-logo-wrapper img {
          width: auto !important;
          height: 44px !important;
          max-width: 180px;
          object-fit: contain;
        }

        @keyframes insurance-marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (min-width: 480px) {
          .insurance-banner {
            padding: 28px 20px 84px;
          }

          .insurance-banner-title {
            font-size: 15px;
            margin-bottom: 14px;
          }

          .insurance-logo-wrapper {
            height: 52px;
            margin-right: 48px;
          }

          .insurance-logo-wrapper img {
            height: 52px !important;
            max-width: 220px;
          }

          .insurance-marquee-track {
            animation-duration: 32s;
          }
        }

        @media (min-width: 768px) {
          .insurance-banner {
            padding: 28px 24px 88px;
          }

          .insurance-banner-title {
            font-size: 16px;
            margin-bottom: 16px;
          }

          .insurance-logo-wrapper {
            height: 60px;
            margin-right: 56px;
          }

          .insurance-logo-wrapper img {
            height: 60px !important;
            max-width: 260px;
          }
        }

        @media (min-width: 1024px) {
          .insurance-banner {
            padding: 24px 32px 92px;
          }

          .insurance-banner-title {
            font-size: 17px;
          }

          .insurance-logo-wrapper {
            height: 68px;
            margin-right: 64px;
          }

          .insurance-logo-wrapper img {
            height: 68px !important;
            max-width: 300px;
          }
        }

        @media (min-width: 1280px) {
          .insurance-banner {
            padding: 24px 0 96px;
          }

          .insurance-banner-title {
            font-size: 18px;
          }

          .insurance-logo-wrapper {
            height: 74px;
            margin-right: 75px;
          }

          .insurance-logo-wrapper img {
            height: 74px !important;
            max-width: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .insurance-marquee-track {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
            gap: 24px 32px;
            padding: 0 16px;
          }

          .insurance-marquee-container {
            overflow: visible;
          }

          .insurance-marquee-track .insurance-logo-wrapper[aria-hidden="true"] {
            display: none;
          }
        }

        /* ── FAQ SECTION (mobile-first) ── */
        .faq-section {
          width: 100%;
          max-width: none;
          margin: 0;
          box-sizing: border-box;
          padding: 32px 16px 40px 0;
          overflow: visible;
        }

        .faq-inner-row {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 20px;
          padding: 0;
          box-sizing: border-box;
        }

        .faq-img-wrap {
          position: relative;
          width: 100vw;
          max-width: 100vw;
          margin-left: calc(50% - 50vw);
          aspect-ratio: 1.55;
          min-height: 240px;
          border-radius: 0 48px 0 0;
          overflow: hidden;
          flex-shrink: 0;
        }

        .faq-hero-img {
          object-fit: cover;
          object-position: 42% 18%;
        }

        .faq-img-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          padding: 28px 24px 32px 36px;
          background: linear-gradient(
            180deg,
            rgba(1, 8, 79, 0) 0%,
            rgba(1, 8, 79, 0.12) 35%,
            rgba(1, 8, 79, 0.45) 62%,
            rgba(1, 8, 79, 0.78) 100%
          );
          box-sizing: border-box;
        }

        .faq-img-top {
          width: 100%;
        }

        .faq-img-bottom {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
        }

        .faq-img-heading {
          font-family: 'Mochiy Pop One', sans-serif;
          font-size: 36px;
          font-weight: 400;
          line-height: 42px;
          color: #ffffff;
          margin: 0;
          max-width: 100%;
        }

        .faq-img-subtitle {
          font-family: 'Prompt', sans-serif;
          font-size: 12px;
          font-weight: 500;
          line-height: 16px;
          color: rgba(255, 255, 255, 0.92);
          margin: 0;
        }

        .faq-get-started-text-btn {
          font-family: 'Prompt', sans-serif;
          font-size: 14px;
          font-weight: 700;
          line-height: 20px;
          color: #FF4880;
          background: none;
          border: none;
          padding: 0;
          margin: 0;
          cursor: pointer;
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-thickness: 2px;
          transition: color 0.2s ease, opacity 0.2s ease;
        }

        .faq-get-started-text-btn:hover {
          color: #ff6b96;
          opacity: 0.95;
        }

        .faq-get-started-text-btn:active {
          color: #e03570;
        }

        .faq-accordion-wrap {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-width: 0;
          padding: 0 16px 0 20px;
          box-sizing: border-box;
        }

        .faq-accordion-item {
          width: 100%;
          min-height: 48px;
          border-radius: 8px;
          border: 1px solid #D1D5DB;
          overflow: hidden;
          background: #fff;
          transition: box-shadow 0.2s ease;
        }

        .faq-accordion-item.is-open {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .faq-question-btn {
          width: 100%;
          min-height: 48px;
          padding: 12px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
        }

        .faq-question-text {
          font-family: 'Prompt', sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: #111827;
          line-height: 22px;
          flex: 1;
          min-width: 0;
        }

        .faq-toggle-icon {
          font-size: 22px;
          font-weight: 700;
          color: #111827;
          flex-shrink: 0;
          transition: transform 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }

        .faq-toggle-icon.is-open {
          transform: rotate(45deg);
        }

        .faq-answer-wrap {
          display: grid;
          transition: grid-template-rows 0.3s ease-in-out;
        }

        .faq-answer-inner {
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .faq-answer-divider {
          height: 1px;
          background: #E5E7EB;
          border: none;
          margin: 0 14px;
          flex-shrink: 0;
        }

        .faq-answer-text {
          padding: 12px 14px 14px;
          font-family: 'Prompt', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #9CA3AF;
          line-height: 16px;
          transition: opacity 0.3s ease-in-out;
        }

        .faq-answer-text.is-closed {
          opacity: 0;
          padding-top: 0;
          padding-bottom: 0;
        }

        @media (min-width: 480px) {
          .faq-section {
            padding: 36px 20px 44px 0;
          }

          .faq-accordion-wrap {
            padding: 0 20px 0 24px;
          }

          .faq-inner-row {
            gap: 24px;
          }

          .faq-img-wrap {
            border-radius: 0 72px 0 0;
            min-height: 260px;
          }

          .faq-hero-img {
            object-position: 40% 16%;
          }

          .faq-img-overlay {
            padding: 32px 28px 36px 44px;
          }

          .faq-accordion-wrap {
            gap: 14px;
          }

          .faq-question-btn {
            min-height: 52px;
            padding: 0 16px;
          }

          .faq-answer-divider {
            margin: 0 16px;
          }

          .faq-answer-text {
            padding: 12px 16px 16px;
          }
        }

        @media (min-width: 768px) {
          .faq-section {
            padding: 48px 24px 48px 0;
          }

          .faq-accordion-wrap {
            padding: 0 24px 0 28px;
          }

          .faq-img-wrap {
            border-radius: 0 96px 0 0;
            min-height: 300px;
          }

          .faq-hero-img {
            object-position: 44% 14%;
          }

          .faq-img-overlay {
            padding: 36px 32px 40px 48px;
          }

          .faq-question-btn {
            padding: 0 18px;
          }

          .faq-answer-divider {
            margin: 0 18px;
          }

          .faq-answer-text {
            padding: 12px 18px 18px;
          }
        }

        @media (min-width: 1024px) {
          .faq-section {
            padding: 56px 32px 52px 0;
          }

          .faq-inner-row {
            flex-direction: row;
            align-items: flex-start;
            gap: 24px;
            padding-right: 32px;
            padding-left: 0;
          }

          .faq-img-wrap {
            width: min(700px, 52vw);
            max-width: 700px;
            margin-left: calc(50% - 50vw);
            aspect-ratio: auto;
            height: 400px;
            border-radius: 0 120px 0 0;
            flex-shrink: 0;
          }

          .faq-img-overlay {
            padding: 40px 36px 44px 56px;
          }

          .faq-hero-img {
            object-position: 45% 8%;
          }

          .faq-img-heading {
            max-width: 380px;
          }

          .faq-accordion-wrap {
            flex: 1;
            max-width: 668px;
            gap: 16px;
            padding: 0 0 0 8px;
          }

          .faq-question-btn {
            min-height: 52px;
            padding: 0 20px;
          }

          .faq-answer-divider {
            margin: 0 20px;
          }

          .faq-answer-text {
            padding: 12px 20px 20px;
          }
        }

        @media (min-width: 1280px) {
          .faq-section {
            padding: 60px 0 56px 0;
          }

          .faq-inner-row {
            padding-right: 60px;
          }
        }
      `}</style>
      {/* ── FAQ SECTION ── */}
      <section
        id="faq"
        className="bg-white shrink-0 faq-section scroll-mt-6"
      >
        <div className="faq-inner-row">
          {/* ── LEFT: Image block ── */}
          <div className="faq-img-wrap">
            <Image
              src="/images/0O3A2539.jpg"
              alt="Children at Beyond The View Autism Services"
              fill
              sizes="(max-width: 1024px) 100vw, 700px"
              className="faq-hero-img"
              priority
            />
            <div className="faq-img-overlay">
              <div className="faq-img-top">
                <h2 className="faq-img-heading">Frequently Asked Questions</h2>
              </div>
              <div className="faq-img-bottom">
                <p className="faq-img-subtitle">Have other questions?</p>
                <button
                  type="button"
                  className="faq-get-started-text-btn"
                  onClick={() => setIsTourModalOpen(true)}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* ── RIGHT: FAQ accordion ── */}
          <div className="faq-accordion-wrap">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`faq-accordion-item${isOpen ? " is-open" : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="faq-question-btn"
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <span className={`faq-toggle-icon${isOpen ? " is-open" : ""}`} aria-hidden>
                      +
                    </span>
                  </button>

                  <div
                    className="faq-answer-wrap"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="faq-answer-inner">
                      <div className="faq-answer-divider" aria-hidden="true" />
                      <div className={`faq-answer-text${isOpen ? "" : " is-closed"}`}>
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ACCEPTED INSURANCE BANNER ── */}
      <div
        id="accepted-insurance"
        className="flex flex-col items-center bg-white shrink-0 insurance-banner scroll-mt-6"
      >
        <p className="insurance-banner-title">Accepted Insurance</p>
        <div className="insurance-marquee-container">
          <div className="insurance-marquee-track">
            {INSURANCE_LOGOS.map((logo, index) => (
              <div key={`logo-1-${index}`} className="insurance-logo-wrapper">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                  sizes="(max-width: 480px) 150px, (max-width: 768px) 200px, 300px"
                />
              </div>
            ))}
            {INSURANCE_LOGOS.map((logo, index) => (
              <div key={`logo-2-${index}`} className="insurance-logo-wrapper" aria-hidden="true">
                <Image
                  src={logo.src}
                  alt=""
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                  sizes="(max-width: 480px) 150px, (max-width: 768px) 200px, 300px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <ScheduleTourModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
      />
    </div>
  );
};
