"use client";

import React from "react";
import Image from "next/image";

// Reusing inline SVG for Location Map Pin as it wasn't specified in the file list.
const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const exploreLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Service", href: "#service" },
  { label: "Contact", href: "#contact" },
  { label: "Career", href: "#career" },
  { label: "Help Center", href: "#help" },
];

export const Footer: React.FC = () => {
  return (
    <footer
      className="bg-[#010C6F] text-white flex justify-center overflow-hidden"
      style={{ width: "1440px", height: "445px", margin: "0 auto" }}
    >
      <div
        className="relative flex items-start w-full"
        style={{
          paddingTop: "36px",
          paddingBottom: "36px",
          paddingLeft: "75px",
          paddingRight: "75px",
          boxSizing: "border-box",
        }}
      >
        {/* ── LEFT PART ── */}
        <div
          className="flex flex-col flex-1"
          style={{ gap: "72px" }}
        >
          {/* Upper Part */}
          <div className="flex flex-col">
            <div style={{ marginBottom: "16px" }}>
              <Image
                src="/logo.svg"
                alt="Beyond The View Autism Services"
                width={107.4}
                height={100}
                style={{ width: "107.4px", height: "100px" }}
              />
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                lineHeight: "1.6",
                color: "rgba(255, 255, 255, 0.8)",
                maxWidth: "600px",
                margin: 0,
              }}
            >
              At <strong className="text-white">Beyond The View Autism Services</strong>, We Believe That Every Child Should Be Supported To Their Greatest Level Of Independence. With Independence Comes The Ability To Access New Environments And Opportunities.
            </p>
          </div>

          {/* Lower Part */}
          <div className="flex flex-col" style={{ gap: "32px" }}>
            {/* Row 1: Social */}
            <div className="flex items-center" style={{ gap: "40px" }}>
              {/* Instagram/Link */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center bg-[#FF4880] rounded-[8px]" style={{ width: "32px", height: "32px" }}>
                  <Image src="/icons/Link.svg" alt="Instagram" width={16} height={16} />
                </div>
                <span style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.9)" }}>/Beyondtheviewautismservices</span>
              </div>
              
              {/* Vertical Divider */}
              <div style={{ width: "1px", height: "24px", background: "rgba(255, 255, 255, 0.2)" }} />

              {/* Facebook */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center bg-[#FF4880] rounded-[8px]" style={{ width: "32px", height: "32px" }}>
                  <Image src="/icons/FB.svg" alt="Facebook" width={16} height={16} />
                </div>
                <span style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.9)" }}>@beyondtheviewaba</span>
              </div>
            </div>

            {/* Row 2: Contact Info */}
            <div className="flex items-start" style={{ gap: "40px" }}>
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center bg-[#FF4880] rounded-[8px] flex-shrink-0" style={{ width: "32px", height: "32px" }}>
                  <Image src="/icons/Phone.svg" alt="Phone" width={16} height={16} />
                </div>
                <div className="flex flex-col gap-1">
                  <span style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.6)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Call Us</span>
                  <span style={{ fontSize: "13px", fontWeight: 600 }}>(404)-398-2622</span>
                  <span style={{ fontSize: "13px", fontWeight: 600 }}>(404)-406-7339</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center bg-[#FF4880] rounded-[8px] flex-shrink-0" style={{ width: "32px", height: "32px" }}>
                  <MapPinIcon />
                </div>
                <div className="flex flex-col gap-1">
                  <span style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.6)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Clinic Locations</span>
                  <span style={{ fontSize: "13px", fontWeight: 600 }}>7171 Jonesboro Rd, Morrow GA 30260</span>
                  <span style={{ fontSize: "13px", fontWeight: 600 }}>3557 Main St College Park Ga 30337</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center bg-[#FF4880] rounded-[8px] flex-shrink-0" style={{ width: "32px", height: "32px" }}>
                  <Image src="/icons/Email.svg" alt="Email" width={16} height={16} />
                </div>
                <div className="flex flex-col gap-1">
                  <span style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.6)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Email Us</span>
                  <a href="mailto:intake@btvas.com" style={{ fontSize: "13px", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "2px" }}>intake@btvas.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT PART ── */}
        <div
          className="flex flex-col flex-shrink-0"
          style={{ width: "245px", height: "263.5px" }}
        >
          <h4 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "12px", fontFamily: "'Inter', sans-serif" }}>
            Explore
          </h4>
          
          {/* Custom line underneath Explore */}
          <div style={{ display: "flex", width: "100%", height: "2px", marginBottom: "24px" }}>
            <div style={{ width: "30%", background: "#FF4880" }}></div>
            <div style={{ width: "70%", background: "rgba(255, 255, 255, 0.2)" }}></div>
          </div>

          <ul className="flex flex-col" style={{ gap: "16px", padding: 0, margin: 0, listStyle: "none" }}>
            {exploreLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="flex items-center gap-3 text-white transition-colors hover:text-[#FF4880]"
                  style={{ fontSize: "14px", fontWeight: 500, fontFamily: "'Inter', sans-serif", textDecoration: "none" }}
                >
                  <span style={{ color: "#FF4880", fontSize: "16px", lineHeight: 1 }}>»</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
