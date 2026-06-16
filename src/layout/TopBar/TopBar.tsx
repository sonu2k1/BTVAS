"use client";

import React from "react";
import Image from "next/image";

export const TopBar: React.FC = () => {
  return (
    <div className="w-full flex justify-center bg-transparent" style={{ padding: "12px 0" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;600;700;800&family=Mochiy+Pop+One&display=swap');

        .topbar-desktop, 
        .topbar-desktop a, 
        .topbar-desktop span, 
        .topbar-mobile, 
        .topbar-mobile a, 
        .topbar-mobile span {
          font-family: 'Prompt', sans-serif !important;
          font-size: 16px !important;
          color: rgba(1, 12, 111, 0.9) !important;
        }

        .marquee-wrapper {
          flex: 1;
          overflow: hidden;
          margin: 0 16px;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .marquee-track {
          display: flex;
          white-space: nowrap;
          animation: marquee 10s linear infinite;
        }

        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

        .marquee-track span {
          color: white;
          font-family: 'Prompt', sans-serif !important;
          font-size: 14px !important;
          padding-right: 60px;
          transition: color 0.2s ease;
        }

        .marquee-wrapper:hover .marquee-track span {
          color: #f9c0cb;
        }

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* ── Hover: links ── */
        .topbar-link {
          transition: transform 0.2s ease, filter 0.2s ease, opacity 0.2s ease;
        }
        .topbar-link:hover {
          transform: translateY(-1px) scale(1.04);
          filter: brightness(1.25);
          opacity: 1 !important;
        }

        /* ── Hover: social icon circle ── */
        .topbar-icon-circle {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .topbar-link:hover .topbar-icon-circle {
          transform: scale(1.15);
          box-shadow: 0 0 8px 2px rgba(232, 57, 90, 0.6);
        }

        /* ── Hover: FB icon ── */
        .topbar-fb-icon {
          transition: transform 0.2s ease, filter 0.2s ease;
        }
        .topbar-link:hover .topbar-fb-icon {
          transform: scale(1.15);
          filter: drop-shadow(0 0 4px rgba(66, 103, 178, 0.8));
        }

              .topbar-mobile {
          display: none;
        }

        .topbar-desktop {
          width: 100%;
          max-width: 1400px;
        }

        .topbar-desktop span.enrolling-now-text {
          font-family: 'Mochiy Pop One', sans-serif !important;
          font-size: 20px !important;
          color: #FFE600 !important;
        }

        @media (min-width: 1025px) and (max-width: 1279px) {
          .topbar-desktop {
            padding: 0 16px !important;
          }
          .marquee-wrapper {
            max-width: 360px !important;
            flex: 1 1 auto !important;
          }
        }

        @media (max-width: 1024px) {
          .topbar-desktop {
            display: none !important;
          }
          .topbar-mobile {
            display: flex !important;
            align-items: center;
            justify-content: center !important;
            gap: 12px !important;
            width: 100% !important;
            padding: 4px 16px !important;
            height: auto !important;
          }
          .topbar-mobile a.topbar-phone-link,
          .topbar-mobile a.topbar-email-link {
            font-size: 13px !important;
            white-space: nowrap !important;
          }
          .topbar-mobile span.topbar-divider {
            font-size: 12px !important;
            white-space: nowrap !important;
          }
          .topbar-mobile span.topbar-enrolling-now {
            font-family: 'Mochiy Pop One', sans-serif !important;
            font-size: 14.5px !important;
            color: #FFE600 !important;
            font-weight: 400 !important;
            white-space: nowrap !important;
          }
          .topbar-phone-container {
            display: flex !important;
            flex-direction: row !important;
            gap: 8px !important;
            align-items: center !important;
          }
          .topbar-phone-divider {
            display: inline-block !important;
            width: 1px !important;
            height: 12px !important;
            background-color: rgba(255, 255, 255, 0.3) !important;
            margin: 0 4px !important;
          }
        }

        @media (max-width: 639px) {
          .topbar-mobile {
            gap: 8px !important;
          }
          .topbar-phone-container {
            flex-direction: column !important;
            gap: 0px !important;
            align-items: flex-start !important;
          }
          .topbar-mobile a.topbar-phone-link {
            line-height: 1.15 !important;
          }
          .topbar-phone-divider {
            display: block !important;
            width: 100% !important;
            height: 1px !important;
            background-color: rgba(255, 255, 255, 0.25) !important;
            margin: 2px 0 !important;
          }
        }

        @media (max-width: 375px) {
          .topbar-mobile {
            gap: 4px !important;
            padding: 4px 8px !important;
          }
          .topbar-mobile a.topbar-phone-link,
          .topbar-mobile a.topbar-email-link {
            font-size: 11.5px !important;
          }
          .topbar-mobile span.topbar-enrolling-now {
            font-size: 13.5px !important;
          }
        }

        @media (max-width: 320px) {
          .topbar-mobile {
            gap: 3px !important;
            padding: 4px 4px !important;
          }
          .topbar-mobile a.topbar-phone-link,
          .topbar-mobile a.topbar-email-link {
            font-size: 10.5px !important;
          }
          .topbar-mobile span.topbar-enrolling-now {
            font-size: 12px !important;
          }
        }
      `}</style>
      {/* ── DESKTOP TopBar ── */}
      <div
        className="flex items-center justify-between overflow-hidden shrink-0 topbar-desktop"
        style={{ height: "33px", padding: "0 10px" }}
      >
        {/* LEFT */}
        <div className="flex items-center gap-2 whitespace-nowrap">
          {/* Phone icon */}
          <div className="w-6 h-6 shrink-0 flex items-center justify-center">
            <Image src="https://ik.imagekit.io/sonu2k1/TEst/Icons/icons/Phone.svg" alt="Phone" width={24} height={24} />
          </div>

          <div className="flex items-center gap-[10px] text-white font-sans text-[12px]">
            <span>(404)-406-7339</span>
            <span>(404)-398-2622</span>
          </div>

          {/* Email icon */}
          <div className="flex items-center gap-[6px] ml-[10px]">
            <div className="w-6 h-6 shrink-0 flex items-center justify-center">
              <Image src="https://ik.imagekit.io/sonu2k1/TEst/Icons/icons/Email.svg" alt="Email" width={24} height={24} />
            </div>
            <a className="text-white font-sans text-[12px] underline" href="mailto:intake@btvas.com">
              intake@btvas.com
            </a>
          </div>
        </div>

        {/* CENTER BANNER */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <span
            className="enrolling-now-text"
            style={{ letterSpacing: "0.5px" }}
          >
            Enrolling Now
          </span>
        </div>
        {/* PREVIOUS SCROLLING MARQUEE CODE:
        <div className="marquee-wrapper" style={{ width: "498px", height: "22px" }}>
          <div className="marquee-track">
            <span>Enrolling Now.&nbsp;&nbsp;&nbsp;Enrolling Now.&nbsp;&nbsp;&nbsp;Enrolling Now.&nbsp;&nbsp;&nbsp;Enrolling Now.</span>
            <span>Enrolling Now.&nbsp;&nbsp;&nbsp;Enrolling Now.&nbsp;&nbsp;&nbsp;Enrolling Now.&nbsp;&nbsp;&nbsp;Enrolling Now.</span>
          </div>
        </div>
        */}

        {/* RIGHT */}
        <div className="flex items-center gap-[10px] shrink-0">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/Beyondtheviewautismservices"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[6px] topbar-link"
          >
            <div className="w-6 h-6 rounded-full bg-[#e8395a] flex items-center justify-center shrink-0 topbar-icon-circle">
              <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </div>
            <span className="text-white font-sans text-[12px] whitespace-nowrap">
              /Beyondtheviewautismservices
            </span>
          </a>

          {/* Divider */}
          <span className="text-white opacity-40 text-[12px]">|</span>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/beyondtheviewaba"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[6px] topbar-link"
          >
            <div className="w-6 h-6 shrink-0 flex items-center justify-center topbar-fb-icon">
              <Image src="https://ik.imagekit.io/sonu2k1/TEst/Icons/icons/FB.svg" alt="Facebook" width={24} height={24} />
            </div>
            <span className="text-white font-sans text-[12px] whitespace-nowrap">
              @beyondtheviewaba
            </span>
          </a>

        </div>
      </div>

      {/* ── MOBILE TopBar ── */}
      <div className="topbar-mobile">
        <div className="flex items-center gap-1 shrink-0">
          <div className="w-4 h-4 shrink-0 flex items-center justify-center">
            <Image src="https://ik.imagekit.io/sonu2k1/TEst/Icons/icons/Phone.svg" alt="Phone" width={16} height={16} />
          </div>
          <div className="topbar-phone-container">
            <a href="tel:4044067339" className="text-white font-sans decoration-none topbar-link topbar-phone-link" style={{ textDecoration: "none" }}>
              (404)-406-7339
            </a>
            <span className="topbar-phone-divider" />
            <a href="tel:4043982622" className="text-white font-sans decoration-none topbar-link topbar-phone-link" style={{ textDecoration: "none" }}>
              (404)-398-2622
            </a>
          </div>
        </div>
        <span className="text-white opacity-30 topbar-divider">|</span>
        <span className="topbar-enrolling-now">
          Enrolling Now
        </span>
        {/* PREVIOUS SCROLLING MARQUEE CODE:
        <div className="marquee-wrapper" style={{ width: "200px", flexShrink: 0 }}>
          <div className="marquee-track">
            <span style={{ fontSize: "11px", fontWeight: "bold", fontFamily: "'Prompt', sans-serif" }}>Enrolling Now.&nbsp;&nbsp;&nbsp;Enrolling Now.&nbsp;&nbsp;&nbsp;</span>
            <span style={{ fontSize: "11px", fontWeight: "bold", fontFamily: "'Prompt', sans-serif" }}>Enrolling Now.&nbsp;&nbsp;&nbsp;Enrolling Now.&nbsp;&nbsp;&nbsp;</span>
          </div>
        </div>
        */}
        <span className="text-white opacity-30 topbar-divider">|</span>
        <a href="mailto:intake@btvas.com" className="flex items-center gap-1 text-white font-sans underline topbar-link topbar-email-link">
          <div className="w-4 h-4 shrink-0 flex items-center justify-center">
            <Image src="https://ik.imagekit.io/sonu2k1/TEst/Icons/icons/Email.svg" alt="Email" width={16} height={16} />
          </div>
          intake@btvas.com
        </a>
      </div>
    </div>
  );
};
