"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/constants";

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <section
      className="bg-white flex items-center justify-center testimonials-section"
      style={{ width: "1440px", height: "550px", margin: "0 auto" }}
    >
      <style>{`
        @media (max-width: 1024px) {
          .testimonials-section {
            width: 100% !important;
            height: auto !important;
            padding: 40px 16px !important;
          }
          .testimonials-card {
            width: 100% !important;
            height: auto !important;
            padding: 24px 0 !important;
          }
          .testimonials-decor {
            display: none !important;
          }
          .testimonials-row {
            width: 100% !important;
            position: relative !important;
            padding: 0 48px !important;
          }
          .testimonials-slider {
            width: 100% !important;
            min-height: 240px !important;
          }
          .testimonials-quote-text {
            font-size: 16px !important;
            text-align: center !important;
            text-align-last: center !important;
            line-height: 1.6 !important;
          }
          .arrow-btn-left {
            position: absolute !important;
            left: 0px !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
            width: 40px !important;
            height: 40px !important;
            z-index: 10 !important;
          }
          .arrow-btn-right {
            position: absolute !important;
            right: 0px !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
            width: 40px !important;
            height: 40px !important;
            z-index: 10 !important;
          }
        }
      `}</style>
      {/* Testimonials card */}
      <div
        className="relative flex flex-col items-center justify-center testimonials-card"
        style={{ width: "1340px", height: "500px" }}
      >
        {/* Quote icon */}
        <div className="flex flex-col items-center mb-3">
          <svg width="52" height="42" viewBox="0 0 52 42" fill="none">
            <text x="0" y="40" fontSize="52" fill="#E91E8C" fontFamily="Georgia, serif">
              ❝
            </text>
          </svg>
        </div>

        {/* Subtitle */}
        <p
          className="text-gray-400 mb-10 tracking-wide"
          style={{ fontFamily: "'Georgia', serif", fontSize: "18px", fontStyle: "italic" }}
        >
          What parents say about us
        </p>

        {/* Quote + Nav row */}
        <div className="relative w-full flex items-center justify-between px-4 testimonials-row">
          {/* Left arrow */}
          <button
            onClick={() => paginate(-1)}
            className="flex-shrink-0 w-[62px] h-[62px] rounded-full flex items-center justify-center text-white text-xl transition-transform hover:scale-105 active:scale-95 arrow-btn-left"
            style={{ background: "#7C3AED" }}
            aria-label="Previous testimonial"
          >
            ←
          </button>

          {/* Animated quote */}
          <div
            className="overflow-hidden flex items-center justify-center testimonials-slider"
            style={{ width: "1100px", minHeight: "180px" }}
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col items-center justify-center w-full"
              >
                {/* 5 Stars */}
                <div className="flex gap-1.5 justify-center mb-6 text-[#FFD740]" style={{ fontSize: "32px", lineHeight: 1 }}>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>

                <p
                  className="text-center text-gray-900 leading-relaxed testimonials-quote-text"
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "26px",
                    fontWeight: 400,
                    textAlign: "justify",
                    textAlignLast: "center",
                    maxWidth: "900px",
                    margin: "0 auto",
                  }}
                >
                  {TESTIMONIALS[current].quote}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right arrow */}
          <button
            onClick={() => paginate(1)}
            className="flex-shrink-0 w-[62px] h-[62px] rounded-full flex items-center justify-center text-white text-xl transition-transform hover:scale-105 active:scale-95 arrow-btn-right"
            style={{ background: "#7C3AED" }}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>

        {/* Author name */}
        <AnimatePresence mode="wait">
          {TESTIMONIALS[current].name && (
            <motion.p
              key={`name-${current}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-10 font-bold"
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "24px",
                color: "#E91E8C",
              }}
            >
              - {TESTIMONIALS[current].name}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="flex gap-2 mt-6">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className="w-2 h-2 rounded-full transition-all"
              style={{ background: i === current ? "#E91E8C" : "#D1D5DB" }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
