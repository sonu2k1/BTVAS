"use client";

import React, { useState } from "react";
import Image from "next/image";

const tabs = ["All", "Core Leadership Team", "Operations Leadership Team", "Clinical Excellence Team", "Team Leads & Specialists"];

const teamMembers = [
  {
    id: 1,
    name: "Danielle Strickland",
    credentials: "BCBA, LBA",
    role: "Co-Founder",
    image: "/images/0O3A2213.jpg",
    thumb: "/images/0O3A2213.jpg",
    quote: `"Seeing beyond the diagnosis means looking at each child for who they truly are not just their challenges, but their strengths and possibilities. I focus on what a child can achieve, not just where they are today. I'm here to support them every step of the way while helping families feel hopeful about their child's future. A diagnosis is just one part of their story; it does not define who they are or all that they can achieve. With every small success is a big celebration not just for us, but for the families we service. Being a part of a child's growth and development will always be something I am so proud to be a part of. We not only create relationships with our kiddos, but also the families we service. It gives the family a sense of hope. The word beyond is what you can only imagine and we put that back into the work that we do to ensure we show up daily by going beyond working on skills, but building life long skills that will continue once they go on to school and into adulthood.\nWith the right support, they can grow, succeed, and thrive here at Beyond The View Autism services."`,
  },
  {
    id: 2,
    name: "Team Member 2",
    credentials: "BCBA, LBA",
    role: "Co-Founder",
    image: "/images/0O3A2227.jpg",
    thumb: "/images/0O3A2227.jpg",
    quote: `"Empowering families through structured, compassionate intervention strategies."`,
  },
  {
    id: 3,
    name: "Team Member 3",
    credentials: "BCBA",
    role: "Clinical Lead",
    image: "/images/0O3A2256.jpg",
    thumb: "/images/0O3A2256.jpg",
    quote: `"Every child deserves a champion."`,
  },
  {
    id: 4,
    name: "Team Member 4",
    credentials: "LBA",
    role: "Specialist",
    image: "/images/0O3A2274.jpg",
    thumb: "/images/0O3A2274.jpg",
    quote: `"Dedicated to making a difference every day."`,
  },
  {
    id: 5,
    name: "Team Member 5",
    credentials: "BCBA",
    role: "Team Lead",
    image: "/images/0O3A2288.jpg",
    thumb: "/images/0O3A2288.jpg",
    quote: `"Building bridges between families and progress."`,
  },
  {
    id: 6,
    name: "Team Member 6",
    credentials: "RBT",
    role: "Therapist",
    image: "/images/0O3A2291.jpg",
    thumb: "/images/0O3A2291.jpg",
    quote: `"Committed to celebrating every small victory."`,
  },
  {
    id: 7,
    name: "Team Member 7",
    credentials: "RBT",
    role: "Therapist",
    image: "/images/0O3A2308.jpg",
    thumb: "/images/0O3A2308.jpg",
    quote: `"Compassion is at the heart of what we do."`,
  },
  {
    id: 8,
    name: "Team Member 8",
    credentials: "RBT",
    role: "Therapist",
    image: "/images/0O3A2316.jpg",
    thumb: "/images/0O3A2316.jpg",
    quote: `"Helping children reach their full potential."`,
  },
  {
    id: 9,
    name: "Team Member 9",
    credentials: "BCBA",
    role: "Clinical Lead",
    image: "/images/0O3A2322.jpg",
    thumb: "/images/0O3A2322.jpg",
    quote: `"Creating welcoming spaces where all abilities are celebrated."`,
  },
  {
    id: 10,
    name: "Team Member 10",
    credentials: "RBT",
    role: "Therapist",
    image: "/images/0O3A2361.jpg",
    thumb: "/images/0O3A2361.jpg",
    quote: `"Every family deserves compassionate care."`,
  },
  {
    id: 11,
    name: "Team Member 11",
    credentials: "RBT",
    role: "Therapist",
    image: "/images/0O3A2375.jpg",
    thumb: "/images/0O3A2375.jpg",
    quote: `"We work together with families to achieve the best outcomes."`,
  },
  {
    id: 12,
    name: "Team Member 12",
    credentials: "RBT",
    role: "Therapist",
    image: "/images/0O3A2390.jpg",
    thumb: "/images/0O3A2390.jpg",
    quote: `"Acting with honesty and transparency in everything we do."`,
  },
  {
    id: 13,
    name: "Team Member 13",
    credentials: "RBT",
    role: "Therapist",
    image: "/images/0O3A2402.jpg",
    thumb: "/images/0O3A2402.jpg",
    quote: `"Nurturing growth beyond the horizon."`,
  },
];

