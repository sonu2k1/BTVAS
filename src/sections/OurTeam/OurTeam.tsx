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
    image: "/images/team/Member-1.jpg",
    thumb: "/images/team/Member-1.jpg",
    quote: `"Seeing beyond the diagnosis means looking at each child for who they truly are not just their challenges, but their strengths and possibilities. I focus on what a child can achieve, not just where they are today. I'm here to support them every step of the way while helping families feel hopeful about their child's future. A diagnosis is just one part of their story; it does not define who they are or all that they can achieve. With every small success is a big celebration not just for us, but for the families we service. Being a part of a child's growth and development will always be something I am so proud to be a part of. We not only create relationships with our kiddos, but also the families we service. It gives the family a sense of hope. The word beyond is what you can only imagine and we put that back into the work that we do to ensure we show up daily by going beyond working on skills, but building life long skills that will continue once they go on to school and into adulthood.\nWith the right support, they can grow, succeed, and thrive here at Beyond The View Autism services."`,
  },
  {
    id: 2,
    name: "Sheneice Willis Lewis",
    credentials: "BCBA, LBA",
    role: "Co-Founder",
    image: "/images/team/Member-2.jpg",
    thumb: "/images/team/Member-2.jpg",
    quote: `"Empowering families through structured, compassionate intervention strategies."`,
  },
  {
    id: 3,
    name: "Shanika Marks",
    credentials: "RBT Lead",
    role: "Clinical Lead",
    image: "/images/team/Member-3.jpg",
    thumb: "/images/team/Member-3.jpg",
    quote: `"Every child deserves a champion."`,
  },
  {
    id: 4,
    name: "Sheckeema Taylor",
    credentials: "Director of Operations",
    role: "Specialist",
    image: "/images/team/Member-4.jpg",
    thumb: "/images/team/Member-4.jpg",
    quote: `"Dedicated to making a difference every day."`,
  },
  {
    id: 5,
    name: "Alexander Jones",
    credentials: "RBT Lead",
    role: "Trainer",
    image: "/images/team/Member-5.jpg",
    thumb: "/images/team/Member-5.jpg",
    quote: `"Building bridges between families and progress."`,
  },
  {
    id: 6,
    name: "Eternia Richmond",
    credentials: "RBT",
    role: "Morrow Clinic Operations Manager",
    image: "/images/team/Member-6.jpg",
    thumb: "/images/team/Member-6.jpg",
    quote: `"Committed to celebrating every small victory."`,
  },
  {
    id: 7,
    name: "Aliciante Parker",
    credentials: "BCBA, LBA",
    role: " ",
    image: "/images/team/Member-7.jpg",
    thumb: "/images/team/Member-7.jpg",
    quote: `"Compassion is at the heart of what we do."`,
  },
  {
    id: 8,
    name: "Keajia Campbell",
    credentials: "BCBA, LBA",
    role: " ",
    image: "/images/team/Member-8.jpg",
    thumb: "/images/team/Member-8.jpg",
    quote: `"Helping children reach their full potential."`,
  },
  {
    id: 9,
    name: "Kianna Jemison",
    credentials: "College Park Clinic Coordinator",
    role: " ",
    image: "/images/team/Member-9.jpg",
    thumb: "/images/team/Member-9.jpg",
    quote: `"Creating welcoming spaces where all abilities are celebrated."`,
  },
  {
    id: 10,
    name: "Terricka Comer",
    credentials: "RBT Leader",
    role: "Trainer and Clinical Specialist",
    image: "/images/team/Member-10.jpg",
    thumb: "/images/team/Member-10.jpg",
    quote: `"Every family deserves compassionate care."`,
  },
  {
    id: 11,
    name: "Evette Sims",
    credentials: "BCBA",
    role: " ",
    image: "/images/team/Member-11.jpg",
    thumb: "/images/team/Member-11.jpg",
    quote: `"We work together with families to achieve the best outcomes."`,
  },
  {
    id: 12,
    name: "Catarras Black",
    credentials: "RBT",
    role: "Clinical Specialist",
    image: "/images/team/Member-12.jpg",
    thumb: "/images/team/Member-12.jpg",
    quote: `"Acting with honesty and transparency in everything we do."`,
  },
  {
    id: 13,
    name: "Jeff Jean-Baptiste",
    credentials: "BCBA, LBA",
    role: " ",
    image: "/images/team/Member-13.jpg",
    thumb: "/images/team/Member-13.jpg",
    quote: `"Nurturing growth beyond the horizon."`,
  },
  {
    id: 14,
    name: "Kendall Davis",
    credentials: "RBT Lead",
    role: " ",
    image: "/images/team/Member-14.jpeg",
    thumb: "/images/team/Member-14.jpeg",
    quote: `"Nurturing growth beyond the horizon."`,
  },
];

