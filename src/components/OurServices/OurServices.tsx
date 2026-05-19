"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "ABA Therapy",
    titleColor1: "#7C3AED",
    titleColor2: "#1a1a1a",
    description:
      "Evidence-based Applied behaviour Analysis tailored to each child's unique profile and goals",
    image: "/images/service-aba.png",
    alt: "Child doing ABA therapy activity",
  },
  {
    title: "Speech Therapy",
    titleColor1: "#7C3AED",
    titleColor2: "#E91E8C",
    description:
      "Building communication skills through expert speech language intervention and practice.",
    image: "/images/service-speech.png",
    alt: "Child with speech therapy number board",
  },
  {
    title: "Occupational Therapy",
    titleColor1: "#7C3AED",
    titleColor2: "#E91E8C",
    description: "More detail coming soon",
    image: "/images/service-occupational.png",
    alt: "Children doing occupational therapy on playground",
  },
  {
    title: "Behavioral Support",
    titleColor1: "#7C3AED",
    titleColor2: "#1a1a1a",
    description: "Comprehensive behavioral support strategies for children and families.",
    image: "/images/0O3A2609.jpg",
    alt: "Child in behavioral support session",
  },
];

const VISIBLE = 3;

export const OurServices: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const canPrev = startIndex > 0;
  const canNext = startIndex + VISIBLE < services.length;

  const paginate = (dir: number) => {
    if (dir === -1 && !canPrev) return;
    if (dir === 1 && !canNext) return;
    setDirection(dir);
    setStartIndex((prev) => prev + dir);
  };

  const visible = services.slice(startIndex, startIndex + VISIBLE);

  return (
    <section
      className="bg-white flex flex-col items-center justify-start overflow-hidden relative"
      style={{ width: "1440px", height: "704.64px", margin: "0 auto" }}
      id="services"
    >
      {/* Header */}
      <div className="flex flex-col items-center mt-10 mb-8">
        <p
          className="tracking-widest mb-1"
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "15px",
            color: "#9CA3AF",
            fontStyle: "italic",
            letterSpacing: "0.15em",
          }}
        >
          What we offer
        </p>
        <h2
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "38px",
            fontWeight: 800,
            lineHeight: 1.1,
          }}
        >
          <span style={{ color: "#7C3AED" }}>Our </span>
          <span style={{ color: "#1a1a1a" }}>Services</span>
        </h2>
      </div>

      {/* Cards container */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: "1290px", height: "474px" }}
      >
        {/* Left Arrow — overlapping left card */}
        <button
          onClick={() => paginate(-1)}
          disabled={!canPrev}
          className="absolute z-20 flex items-center justify-center rounded-full text-white text-xl transition-transform hover:scale-105 active:scale-95 disabled:opacity-30"
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
        <div className="flex gap-[28px] items-center justify-center" style={{ width: "1290px" }}>
          <AnimatePresence mode="popLayout" custom={direction}>
            {visible.map((service, i) => (
              <motion.div
                key={service.title}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
                transition={{ duration: 0.35, ease: "easeInOut", delay: i * 0.05 }}
                className="flex flex-col items-center bg-white flex-shrink-0"
                style={{
                  width: "410px",
                  height: "474px",
                  borderRadius: "20px",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 2px 16px 0 rgba(0,0,0,0.06)",
                  padding: "18px 18px 24px 18px",
                  boxSizing: "border-box",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    width: "374px",
                    height: "283px",
                    borderRadius: "14px",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.alt}
                    width={374}
                    height={283}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Title */}
                <h3
                  className="mt-6 mb-3 text-center"
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "22px",
                    fontWeight: 700,
                    fontStyle: "italic",
                  }}
                >
                  <span style={{ color: "#7C3AED" }}>
                    {service.title.split(" ")[0]}{" "}
                  </span>
                  <span style={{ color: "#1a1a1a" }}>
                    {service.title.split(" ").slice(1).join(" ")}
                  </span>
                </h3>

                {/* Description */}
                <p
                  className="text-center leading-relaxed"
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "15px",
                    color: "#4B5563",
                    maxWidth: "340px",
                  }}
                >
                  {service.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Right Arrow — overlapping right card */}
        <button
          onClick={() => paginate(1)}
          disabled={!canNext}
          className="absolute z-20 flex items-center justify-center rounded-full text-white text-xl transition-transform hover:scale-105 active:scale-95 disabled:opacity-30"
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
        className="absolute bottom-0 right-16 pointer-events-none select-none"
        style={{ width: "100px", height: "100px" }}
        aria-hidden
      >
        <Image
          src="/images/toy-crocodile.png"
          alt="Decorative toy crocodile"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
};
