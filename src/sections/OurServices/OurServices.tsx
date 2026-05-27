"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "ABA Therapy",
    titleColor1: "#753DBE",
    titleColor2: "#FF4880",
    description:
      "Evidence-based Applied behaviour Analysis tailored to each child's unique profile and goals",
    image: "/images/service-aba.png",
    alt: "Child doing ABA therapy activity",
  },
  {
    title: "Speech Therapy",
    titleColor1: "#753DBE",
    titleColor2: "#FF4880",
    description:
      "Building communication skills through expert speech language intervention and practice.",
    image: "/images/service-speech.png",
    alt: "Child with speech therapy number board",
  },
  {
    title: "Occupational Therapy",
    titleColor1: "#753DBE",
    titleColor2: "#FF4880",
    description: "More detail coming soon",
    image: "/images/service-occupational.png",
    alt: "Children doing occupational therapy on playground",
  },
  {
    title: "Behavioral Support",
    titleColor1: "#753DBE",
    titleColor2: "#FF4880",
    description: "Comprehensive behavioral support strategies for children and families.",
    image: "/images/0O3A2609.jpg",
    alt: "Child in behavioral support session",
  },
];

export const OurServices: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const canPrev = startIndex > 0;
  const canNext = startIndex + visibleCount < services.length;

  const paginate = (dir: number) => {
    if (dir === -1 && !canPrev) return;
    if (dir === 1 && !canNext) return;
    setDirection(dir);
    setStartIndex((prev) => prev + dir);
  };

  const visible = services.slice(startIndex, startIndex + visibleCount);

  return (
    <section
      className="bg-white flex flex-col items-center justify-start overflow-hidden relative services-section"
      style={{ width: "1440px", height: "704.64px", margin: "0 auto" }}
      id="services"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Prompt&display=swap');

        @media (max-width: 1024px) {
          .services-section {
            width: 100% !important;
            height: auto !important;
            padding: 40px 16px !important;
          }
          .services-container {
            width: 100% !important;
            height: auto !important;
            position: relative !important;
            padding: 0 48px !important;
          }
          .services-cards-row {
            width: 100% !important;
            gap: 16px !important;
          }
          .services-card {
            width: 100% !important;
            max-width: 320px !important;
            height: auto !important;
            padding: 0 !important;
          }
          .services-card-body {
            height: auto !important;
            min-height: 380px !important;
            padding: 16px 16px 40px 16px !important;
          }
          .services-card-img-wrap {
            width: 100% !important;
            height: auto !important;
            aspect-ratio: 1.57 !important;
          }
          .arrow-services-left {
            left: 0px !important;
            width: 40px !important;
            height: 40px !important;
            z-index: 10 !important;
          }
          .arrow-services-right {
            right: 0px !important;
            width: 40px !important;
            height: 40px !important;
            z-index: 10 !important;
          }
        }
      `}</style>

      {/* Header */}
      <div className="flex flex-col items-center" style={{ marginBottom: "30px" }}>
        <h2
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "38px",
            fontWeight: 800,
            lineHeight: 1.1,
          }}
        >
          <span
            style={{
              textDecoration: "underline",
              textDecorationColor: "#FF4880",
              textUnderlineOffset: "8px",
              textDecorationThickness: "4px",
            }}
          >
            Beyond
          </span>{" "}
          <span style={{ color: "#FF4880" }}>Just Care</span>
        </h2>
      </div>

      {/* Cards container */}
      <div
        className="relative flex items-center justify-center services-container"
        style={{ width: "1290px", height: "474px" }}
      >
        {/* Left Arrow */}
        <button
          onClick={() => paginate(-1)}
          disabled={!canPrev}
          className="absolute z-20 flex items-center justify-center rounded-full text-white text-xl transition-transform hover:scale-105 active:scale-95 disabled:opacity-30 arrow-services-left"
          style={{
            width: "62px",
            height: "62px",
            background: "#1E3A8A",
            left: "-18px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          aria-label="Previous service"
        >
          ←
        </button>

        {/* Cards */}
        <div
          className="flex gap-[28px] items-center justify-center services-cards-row"
          style={{ width: "1290px" }}
        >
          <AnimatePresence mode="popLayout" custom={direction}>
            {visible.map((service, i) => (
              <motion.div
                key={service.title}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
                transition={{ duration: 0.35, ease: "easeInOut", delay: i * 0.05 }}
                className="flex flex-col items-center bg-transparent flex-shrink-0 services-card relative overflow-visible"
                style={{
                  width: "410px",
                  height: "474px",
                  boxSizing: "border-box",
                  filter: "drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.06))",
                }}
              >
                {/* Main Card Body */}
                <div
                  className="flex flex-col items-center bg-white w-full border-t border-l border-r border-[#E2E8F0] services-card-body"
                  style={{
                    height: "434px",
                    borderRadius: "20px 20px 0 0",
                    padding: "18px 18px 0px 18px",
                    boxSizing: "border-box",
                  }}
                >
                  {/* Image */}
                  <div
                    className="services-card-img-wrap"
                    style={{
                      width: "374px",
                      height: "238px",
                      borderRadius: "14px",
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.alt}
                      width={374}
                      height={238}
                      className="w-full h-full object-cover object-center"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-center"
                    style={{
                      fontFamily: "'Mochiy Pop One', sans-serif",
                      fontSize: "22px",
                      fontWeight: 400,
                      lineHeight: "27.3px",
                      marginTop: "20px",
                      marginBottom: "12px",
                      width: "187px",
                      height: "28px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span style={{ color: service.titleColor1 }}>
                      {service.title.split(" ")[0]}{" "}
                    </span>
                    <span style={{ color: service.titleColor2 }}>
                      {service.title.split(" ").slice(1).join(" ")}
                    </span>
                  </h3>

                  {/* Description */}
                  <p
                    className="text-center"
                    style={{
                      fontFamily: "'Prompt', sans-serif",
                      fontSize: "14px",
                      lineHeight: "26px",
                      color: "#666666",
                      width: "310px",
                      height: "76px",
                      margin: 0,
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Custom Scooped Bottom Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[40px] flex w-full select-none pointer-events-none">
                  {/* Left SVG Corner */}
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ flexShrink: 0 }}
                  >
                    <path
                      d="M 0 0 C 0 15, 8 30, 24 40 L 40 40 L 40 0 Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M 0 0 C 0 15, 8 30, 24 40 L 40 40"
                      stroke="#E2E8F0"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Center Spacer */}
                  <div
                    className="flex-grow bg-white h-[40px]"
                    style={{ borderBottom: "1.2px solid #E2E8F0" }}
                  />

                  {/* Right SVG Corner */}
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ flexShrink: 0 }}
                  >
                    <path
                      d="M 40 0 C 40 15, 32 30, 16 40 L 0 40 L 0 0 Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M 40 0 C 40 15, 32 30, 16 40 L 0 40"
                      stroke="#E2E8F0"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => paginate(1)}
          disabled={!canNext}
          className="absolute z-20 flex items-center justify-center rounded-full text-white text-xl transition-transform hover:scale-105 active:scale-95 disabled:opacity-30 arrow-services-right"
          style={{
            width: "62px",
            height: "62px",
            background: "#1E3A8A",
            right: "-18px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          aria-label="Next service"
        >
          →
        </button>
      </div>

      {/* Crocodile toy bottom-right decorative */}
      <div
        className="absolute pointer-events-none select-none testimonials-decor"
        style={{ bottom: "8px", right: "48px", zIndex: 30 }}
        aria-hidden
      >
        <Image
          src="/images/toy-crocodile.png"
          alt="Decorative toy crocodile"
          width={195}
          height={83}
          style={{ width: "194.43px", height: "82.01px" }}
        />
      </div>
    </section>
  );
};