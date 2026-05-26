"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cream">
      <div className="relative flex items-center justify-center">
        {/* Animated outer circle */}
        <div className="w-16 h-16 border-4 border-purple/30 border-t-purple rounded-full animate-spin" />
        {/* Playful inner dot */}
        <div className="absolute w-6 h-6 bg-pink rounded-full animate-ping" />
      </div>
      <h2
        className="mt-6 text-xl font-extrabold text-navy-deep font-sans tracking-wide"
        style={{ fontFamily: "'Georgia', serif", fontStyle: "italic" }}
      >
        Bringing everything into view...
      </h2>
    </div>
  );
}
