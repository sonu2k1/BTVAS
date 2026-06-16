"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface TeamMember {
  id: number | string;
  name: string;
  credentials: string;
  role: string;
  image: string;
  thumb: string;
  quote: string;
  category: string | string[];
}

const tabs = ["All", "Core Leadership Team", "Operations Leadership Team", "Clinical Excellence Team", "Team Leads & Specialists"];

const teamMembers = [
  {
    id: 1,
    name: "Danielle Strickland",
    credentials: "BCBA, LBA",
    role: "Co-Founder",
    image: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-1.jpg",
    thumb: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-1.jpg",
    quote: `"Seeing beyond the diagnosis means looking at each child for who they truly are not just their challenges, but their strengths and possibilities. I focus on what a child can achieve, not just where they are today. I'm here to support them every step of the way while helping families feel hopeful about their child's future. A diagnosis is just one part of their story; it does not define who they are or all that they can achieve. With every small success is a big celebration not just for us, but for the families we service. Being a part of a child's growth and development will always be something I am so proud to be a part of. We not only create relationships with our kiddos, but also the families we service. It gives the family a sense of hope. The word beyond is what you can only imagine and we put that back into the work that we do to ensure we show up daily by going beyond working on skills, but building life long skills that will continue once they go on to school and into adulthood.\nWith the right support, they can grow, succeed, and thrive here at Beyond The View Autism services."`,
    category: ["Core Leadership Team", "Operations Leadership Team"],
  },
  {
    id: 2,
    name: "Sheneice Willis Lewis",
    credentials: "BCBA, LBA",
    role: "Co-Founder",
    image: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-2.jpg",
    thumb: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-2.jpg",
    quote: `"As a CEO, what does “seeing beyond the diagnosis” mean to me? In one word—Faith.\n\nFaith is the ability to see beyond what is immediately in front of you. It is choosing to believe in a child’s potential, even when progress feels slow, uncertain, or unseen. It is recognizing that a diagnosis does not define a child’s future—it is only one part of their story.\n\nTo me, seeing beyond the diagnosis means holding a vision for who that child is destined to become. It means showing up every day, committed to the small steps that lead to meaningful growth—steps that may not always be visible in the moment, but are powerful over time.\n\nThere is a unique kind of joy in this work. Not just in the milestones we can measure, but in the belief that we are part of something bigger. We are helping shape confidence, independence, and possibility—one interaction, one breakthrough, one moment at a time.\n\nThis mindset is rooted in both hope and faith. Hope for what is possible, and faith in the journey it takes to get there.\n\nI also recognize that for many families, a diagnosis can feel overwhelming. It can come with fear, uncertainty, and questions about the future. But what I want families to understand is this: their child is not limited by a diagnosis. They are filled with potential, purpose, and GREATNESS.\n\nIn many ways, these families are raising individuals who will defy expectations, rewrite narratives, and show the world new perspectives—true superheroes in their own right.\n\nAnd our role is to walk alongside them—to believe when it’s hard, to support when it’s needed, and to never lose sight of what’s possible.\n\nBecause seeing beyond the diagnosis is not just what we do—it’s who we are."`,
    category: ["Core Leadership Team", "Operations Leadership Team"],
  },
  {
    id: 3,
    name: "Shanika Marks",
    credentials: "RBT Lead",
    role: "Clinical Lead",
    image: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-3.jpg",
    thumb: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-3.jpg",
    quote: `"What excites me the most about ABA is being able to make a positive difference. I love supporting children and families in reaching goals that matter in their everyday lives."`,
    category: ["Team Leads & Specialists"],
  },
  {
    id: 4,
    name: "Sheckeema Taylor",
    credentials: "Director of Operations",
    role: "Administrator",
    image: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-4.jpg",
    thumb: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-4.jpg",
    quote: `"One of the most impactful moments in my ABA career was witnessing our very first graduation ceremony. It was incredibly meaningful because it represented the culmination of consistent, collaborative effort from an entire support system of caregivers, loved ones, BCBAs, RBTs, and administrators all working toward a child’s individualized goals. In that moment, it was impossible not to reflect on where each child began, the barriers they overcame, and the progress they achieved over time. It was a powerful reminder that if followed through, ABA works, especially here at Beyond The View Autism Services!"`,
    category: ["Operations Leadership Team", "Core Leadership Team"],
  },
  {
    id: 5,
    name: "Alexander Jones",
    credentials: "RBT Lead",
    role: "Trainer",
    image: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-5.jpg",
    thumb: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-5.jpg",
    quote: `"ABA allows me to help develop young minds while making a difference for those who need it. Being given the opportunity to make an impact big or small excites me most about ABA."`,
    category: ["Team Leads & Specialists"],
  },
  {
    id: 6,
    name: "Eternia Richmond",
    credentials: "",
    role: "Morrow Clinic Operations Manager",
    image: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-6.jpg",
    thumb: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-6.jpg",
    quote: `"The moment that impacted me the most was when a child with severe behaviors had a breakthrough. Seeing their parents' relief showed me that I’m making a difference for the whole family."`,
    category: ["Operations Leadership Team"],
  },
  {
    id: 7,
    name: "Alicante Parker",
    credentials: "BCBA, LBA",
    role: " ",
    image: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-7.jpg",
    thumb: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-7.jpg",
    quote: `"Becoming a BCBA is more than a career for me—it’s a purposeful commitment to supporting meaningful growth and improving quality of life for others. I am passionate about helping individuals with autism and other developmental differences build skills, reach milestones, and access opportunities within their communities. Seeing that progress is what drives my work and reinforces my commitment to making a lasting, positive impact."`,
    category: ["Clinical Excellence Team"],
  },
  {
    id: 16,
    name: "Whitney Davis",
    credentials: "BCBA, LBA",
    role: " ",
    image: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Whitey.jpeg",
    thumb: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Whitey.jpeg",
    quote: `"My “why” for becoming a BCBA is rooted in my passion for helping children grow into their fullest potential, no matter what path they choose. I want to provide them with the tools, support, and encouragement they need to thrive in ways that are meaningful to them. Being part of their progress and celebrating their success is what drives me every day."`,
    category: [],
  },
  {
    id: 8,
    name: "Keajia Campbell",
    credentials: "BCBA, LBA",
    role: " ",
    image: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-8.jpg",
    thumb: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-8.jpg",
    quote: `"I became a BCBA because I love supporting children and celebrating the progress they make as they grow! I am dedicated to leading with compassion and focusing on meaningful change."`,
    category: ["Clinical Excellence Team"],
  },
  {
    id: 9,
    name: "Kianna Jamison",
    credentials: "College Park Clinic Coordinator",
    role: " ",
    image: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-9.jpg",
    thumb: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-9.jpg",
    quote: `"What is one moment in ABA that has impacted you the most? A moment where parents feel supported and truly heard by their child’s team working through challenging skills and behaviors."`,
    category: ["Operations Leadership Team"],
  },
  {
    id: 10,
    name: "Terricka Comer",
    credentials: "RBT Leader",
    role: "Trainer and Clinical Specialist",
    image: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-10.jpg",
    thumb: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-10.jpg",
    quote: `"What excites me the most about ABA is that I am able to spend every day living my purpose to make a difference in individuals lives and advocate for those who could not advocate for themselves. They didn’t choose this life, the life chose them."`,
    category: ["Team Leads & Specialists"],
  },
  {
    id: 11,
    name: "Evette Sims",
    credentials: "BCBA, LBA",
    role: " ",
    image: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-11.jpg",
    thumb: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-11.jpg",
    quote: `"I am motivated each day by the opportunity to be part of every client’s journey and to witness their growth and progress. My work is also driven by a desire to model dedication and purpose for my own children, showing them the value of meaningful work. Above all, I am committed to creating lasting change for my family by breaking generational barriers and building a stronger future."`,
    category: ["Clinical Excellence Team"],
  },
  {
    id: 12,
    name: "CaTarrus Black",
    credentials: "RBT",
    role: "Clinical Specialist",
    image: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-12.jpg",
    thumb: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-12.jpg",
    quote: `"My drive and inspiration each day stem from observing the gradual progression and development of those I am helping. Noticing the changes in their abilities and general wellbeing makes me see the importance of my job. This motivates me to continue caring for others through compassionate means."`,
    category: ["Team Leads & Specialists"],
  },
  {
    id: 14,
    name: "Kendall Davis",
    credentials: "RBT",
    role: "Clinical Specialist ",
    image: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-14.jpeg",
    thumb: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-14.jpeg",
    quote: `"I’m passionate about ABA because I genuinely love working with the kids and building meaningful connections with them each day. Watching them reach small but powerful milestones is incredibly rewarding and reminds me why this work matters. Seeing them grow in their independence in their own unique ways makes me proud to be part of their journey."`,
    category: [],
  },
  {
    id: 15,
    name: "Omega Springer",
    credentials: "RBT Lead",
    role: " ",
    image: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-15.png",
    thumb: "https://ik.imagekit.io/sonu2k1/TEst/Team/team/Member-15.png",
    quote: `"What excites most about ABA is getting to work closely with my clients, no matter where they’re starting from. I really love seeing those moments when things start to click, especially when they begin interacting with their peers in more natural and meaningful ways."`,
    category: [],
  },
];

