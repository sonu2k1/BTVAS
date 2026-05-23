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

export const OurServices: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // On mobile show 1, on tablet show 2, on desktop show 3
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
    }
    return 3;
  };

  const [visibleCount, setVisibleCount] = React.useState(3);

  React.useEffect(() => {
    const update = () => setVisibleCount(getVisibleCount());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
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
      className="w-full max-w-[1440px] mx-auto bg-white flex flex-col items-center justify-start overflow-hidden relative py-10 md:py-16 px-4 sm:px-8"
      id="services"
    >
      {/* Header */}
      <div className="flex flex-col items-center" style={{ marginBottom: "30px" }}>
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
          className="text-[28px] sm:text-[32px] md:text-[38px]"
          style={{
            fontFamily: "'Georgia', serif",
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
        className="relative flex items-center justify-center w-full max-w-[1290px]"
      >
        {/* Left Arrow */}
        <button
          onClick={() => paginate(-1)}
          disabled={!canPrev}
          className="absolute z-20 flex items-center justify-center rounded-full text-white text-xl transition-transform hover:scale-105 active:scale-95 disabled:opacity-30 w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] md:w-[62px] md:h-[62px]"
          style={{
            background: "#1E3A8A",
            left: "-8px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          aria-label="Previous service"
        >
          ←
        </button>

        {/* Cards */}
        <div className="flex gap-4 sm:gap-5 md:gap-7 items-center justify-center w-full px-8 sm:px-12 md:px-16">
          <AnimatePresence mode="popLayout" custom={direction}>
            {visible.map((service, i) => (
              <motion.div
                key={service.title}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
                transition={{ duration: 0.35, ease: "easeInOut", delay: i * 0.05 }}
                className="flex flex-col items-center bg-white w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-20px)] flex-shrink-0"
                style={{
                  maxWidth: "410px",
                  borderRadius: "20px",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 2px 16px 0 rgba(0,0,0,0.06)",
                  padding: "18px 18px 24px 18px",
                  boxSizing: "border-box",
                }}
              >
                {/* Image */}
                <div
                  className="w-full aspect-[374/283]"
                  style={{
                    borderRadius: "14px",
                    overflow: "hidden",
                    flexShrink: 0,
                    position: "relative",
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

        {/* Right Arrow */}
        <button
          onClick={() => paginate(1)}
          disabled={!canNext}
          className="absolute z-20 flex items-center justify-center rounded-full text-white text-xl transition-transform hover:scale-105 active:scale-95 disabled:opacity-30 w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] md:w-[62px] md:h-[62px]"
          style={{
            background: "#1E3A8A",
            right: "-8px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          aria-label="Next service"
        >
          →
        </button>
      </div>

      {/* Crocodile toy bottom-right decorative — hidden on mobile */}
      <div
        className="absolute pointer-events-none select-none hidden md:block"
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
