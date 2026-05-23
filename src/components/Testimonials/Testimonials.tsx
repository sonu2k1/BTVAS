"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "I am motivated each day by the opportunity to be part of every client's journey and to witness their growth and progress. My work is also driven by a desire to model dedication and purpose for my own children, showing them the value of meaningful work. Above all, I am committed to creating lasting change for my family by breaking generational barriers and building a stronger future.",
    name: "Evette",
  },
  {
    quote:
      "The team here truly cares about every child's development. We have seen incredible growth in our son over the past year, and we couldn't be more grateful for the dedication and warmth shown by everyone involved.",
    name: "Marcus",
  },
  {
    quote:
      "From the very first session, we felt welcomed and understood. The progress our daughter has made is beyond what we ever imagined. This place has changed our family's life.",
    name: "Priya",
  },
];

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <section
      className="bg-white flex items-center justify-center"
      style={{ width: "1440px", height: "727px", margin: "0 auto" }}
    >
      {/* Testimonials card */}
      <div
        className="relative flex flex-col items-center justify-center"
        style={{ width: "1340px", height: "679px" }}
      >
        {/* Decorative squiggle top-left */}
        <svg
          className="absolute"
          style={{ top: 40, left: 60 }}
          width="80"
          height="36"
          viewBox="0 0 80 36"
          fill="none"
        >
          <path
            d="M4 28 C20 4, 40 4, 60 20 C70 28, 76 28, 78 24"
            stroke="#FFD740"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Balloon top-right */}
        <svg
          className="absolute"
          style={{ top: 20, right: 60 }}
          width="60"
          height="130"
          viewBox="0 0 60 130"
          fill="none"
        >
          <ellipse cx="30" cy="38" rx="26" ry="34" fill="#E91E8C" />
          <path
            d="M30 72 C28 85, 32 95, 29 110 C27 120, 31 125, 30 128"
            stroke="#E91E8C"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M26 70 L30 76 L34 70" fill="#E91E8C" />
        </svg>

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
        <div className="relative w-full flex items-center justify-between px-4">
          {/* Left arrow */}
          <button
            onClick={() => paginate(-1)}
            className="flex-shrink-0 w-[62px] h-[62px] rounded-full flex items-center justify-center text-white text-xl transition-transform hover:scale-105 active:scale-95"
            style={{ background: "#7C3AED" }}
            aria-label="Previous testimonial"
          >
            ←
          </button>

          {/* Animated quote */}
          <div
            className="overflow-hidden flex items-center justify-center"
            style={{ width: "1100px", minHeight: "320px" }}
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.p
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-center text-gray-900 leading-relaxed"
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
                {testimonials[current].quote}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Right arrow */}
          <button
            onClick={() => paginate(1)}
            className="flex-shrink-0 w-[62px] h-[62px] rounded-full flex items-center justify-center text-white text-xl transition-transform hover:scale-105 active:scale-95"
            style={{ background: "#7C3AED" }}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>

        {/* Author name */}
        <AnimatePresence mode="wait">
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
            - {testimonials[current].name}
          </motion.p>
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="flex gap-2 mt-6">
          {testimonials.map((_, i) => (
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