export const OurTeam: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedMember, setSelectedMember] = useState(teamMembers[0]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap');

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .team-thumb-item {
          position: relative;
          transition: all 0.3s ease;
        }
        .team-thumb-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(1, 12, 111, 0.55);
          z-index: 2;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .team-thumb-item:hover .team-thumb-overlay {
          opacity: 0.15;
        }
        @media (max-width: 1024px) {
          .team-section {
            width: 100% !important;
            height: auto !important;
            padding: 40px 16px !important;
          }
          .team-wrapper {
            width: 100% !important;
            height: auto !important;
            gap: 20px !important;
          }
          .team-tabs {
            width: 100% !important;
            height: auto !important;
            overflow-x: auto !important;
            padding-bottom: 8px !important;
            margin-bottom: 8px !important;
          }
          .team-content-row {
            width: 100% !important;
            height: auto !important;
            flex-direction: column !important;
            gap: 24px !important;
          }
          .team-thumbs {
            width: 100% !important;
            height: auto !important;
            flex-direction: row !important;
            overflow-x: auto !important;
            gap: 12px !important;
            padding-bottom: 8px !important;
          }
          .team-thumb-item {
            width: 80px !important;
            height: 80px !important;
          }
          .team-big-img-wrap {
            width: 100% !important;
            max-width: 320px !important;
            height: 320px !important;
            margin: 0 auto !important;
          }
          .team-desc-wrap {
            width: 100% !important;
            height: auto !important;
            text-align: center !important;
            overflow-y: visible !important;
          }
        }
      `}</style>
      <section
        className="team-section"
        style={{
          width: "1440px",
          height: "800px",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          margin: "0 auto",
        }}
      >
        {/* INNER WRAPPER */}
        <div
          className="team-wrapper"
          style={{
            width: "1280px",
            height: "750px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* HEADING */}
          <h2
            style={{
              fontFamily: "'Mochiy Pop One', sans-serif",
              fontSize: "36px",
              fontWeight: "400",
              color: "#1a1a1a",
              margin: 0,
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            <span style={{ textDecoration: "underline", textDecorationColor: "#FF4880", textUnderlineOffset: "8px", textDecorationThickness: "4px" }}>Our</span>{" "}
            <span style={{ color: "#FF4880" }}>Team</span>
          </h2>

          {/* TABS */}
          <div
            className="team-tabs no-scrollbar"
            style={{
              width: "968px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexShrink: 0,
            }}
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

          {/* MAIN CONTENT */}
          <div
            className="team-content-row"
            style={{
              width: "1232px",
              height: "560px",
              display: "flex",
              gap: "24px",
              flexShrink: 0,
            }}
          >
            {/* SMALL THUMBNAILS */}
            <div
              className="team-thumbs no-scrollbar"
              style={{
                width: "100px",
                height: "560px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                flexShrink: 0,
                overflowY: "auto",
              }}
            >
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  onClick={() => setSelectedMember(member)}
                  className="team-thumb-item"
                  style={{
                    width: "100px",
                    height: "100px",
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
                    src={`${member.thumb}?v=2`}
                    alt={member.name}
                    fill
                    sizes="100px"
                    className="object-cover object-top"
                  />
                  <div
                    className="team-thumb-overlay"
                    style={{
                      opacity: selectedMember.id === member.id ? 0 : 1,
                    }}
                  />
                </div>
              ))}
            </div>

            {/* BIG IMAGE */}
            <div
              className="team-big-img-wrap"
              style={{
                width: "560px",
                height: "560px",
                borderRadius: "16px",
                overflow: "hidden",
                flexShrink: 0,
                position: "relative",
              }}
            >
              <Image
                src={`${selectedMember.image}?v=2`}
                alt={selectedMember.name}
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover object-top"
                priority
              />
            </div>

            {/* DESCRIPTION */}
            <div
              className="team-desc-wrap no-scrollbar"
              style={{
                width: "524px",
                height: "518px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                flexShrink: 0,
                overflowY: "auto",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "32px",
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
      </section>
    </>
  );
};