export const OurTeam: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedMember, setSelectedMember] = useState(teamMembers[0]);

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <section
        className="w-full max-w-[1440px] mx-auto py-10 md:py-16 px-4 sm:px-8 md:px-16"
        style={{
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        {/* INNER WRAPPER */}
        <div
          className="w-full max-w-[1280px] flex flex-col items-center gap-6"
        >
          {/* HEADING */}
          <h2
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "36px",
              fontWeight: "900",
              color: "#1a1a1a",
              margin: 0,
              textAlign: "center",
            }}
          >
            Our <span style={{ color: "#FF4880" }}>Team</span>
          </h2>

          {/* TABS — horizontally scrollable on mobile */}
          <div
            className="w-full max-w-[968px] flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  height: "36px",
                  padding: "0 20px",
                  borderRadius: "40px",
                  border: activeTab === tab ? "none" : "1px solid #ddd",
                  backgroundColor: activeTab === tab ? "#010C6F" : "transparent",
                  color: activeTab === tab ? "#ffffff" : "#555",
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "14px",
                  fontWeight: activeTab === tab ? "800" : "600",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* MAIN CONTENT — Desktop: horizontal 3-panel / Mobile: stacked */}
          <div
            className="w-full flex flex-col lg:flex-row gap-6"
          >
            {/* SMALL THUMBNAILS — horizontal scroll on mobile, vertical on desktop */}
            <div
              className="flex lg:flex-col gap-3 lg:gap-4 overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto lg:w-[100px] lg:max-h-[560px] flex-shrink-0 pb-2 lg:pb-0 no-scrollbar"
            >
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  onClick={() => setSelectedMember(member)}
                  className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px]"
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    cursor: "pointer",
                    flexShrink: 0,
                    border: selectedMember.id === member.id ? "3px solid #753DBE" : "3px solid transparent",
                    boxSizing: "border-box",
                    position: "relative",
                  }}
                >
                  <Image
                    src={member.thumb}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* BIG IMAGE + DESCRIPTION — stacked on mobile, side-by-side on desktop */}
            <div className="flex flex-col md:flex-row gap-6 flex-1">
              {/* BIG IMAGE */}
              <div
                className="w-full md:w-[400px] lg:w-[560px] aspect-square md:aspect-auto md:h-[400px] lg:h-[560px]"
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  flexShrink: 0,
                  position: "relative",
                }}
              >
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* DESCRIPTION */}
              <div
                className="w-full md:flex-1 lg:max-h-[560px] overflow-y-auto no-scrollbar"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <h3
                  className="text-[24px] sm:text-[28px] md:text-[32px]"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: "900",
                    color: "#1a1a1a",
                    margin: "0 0 4px 0",
                  }}
                >
                  {selectedMember.name}
                </h3>
                <p
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "#333",
                    margin: 0,
                  }}
                >
                  {selectedMember.credentials}
                </p>
                <p
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "13px",
                    fontWeight: "400",
                    color: "#777",
                    margin: "0 0 12px 0",
                  }}
                >
                  {selectedMember.role}
                </p>
                <p
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    fontStyle: "italic",
                    color: "#333",
                    lineHeight: "1.8",
                    margin: 0,
                    whiteSpace: "pre-line",
                  }}
                >
                  {selectedMember.quote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
