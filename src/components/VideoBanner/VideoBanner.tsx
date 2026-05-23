"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const VideoBanner: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video" className="w-full bg-[#FFFDF8]">
      <div
        className="relative overflow-hidden mx-auto"
        style={{ width: "1440px", height: "555px" }}
      >
        {!isPlaying ? (
          <>
            <Image
              src="/images/children-field-banner.png"
              alt="Happy children running together in a sunlit meadow"
              width={1440}
              height={555}
              className="w-full h-full object-cover object-center"
              priority
            />

            {/* Play Button Overlay */}
            <motion.button
              onClick={() => setIsPlaying(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
              aria-label="Play video"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#FFD740] rounded-full blur-md opacity-50 scale-125" />
                <div className="relative w-[70px] h-[70px] md:w-[80px] md:h-[80px] bg-[#FFD740] rounded-full flex items-center justify-center shadow-xl">
                  <svg
                    width="28"
                    height="32"
                    viewBox="0 0 28 32"
                    fill="none"
                    className="ml-1"
                  >
                    <path
                      d="M26 14.268C27.333 15.038 27.333 16.962 26 17.732L4 30.434C2.667 31.204 1 30.242 1 28.702L1 3.298C1 1.758 2.667 0.796 4 1.566L26 14.268Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </motion.button>

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
          </>
        ) : (
          <div className="w-full h-full bg-black flex items-center justify-center">
            <p className="text-white text-lg font-semibold">
              Video Player — Replace with actual video embed
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
