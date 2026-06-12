"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/constants";

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000); // Changes testimonial every 6 seconds

    return () => clearInterval(timer);
  }, [current]);

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 120 : -120,
      scale: 0.96,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -120 : 120,
      scale: 0.96,
    }),
  };

  return (
    <section
      className="bg-transparent flex items-center justify-center testimonials-section site-section-root site-section-spacing"
      style={{ width: "100%", height: "auto", boxSizing: "border-box" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Prompt:wght@400&display=swap');

        .testimonials-subtitle {
          font-family: 'Mochiy Pop One', sans-serif;
          font-size: 32px;
          line-height: 48px;
          font-weight: 400;
          font-style: normal;
          text-align: center;
          color: #111827;
        }

        .testimonials-subtitle .underline-part {
          text-decoration: underline;
          text-decoration-style: solid;
          text-decoration-color: #FF4880;
          text-underline-offset: 14px;
          text-decoration-thickness: 4px;
          text-decoration-skip-ink: none;
        }

        .testimonials-card {
          justify-content: flex-start !important;
        }

        .testimonials-header {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .testimonials-subtitle-wrap {
          flex-shrink: 0;
          margin-top: 32px;
          margin-bottom: 48px;
        }

        .testimonials-row {
          flex-shrink: 0;
          align-items: center !important;
        }

        .testimonials-slider {
          height: 300px;
          min-height: 300px;
          max-height: 300px;
          position: relative;
        }

        .testimonials-slide {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow-y: auto;
          padding: 0 8px;
          box-sizing: border-box;
        }

        .testimonials-author-slot {
          flex-shrink: 0;
          min-height: 56px;
          margin-top: 40px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          width: 100%;
        }

        @media (min-width: 1025px) and (max-width: 1439px) {
          .testimonials-card {
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            min-height: 520px !important;
          }
          .testimonials-slider {
            width: 100% !important;
            max-width: 100% !important;
          }
          .testimonials-quote-text {
            max-width: 100% !important;
          }
        }

        @media (max-width: 1024px) {
          .testimonials-section {
            width: 100% !important;
            height: auto !important;
            overflow: visible !important;
          }
          .testimonials-card {
            width: 100% !important;
            height: auto !important;
            min-height: 0 !important;
            padding: 10px 0 !important;
            overflow: visible !important;
          }
          .testimonials-decor {
            display: none !important;
          }
          .testimonials-row {
            width: 100% !important;
            position: relative !important;
            padding: 0 44px !important;
            align-items: flex-start !important;
          }
          .testimonials-slider {
            width: 100% !important;
            height: auto !important;
            min-height: 0 !important;
            max-height: none !important;
            overflow: visible !important;
          }
          .testimonials-slide {
            position: relative !important;
            inset: auto !important;
            overflow: visible !important;
            height: auto !important;
            padding: 8px 4px !important;
          }
          .testimonials-stars {
            margin-bottom: 12px !important;
            font-size: 24px !important;
          }

          .testimonials-subtitle-wrap {
            margin-top: 24px !important;
            margin-bottom: 24px !important;
          }
          .testimonials-subtitle {
            font-size: clamp(24px, 5vw, 32px) !important;
            line-height: 1.65 !important;
            text-align: center !important;
            padding: 0 16px !important;
          }
          .testimonials-subtitle .underline-part {
            text-underline-offset: 10px !important;
          }

          .testimonials-author-slot {
            margin-top: 24px !important;
            min-height: 40px !important;
          }
          .testimonials-quote-text {
            font-size: 18px !important;
            line-height: 26px !important;
            text-align: center !important;
            text-align-last: center !important;
          }
          .arrow-btn-left {
            position: absolute !important;
            left: 0px !important;
            top: 72px !important;
            transform: none !important;
            width: 40px !important;
            height: 40px !important;
            z-index: 10 !important;
          }
          .arrow-btn-right {
            position: absolute !important;
            right: 0px !important;
            top: 72px !important;
            transform: none !important;
            width: 40px !important;
            height: 40px !important;
            z-index: 10 !important;
          }
        }

        @media (max-width: 480px) {
          .testimonials-subtitle {
            font-size: 22px !important;
            line-height: 1.7 !important;
          }
          .testimonials-subtitle .underline-part {
            text-underline-offset: 8px !important;
          }
        }
      `}</style>
      {/* Testimonials card */}
      <div
        className="relative flex flex-col items-center testimonials-card site-inner-root site-inner-root--1340"
        style={{ width: "100%", maxWidth: "1340px", height: "auto", minHeight: "580px" }}
      >
        <div className="testimonials-header">
          <div className="flex flex-col items-center" style={{ height: "42px" }}>
            {/* Space preserved */}
          </div>

          {/* RITA PIERSON QUOTE */}
          <div className="flex flex-col items-center max-w-[850px] mx-auto text-center px-4 mt-6">
            <p
              style={{
                fontFamily: "'Prompt', sans-serif",
                fontSize: "20px",
                lineHeight: "1.5",
                color: "#010C6F",
                fontWeight: 400,
                margin: "0 0 10px 0",
                fontStyle: "italic",
              }}
            >
              &ldquo;Every child deserves a champion&mdash;an adult who will never give up on them, who understands the power of connection and insists that they become the best that they can possibly be.&rdquo;
            </p>
            <p
              style={{
                fontFamily: "'Prompt', sans-serif",
                fontSize: "18px",
                fontWeight: 600,
                color: "#E91E8C",
                margin: 0,
              }}
            >
              — Rita Pierson
            </p>
          </div>

          <p className="testimonials-subtitle testimonials-subtitle-wrap">
            <span className="underline-part">Happy parents who trust</span> <span style={{ color: "#FF4880" }}>BTVAS</span>
          </p>
        </div>

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
            className="overflow-hidden testimonials-slider flex-1 min-w-0"
            style={{ width: "100%", maxWidth: "1100px" }}
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 90, damping: 18, mass: 0.8 },
                  opacity: { duration: 0.35, ease: "easeInOut" },
                  scale: { duration: 0.35, ease: "easeInOut" }
                }}
                className="testimonials-slide w-full"
              >
                {/* 5 Stars */}
                <div className="testimonials-stars flex gap-1.5 justify-center mb-6 text-[#FFD740]" style={{ fontSize: "32px", lineHeight: 1 }}>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>

                <p
                  className="text-center text-[#010C6F] testimonials-quote-text"
                  style={{
                    fontFamily: "'Prompt', sans-serif",
                    fontSize: "24px",
                    lineHeight: "32px",
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

        <div className="testimonials-author-slot">
          <AnimatePresence mode="wait">
            {TESTIMONIALS[current].name && (
              <motion.p
                key={`name-${current}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="font-bold m-0"
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
        </div>

      </div>
    </section>
  );
};
