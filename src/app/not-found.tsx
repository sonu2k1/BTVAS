"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <>
      {/* Page Title for SEO and Browser tab */}
      <title>Page Not Found | Beyond The View Autism Services</title>

      <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#f0f9ff] via-[#fffdf8] to-[#fffdf8] overflow-hidden px-6 py-12 text-center">
        
        {/* Animated Background Clouds */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Cloud 1 */}
          <motion.div
            className="absolute top-[15%] left-[8%] opacity-30 md:opacity-50"
            animate={{
              x: [-20, 20, -20],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg width="120" height="70" viewBox="0 0 120 70" fill="none">
              <path
                d="M30 40c0-11 9-20 20-20 2 0 4 0 6 1a15 15 0 0128-5 20 20 0 0136 14c0 1 0 2 0 3a18 18 0 01-10 33H30c-11 0-20-9-20-20a20 20 0 0120-20z"
                fill="#ffffff"
              />
            </svg>
          </motion.div>

          {/* Cloud 2 */}
          <motion.div
            className="absolute top-[25%] right-[10%] opacity-25 md:opacity-40"
            animate={{
              x: [20, -20, 20],
              y: [0, 8, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg width="160" height="90" viewBox="0 0 160 90" fill="none">
              <path
                d="M40 50c0-14 11-25 25-25 3 0 5 0 8 1a19 19 0 0135-6 25 25 0 0145 18c0 1 0 3 0 4a22 22 0 01-13 41H40c-14 0-25-11-25-25a25 25 0 0125-25z"
                fill="#ffffff"
              />
            </svg>
          </motion.div>

          {/* Cloud 3 */}
          <motion.div
            className="absolute bottom-[20%] left-[15%] opacity-20 md:opacity-30 hidden sm:block"
            animate={{
              x: [-15, 15, -15],
              y: [0, 5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
              <path
                d="M25 35c0-8 7-15 15-15 2 0 4 0 5 1a12 12 0 0122-4 15 15 0 0128 11c0 1 0 2 0 3a14 14 0 01-8 25H25c-8 0-15-7-15-15a15 15 0 0115-15z"
                fill="#ffffff"
              />
            </svg>
          </motion.div>
        </div>

        {/* Core Content Container */}
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          
          {/* Large Floating Interactive 404 Balloon Illustration */}
          <motion.div
            className="relative w-64 h-80 mb-8 cursor-grab active:cursor-grabbing"
            animate={{
              y: [0, -20, 0],
              rotate: [-3, 3, -3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Balloon SVG */}
            <svg
              viewBox="0 0 200 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full filter drop-shadow-[0_15px_20px_rgba(11,15,138,0.15)]"
            >
              {/* Balloon Body (Pink) */}
              <ellipse cx="100" cy="110" rx="75" ry="90" fill="#f94a8a" />
              
              {/* Shimmer / Highlight */}
              <ellipse cx="75" cy="75" rx="20" ry="30" fill="#ff9ec0" opacity="0.4" />

              {/* Balloon Tie Knot */}
              <path d="M92 198 L100 208 L108 198 Z" fill="#f94a8a" />

              {/* Balloon String */}
              <path
                d="M100 208 Q115 235 95 260"
                stroke="#7e5cb3"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                opacity="0.8"
              />

              {/* Basket/Label hanging from the Balloon */}
              <g transform="translate(60, 140)">
                {/* Small string connections */}
                <line x1="10" y1="0" x2="15" y2="25" stroke="#fffdf8" strokeWidth="2" strokeDasharray="2 2" />
                <line x1="70" y1="0" x2="65" y2="25" stroke="#fffdf8" strokeWidth="2" strokeDasharray="2 2" />

                {/* The "404" Signboard */}
                <rect x="5" y="22" width="70" height="38" rx="8" fill="#fee70a" stroke="#00084b" strokeWidth="2.5" />
                <text
                  x="40"
                  y="48"
                  textAnchor="middle"
                  fill="#00084b"
                  fontWeight="900"
                  fontSize="22"
                  fontFamily="var(--font-sans)"
                  letterSpacing="1"
                >
                  404
                </text>
              </g>
            </svg>

            {/* Little floating stars around the balloon */}
            <motion.div
              className="absolute -top-2 -right-2 text-[#fee70a] text-3xl font-bold"
              animate={{ scale: [0.8, 1.2, 0.8], rotate: [0, 45, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ✦
            </motion.div>
            <motion.div
              className="absolute bottom-16 -left-4 text-[#7e5cb3] text-2xl font-bold"
              animate={{ scale: [1.2, 0.8, 1.2], rotate: [0, -45, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              ✦
            </motion.div>
          </motion.div>

          {/* Typography */}
          <div className="playful-badge-wrapper mb-6">
            <div className="playful-badge-shadow" />
            <span className="playful-badge">
              Out of Bounds
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl font-extrabold text-navy-deep leading-tight tracking-tight mb-4"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Floated Beyond Our View
          </h1>

          <p className="text-base sm:text-lg text-[#00084bab]/80 max-w-md mx-auto mb-8 font-medium leading-relaxed">
            The page you are looking for has drifted away. Let&apos;s get you back to familiar sights.
          </p>

          {/* Navigation Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 w-full mt-2 relative z-20">
            <div className="playful-btn-wrapper">
              <div className="playful-btn-shadow pink" />
              <Link href="/" className="playful-btn pink">
                Float Back Home
              </Link>
            </div>
            <div className="playful-btn-wrapper">
              <div className="playful-btn-shadow purple" />
              <Link href="/#contact" className="playful-btn purple">
                Get in Touch
              </Link>
            </div>
          </div>

          <style>{`
            .playful-badge-wrapper {
              position: relative;
              display: inline-block;
              width: 150px;
              height: 38px;
              flex-shrink: 0;
            }

            .playful-badge-shadow {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 150px;
              height: 30px;
              background: #c93360;
              border-radius: 15px;
            }

            .playful-badge {
              position: absolute;
              top: 0;
              left: 0;
              width: 150px;
              height: 30px;
              background: #FF4880;
              color: #ffffff;
              font-family: 'Comic Sans MS', 'Chalkboard SE', cursive;
              font-size: 12px;
              font-weight: 800;
              text-transform: uppercase;
              border-radius: 15px;
              display: flex;
              align-items: center;
              justify-content: center;
              letter-spacing: 0.5px;
            }

            .playful-btn-wrapper {
              position: relative;
              display: inline-block;
              width: 198px;
              height: 50px;
              flex-shrink: 0;
            }

            .playful-btn-shadow {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 198px;
              height: 42px;
              border-radius: 21px;
            }

            .playful-btn-shadow.pink {
              background: #c93360;
            }

            .playful-btn-shadow.purple {
              background: #5d3f8a;
            }

            .playful-btn {
              position: absolute;
              top: 0;
              left: 0;
              width: 198px;
              height: 42px;
              font-family: 'Comic Sans MS', 'Chalkboard SE', cursive;
              font-size: 18px;
              font-weight: 700;
              border: none;
              border-radius: 21px;
              cursor: pointer;
              white-space: nowrap;
              text-decoration: none;
              display: flex;
              align-items: center;
              justify-content: center;
              letter-spacing: 0.2px;
              transition: top 0.1s ease, background-color 0.2s ease;
            }

            .playful-btn.pink {
              background: #FF4880;
              color: #ffffff;
            }

            .playful-btn.pink:hover {
              background-color: #ff5f95;
              top: 2px;
            }

            .playful-btn.pink:active {
              top: 8px;
              background-color: #e03570;
            }

            .playful-btn.purple {
              background: #7e5cb3;
              color: #ffffff;
            }

            .playful-btn.purple:hover {
              background-color: #9373c4;
              top: 2px;
            }

            .playful-btn.purple:active {
              top: 8px;
              background-color: #6c4ca1;
            }
          `}</style>
        </div>
      </div>
    </>
  );
}
