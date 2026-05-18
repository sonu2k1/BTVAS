"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full max-w-[1400px] mx-auto flex items-center justify-center overflow-hidden rounded-[1rem] md:rounded-[1.25rem] -top-[57px] mt-0 min-h-[520px] md:min-h-[700px] lg:min-h-[900px]">
      {/* Background Image */}
      <motion.div className="absolute inset-0 z-0">
        <Image
          src="/images/Hero.webp"
          alt="Children in superhero costumes smiling"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Subtle dark overlay for better text contrast */}
      <motion.div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/20 via-black/5 to-transparent" />

      {/* Content — bottom-left positioned like screenshot */}
      <motion.div className="absolute bottom-16 left-8 z-[2]">
        {/* OUTER BORDER */}
        <div
          style={{
            width: "auto",
            maxWidth: "700px",
            height: "382px",
            borderRadius: "22px",
            border: "3px solid #4a2a8a",
            padding: "3px",
            boxSizing: "border-box",
            flexShrink: 0,
          }}
        >
          {/* INNER CONTAINER */}
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "18px",
              border: "2px dashed rgba(255,255,255,0.6)",
              boxSizing: "border-box",
              overflow: "hidden",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "28px 40px",
              backgroundColor: "transparent",
            }}
          >
            {/* PURPLE OVERLAY */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, rgba(117,61,190,0.7) 55%, rgba(117,61,190,0.3) 100%)",
                zIndex: 1,
              }}
            />

            {/* CONTENT */}
            <div style={{ position: "relative", zIndex: 2 }}>
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "34px",
                  fontWeight: "400",
                  color: "#ffffff",
                  lineHeight: "1.2",
                  margin: "0 0 2px 0",
                  letterSpacing: "0.5px",
                }}
              >
                Seeing Every Child
              </p>

              <h1
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "54px",
                  fontWeight: "900",
                  color: "#FFE600",
                  lineHeight: "1.1",
                  margin: "0 0 18px 0",
                }}
              >
                Beyond Their Diagnosis
              </h1>

              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "15.5px",
                  fontWeight: "600",
                  fontStyle: "italic",
                  color: "#ffffff",
                  lineHeight: "1.75",
                  margin: 0,
                  maxWidth: "560px",
                }}
              >
                "Every child deserves a champion-an adult who will never give up on
                them, who understands the power of connection and insists that they
                become the best that they can possibly be" -Rita Pierson
              </p>
            </div>

            {/* CTA BUTTON */}
            <button
              style={{
                position: "relative",
                zIndex: 2,
                backgroundColor: "#FFE600",
                color: "#1a1a1a",
                fontFamily: "'Nunito', sans-serif",
                fontSize: "16px",
                fontWeight: "800",
                border: "none",
                borderRadius: "40px",
                padding: "14px 36px",
                cursor: "pointer",
                width: "fit-content",
                marginTop: "0px",
              }}
            >
              Request Visit Now
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};