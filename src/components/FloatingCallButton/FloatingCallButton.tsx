"use client";

import React, { useEffect, useRef, useState } from "react";
import { Phone } from "lucide-react";
import { SITE_PHONE_NUMBERS } from "@/constants";

export const FloatingCallButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const closeOnOutside = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", closeOnOutside);
    return () => document.removeEventListener("mousedown", closeOnOutside);
  }, [open]);

  return (
    <>
      <style>{`
        .floating-call-button-wrap {
          display: none;
        }

        @media (max-width: 1024px) {
          .floating-call-button-wrap {
            display: block;
            position: fixed;
            left: max(12px, env(safe-area-inset-left, 0px));
            bottom: max(16px, env(safe-area-inset-bottom, 0px));
            z-index: 50;
          }

          .floating-call-button-menu {
            position: absolute;
            left: 0;
            bottom: calc(100% + 10px);
            min-width: 200px;
            max-width: calc(100vw - 80px);
            padding: 12px;
            background: #ffffff;
            border: 2px solid rgba(46, 46, 142, 0.13);
            border-radius: 16px;
            box-shadow: 0 8px 28px rgba(1, 12, 111, 0.18);
            opacity: 0;
            visibility: hidden;
            transform: translateY(8px);
            transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
          }

          .floating-call-button-wrap.is-open .floating-call-button-menu {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .floating-call-button-menu-title {
            font-family: 'Nunito', sans-serif;
            font-size: 12px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            color: #7b2d8b;
            margin: 0 0 10px;
            padding: 0 4px;
          }

          .floating-call-button-link {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 12px;
            border-radius: 12px;
            font-family: 'Prompt', sans-serif;
            font-size: 13px;
            font-weight: 600;
            line-height: 1.2;
            color: #010c6f;
            text-decoration: none;
            background: #f8f6fc;
            border: 1px solid #ece8f4;
            white-space: nowrap;
            transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
          }

          .floating-call-button-link + .floating-call-button-link {
            margin-top: 8px;
          }

          .floating-call-button-link:hover,
          .floating-call-button-link:active {
            background: #FF4880;
            border-color: #FF4880;
            color: #ffffff;
          }

          .floating-call-button-link-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: #FF4880;
            color: #ffffff;
            flex-shrink: 0;
          }

          .floating-call-button-link:hover .floating-call-button-link-icon,
          .floating-call-button-link:active .floating-call-button-link-icon {
            background: #ffffff;
            color: #FF4880;
          }

          .floating-call-button-fab {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 56px;
            height: 56px;
            padding: 0;
            border: none;
            border-radius: 50%;
            background: #FF4880;
            color: #ffffff;
            box-shadow: 0 6px 24px rgba(255, 72, 128, 0.45), 0 2px 8px rgba(1, 12, 111, 0.15);
            cursor: pointer;
            transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
          }

          .floating-call-button-fab:hover {
            background: #e03570;
            transform: scale(1.04);
          }

          .floating-call-button-fab:active {
            transform: scale(0.96);
          }

          .floating-call-button-wrap.is-open .floating-call-button-fab {
            background: #753DBE;
            box-shadow: 0 6px 24px rgba(117, 61, 190, 0.4);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .floating-call-button-menu,
          .floating-call-button-fab {
            transition: none;
          }
        }
      `}</style>

      <div
        ref={rootRef}
        className={`floating-call-button-wrap${open ? " is-open" : ""}`}
      >
        <div className="floating-call-button-menu" role="menu" aria-label="Call options">
          <p className="floating-call-button-menu-title">Choose a number to call</p>
          {SITE_PHONE_NUMBERS.map((phone) => (
            <a
              key={phone.href}
              href={phone.href}
              className="floating-call-button-link"
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              <span className="floating-call-button-link-icon" aria-hidden="true">
                <Phone size={14} strokeWidth={2.5} />
              </span>
              {phone.display}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="floating-call-button-fab"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-haspopup="menu"
          aria-label={open ? "Close call options" : "Call us"}
        >
          <Phone size={24} strokeWidth={2.25} aria-hidden="true" />
        </button>
      </div>
    </>
  );
};