const coreLeadershipGroup = {
  id: "core-group",
  name: "Core Leadership Team",
  credentials: "Co-Founders & Executives",
  role: "Beyond The View Autism Services",
  image: "https://ik.imagekit.io/sonu2k1/TEst/Groups/0O3A2459.jpg",
  thumb: "https://ik.imagekit.io/sonu2k1/TEst/Groups/0O3A2459.jpg",
  quote: `Our core leadership team is dedicated to meeting each child's individual needs, creating limitless opportunities for learning, and supporting each child on their journey to reach their full potential.`,
  category: "Core Leadership Team",
};

const operationsLeadershipGroup = {
  id: "operations-group",
  name: "Operations Leadership Team",
  credentials: "Management & Operations",
  role: "Beyond The View Autism Services",
  image: "https://ik.imagekit.io/sonu2k1/TEst/Groups/0O3A2462.jpg",
  thumb: "https://ik.imagekit.io/sonu2k1/TEst/Groups/0O3A2462.jpg",
  quote: `Our operations leadership team coordinates daily administrative functions, ensures compliance and safety, and manages scheduling so that children receive seamless, high-quality care.`,
  category: "Operations Leadership Team",
};

const clinicalExcellenceGroup1 = {
  id: "clinical-group-1",
  name: "Clinical Excellence Team",
  credentials: "BCBAs",
  role: "Beyond The View Autism Services",
  image: "https://ik.imagekit.io/sonu2k1/TEst/Groups/0O3A2474.jpg",
  thumb: "https://ik.imagekit.io/sonu2k1/TEst/Groups/0O3A2474.jpg",
  quote: `Our clinical excellence team of Board Certified Behavior Analysts (BCBAs) holds themselves to the highest standards of evidence-based practice, conducting thorough developmental assessments and tailoring individualized programs to nurture every child's full potential.`,
  category: "Clinical Excellence Team",
};



