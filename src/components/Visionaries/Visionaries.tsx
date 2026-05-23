"use client";

import React from "react";
import Image from "next/image";

const visionaries = [
  {
    id: 1,
    name: "Danielle Strickland",
    credentials: "BCBA, LBA",
    role: "Co-Founder",
    quote: '"Dedicated to the science of behavior and the art of human connection…"',
    image: "/images/visionary.png",
  },
  {
    id: 2,
    name: "Sheneice Willis Lewis",
    credentials: "BCBA, LBA",
    role: "Co-Founder",
    quote: '"Empowering families through structured, compassionate intervention strategies…"',
    image: "/images/visionary.png",
  },
];

export const Visionaries: React.FC = () => {
  return (
    <section
      className="w-full max-w-[1440px] mx-auto py-10 md:py-16 px-4 sm:px-8 md:px-16 lg:px-20"
      style={{
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        gap: "32px",
      }}
    >
      {/* HEADING */}
      <div className="w-full max-w-[1280px]">
        <h2
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "36px",
            fontWeight: "900",
            color: "#1a1a1a",
            margin: 0,
          }}
        >
          The{" "}
          <span style={{ color: "#FF4880" }}>Visionaries</span>
        </h2>
      </div>

      {/* CARDS ROW — stacks on mobile */}
      <div
        className="w-full max-w-[1280px] flex flex-col md:flex-row gap-6 md:gap-12 items-center"
      >
        {visionaries.map((person) => (
          <div
            key={person.id}
            className="w-full md:w-[616px] h-auto md:h-[300px]"
            style={{
              borderRadius: "22px",
              backgroundColor: "#FFDC68",
              display: "flex",
              flexDirection: "row",
              overflow: "hidden",
              position: "relative",
              flexShrink: 0,
            }}
          >
            {/* Circle background behind image */}
            <div
              className="hidden sm:block"
              style={{
                position: "absolute",
                left: "-30px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "240px",
                height: "240px",
                borderRadius: "50%",
                backgroundColor: "#FFCC26",
                zIndex: 0,
              }}
            />

            {/* IMAGE */}
            <div
              className="w-[120px] sm:w-[160px] md:w-[200px] h-[200px] sm:h-[250px] md:h-[300px]"
              style={{
                position: "relative",
                flexShrink: 0,
                zIndex: 1,
              }}
            >
              <Image
                src={person.image}
                alt={person.name}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* TEXT */}
            <div
              style={{
                flex: 1,
                padding: "20px 16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                zIndex: 1,
              }}
            >
              <div>
                <h3
                  className="text-[18px] sm:text-[20px] md:text-[24px]"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: "900",
                    color: "#1a1a1a",
                    margin: "0 0 6px 0",
                  }}
                >
                  {person.name}
                </h3>
                <p
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#333",
                    margin: "0 0 2px 0",
                  }}
                >
                  {person.credentials}
                </p>
                <p
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "13px",
                    fontWeight: "400",
                    color: "#555",
                    margin: 0,
                  }}
                >
                  {person.role}
                </p>
              </div>

              <p
                className="text-[13px] md:text-[14px]"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: "600",
                  fontStyle: "italic",
                  color: "#333",
                  lineHeight: "1.6",
                  margin: "12px 0 0 0",
                }}
              >
                {person.quote}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
