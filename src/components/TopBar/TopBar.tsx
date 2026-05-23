"use client";

import React from "react";
import Image from "next/image";

export const TopBar: React.FC = () => {
  return (
    <div className="w-full flex justify-center bg-transparent py-[6px]">
      <style>{`
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
          animation: marquee 20s linear infinite;
        }

        .marquee-track span {
          color: white;
          font-family: Arial, sans-serif;
          font-size: 12.5px;
          padding-right: 60px;
        }

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div
        className="flex items-center justify-between overflow-hidden shrink-0"
        style={{ width: "1400px", height: "33px", padding: "0 10px" }}
      >
        {/* LEFT */}
        <div className="flex items-center gap-2 whitespace-nowrap">
          {/* Phone icon */}
          <div className="w-6 h-6 shrink-0 flex items-center justify-center">
            <Image src="/icons/Phone.svg" alt="Phone" width={24} height={24} className="w-full h-full object-contain" />
          </div>

          <div className="flex items-center gap-[10px] text-white font-sans text-[12px]">
            <span>(404)-406-7339</span>
            <span>(404)-398-2622</span>
          </div>

          {/* Email icon */}
          <div className="flex items-center gap-[6px] ml-[10px]">
            <div className="w-6 h-6 shrink-0 flex items-center justify-center">
              <Image src="/icons/Email.svg" alt="Email" width={24} height={24} className="w-full h-full object-contain" />
            </div>
            <a className="text-white font-sans text-[12px] underline" href="mailto:intake@btvas.com">
              intake@btvas.com
            </a>
          </div>
        </div>

        {/* CENTER MARQUEE */}
        <div className="marquee-wrapper" style={{ width: "498px", height: "22px" }}>
          <div className="marquee-track">
            <span>Enrollment for the new year will begin from April 25 to August 19.&nbsp;&nbsp;&nbsp;the new year will begin from April 25 to August 19.&nbsp;&nbsp;&nbsp;Enrollment for the new year will begin from April 25 to August 19.&nbsp;&nbsp;&nbsp;the new year will begin from April 25 to August 19.&nbsp;&nbsp;&nbsp;</span>
            <span>Enrollment for the new year will begin from April 25 to August 19.&nbsp;&nbsp;&nbsp;the new year will begin from April 25 to August 19.&nbsp;&nbsp;&nbsp;Enrollment for the new year will begin from April 25 to August 19.&nbsp;&nbsp;&nbsp;the new year will begin from April 25 to August 19.&nbsp;&nbsp;&nbsp;</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-[10px] shrink-0">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/Beyondtheviewautismservices"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[6px]"
          >
            <div className="w-6 h-6 rounded-full bg-[#e8395a] flex items-center justify-center shrink-0">
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
            className="flex items-center gap-[6px]"
          >
            <div className="w-6 h-6 shrink-0 flex items-center justify-center">
              <Image src="/icons/FB.svg" alt="Facebook" width={24} height={24} className="w-full h-full object-contain" />
            </div>
            <span className="text-white font-sans text-[12px] whitespace-nowrap">
              @beyondtheviewaba
            </span>
          </a>

        </div>
      </div>
    </div>
  );
};