const teamLeadsGroup = {
  id: "team-leads-group",
  name: "Team Leads & Specialists",
  credentials: "Lead Clinicians & Trainers",
  role: "Beyond The View Autism Services",
  image: "https://ik.imagekit.io/sonu2k1/TEst/Groups/0O3A2486.jpg?updatedAt=1780326610914",
  thumb: "https://ik.imagekit.io/sonu2k1/TEst/Groups/0O3A2486.jpg?updatedAt=1780326610914",
  quote: `Our dedicated team of Registered Behavior Technicians Leads, Trainers, and Clinical Specialists works directly with children every day to execute behavior plans with fidelity, compassion, and energy.`,
  category: "Team Leads & Specialists",
};

const getImageUrl = (url: string) => {
  if (!url) return "";
  return url.includes("?") ? `${url}&v=3` : `${url}?v=3`;
};

export const OurTeam: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedMember, setSelectedMember] = useState<TeamMember>(teamMembers[0]);

  const filteredMembers = activeTab === "All"
    ? teamMembers
    : activeTab === "Core Leadership Team"
      ? [coreLeadershipGroup, ...teamMembers.filter((m) =>
        Array.isArray(m.category)
          ? m.category.includes(activeTab)
          : m.category === activeTab
      )]
      : activeTab === "Operations Leadership Team"
        ? [operationsLeadershipGroup, ...teamMembers.filter((m) =>
          Array.isArray(m.category)
            ? m.category.includes(activeTab)
            : m.category === activeTab
        )]
        : activeTab === "Clinical Excellence Team"
          ? [clinicalExcellenceGroup1, ...teamMembers.filter((m) =>
            Array.isArray(m.category)
              ? m.category.includes(activeTab)
              : m.category === activeTab
          )]
          : activeTab === "Team Leads & Specialists"
            ? [teamLeadsGroup, ...teamMembers.filter((m) =>
              Array.isArray(m.category)
                ? m.category.includes(activeTab)
                : m.category === activeTab
            )]
            : teamMembers.filter((m) =>
              Array.isArray(m.category)
                ? m.category.includes(activeTab)
                : m.category === activeTab
            );

  const isGroup = selectedMember.id.toString().includes("group");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap');

        .team-section {
          background: transparent !important;
        }

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
        .team-thumb-item:not(.is-group-thumb) {
          width: 100px !important;
          height: 100px !important;
          border-radius: 12px !important;
        }
        .team-thumb-item.is-group-thumb {
          width: 100px !important;
          height: 67px !important;
          border-radius: 20px !important;
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
        @media (min-width: 1025px) and (max-width: 1439px) {
          .team-section {
            height: auto !important;
          }
          .team-wrapper {
            height: auto !important;
          }
          .team-content-row {
            width: 100% !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
          .team-thumbs {
            width: 100% !important;
            max-width: 100% !important;
            overflow-x: auto !important;
            flex-direction: row !important;
          }
          .team-big-img-wrap {
            max-width: 280px !important;
          }
          .team-desc-container {
            width: 100% !important;
            max-width: 480px !important;
          }
        }

        @media (max-width: 1024px) {
          .team-section {
            width: 100% !important;
            height: auto !important;
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
            align-items: center !important;
            overflow-x: auto !important;
            gap: 12px !important;
            padding-bottom: 8px !important;
          }
          .team-thumb-item:not(.is-group-thumb) {
            width: 80px !important;
            height: 80px !important;
            border-radius: 12px !important;
          }
          .team-thumb-item.is-group-thumb {
            width: 80px !important;
            height: 53px !important;
            border-radius: 20px !important;
          }
          .team-big-img-wrap {
            width: 100% !important;
            max-width: 320px !important;
            margin: 0 auto !important;
            transition: height 0.3s ease, border-radius 0.3s ease;
          }
          .team-big-img-wrap:not(.is-group) {
            height: 320px !important;
            border-radius: 16px !important;
          }
          .team-big-img-wrap.is-group {
            height: 213px !important;
            border-radius: 20px !important;
          }
          .team-desc-container {
            width: 100% !important;
            height: auto !important;
            flex-shrink: 1 !important;
          }
          .team-desc-wrap {
            position: relative !important;
            width: 100% !important;
            height: auto !important;
            text-align: center !important;
            overflow-y: visible !important;
          }
        }
      `}</style>
      <section
        className="team-section site-section-root site-section-spacing"
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        {/* INNER WRAPPER */}
        <div
          className="team-wrapper site-inner-root"
          style={{
            width: "100%",
            maxWidth: "1440px",
            height: "auto",
            margin: "0 auto",
            boxSizing: "border-box",
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
              fontSize: "24px",
              fontWeight: "400",
              color: "#1a1a1a",
              margin: 0,
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            <span style={{ textDecoration: "underline", textDecorationColor: "#FF4880", textUnderlineOffset: "8px", textDecorationThickness: "4px", textDecorationSkipInk: "none" }}>Our</span>{" "}
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
                onClick={() => {
                  setActiveTab(tab);
                  if (tab === "Core Leadership Team") {
                    setSelectedMember(coreLeadershipGroup);
                  } else if (tab === "Operations Leadership Team") {
                    setSelectedMember(operationsLeadershipGroup);
                  } else if (tab === "Clinical Excellence Team") {
                    setSelectedMember(clinicalExcellenceGroup1);
                  } else if (tab === "Team Leads & Specialists") {
                    setSelectedMember(teamLeadsGroup);
                  } else {
                    const filtered = tab === "All"
                      ? teamMembers
                      : teamMembers.filter((m) =>
                        Array.isArray(m.category)
                          ? m.category.includes(tab)
                          : m.category === tab
                      );
                    if (filtered.length > 0) {
                      setSelectedMember(filtered[0]);
                    }
                  }
                }}
                style={{
                  height: "36px",
                  padding: "0 20px",
                  borderRadius: "40px",
                  border: "1px solid",
                  borderColor: activeTab === tab ? "transparent" : "#ddd",
                  backgroundColor: "transparent",
                  color: activeTab === tab ? "#ffffff" : "#555",
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "14px",
                  fontWeight: activeTab === tab ? "800" : "600",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  position: "relative",
                  transition: "color 0.2s ease, border-color 0.2s ease",
                }}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabPill"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "#010C6F",
                      borderRadius: "40px",
                      zIndex: 1,
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span style={{ position: "relative", zIndex: 2 }}>{tab}</span>
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
                alignItems: "center",
                gap: "16px",
                flexShrink: 0,
                overflowY: "auto",
              }}
            >
              <AnimatePresence mode="popLayout">
                {filteredMembers.map((member) => {
                  const isMemberGroup = member.id.toString().includes("group");
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 12, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      key={member.id}
                      onClick={() => setSelectedMember(member)}
                      className={`team-thumb-item ${isMemberGroup ? "is-group-thumb" : ""}`}
                      style={{
                        width: "100px",
                        height: isMemberGroup ? "67px" : "100px",
                        borderRadius: isMemberGroup ? "20px" : "12px",
                        overflow: "hidden",
                        cursor: "pointer",
                        flexShrink: 0,
                        border: selectedMember.id === member.id ? "3px solid #753DBE" : "3px solid transparent",
                        boxSizing: "border-box",
                        position: "relative",
                        transition: "height 0.3s ease, border-radius 0.3s ease, border-color 0.2s ease",
                      }}
                    >
                      <Image
                        src={getImageUrl(member.thumb)}
                        alt={member.name}
                        fill
                        sizes="100px"
                        className={isMemberGroup ? "object-cover object-center" : "object-cover object-top"}
                      />
                      <div
                        className="team-thumb-overlay"
                        style={{
                          opacity: selectedMember.id === member.id ? 0 : 1,
                        }}
                      />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* BIG IMAGE */}
            <div
              className={`team-big-img-wrap ${isGroup ? "is-group" : ""}`}
              style={{
                width: "560px",
                height: isGroup ? "373px" : "560px",
                borderRadius: isGroup ? "20px" : "16px",
                overflow: "hidden",
                flexShrink: 0,
                position: "relative",
                transition: "height 0.3s ease, border-radius 0.3s ease",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedMember.id}
                  initial={{ opacity: 0, scale: 0.96, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ width: "100%", height: "100%", position: "relative" }}
                >
                  <Image
                    src={getImageUrl(selectedMember.image)}
                    alt={selectedMember.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 560px"
                    className={isGroup ? "object-cover object-center" : "object-cover object-top"}
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* DESCRIPTION */}
            <div
              className="team-desc-container"
              style={{
                width: "524px",
                height: "518px",
                flexShrink: 0,
                position: "relative",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedMember.id}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="team-desc-wrap no-scrollbar"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
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
                      fontSize: "18px",
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
                      fontSize: "18px",
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
                      fontSize: "16px",
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
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
