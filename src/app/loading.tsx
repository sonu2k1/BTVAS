"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#fffdf8] flex flex-col font-sans overflow-hidden">
      {/* Top Bar Skeleton */}
      <div className="w-full bg-[#00084b]/10 animate-pulse h-10 flex items-center justify-between px-6 border-b border-gray-100">
        <div className="w-36 h-4 bg-gray-200 rounded-full" />
        <div className="flex gap-4">
          <div className="w-24 h-4 bg-gray-200 rounded-full" />
          <div className="w-24 h-4 bg-gray-200 rounded-full" />
        </div>
      </div>

      {/* Header Skeleton */}
      <div className="w-full max-w-[1440px] mx-auto h-[100px] flex items-center justify-between px-12 border-b border-gray-50/50 animate-pulse">
        {/* Logo placeholder */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-gray-200 rounded-full" />
          <div className="flex flex-col gap-2">
            <div className="w-40 h-5 bg-gray-200 rounded-full" />
            <div className="w-24 h-3.5 bg-gray-200 rounded-full" />
          </div>
        </div>

        {/* Nav Links placeholder */}
        <div className="hidden md:flex gap-8">
          <div className="w-16 h-5 bg-gray-200 rounded-full" />
          <div className="w-16 h-5 bg-gray-200 rounded-full" />
          <div className="w-16 h-5 bg-gray-200 rounded-full" />
          <div className="w-16 h-5 bg-gray-200 rounded-full" />
        </div>

        {/* Action Button placeholder */}
        <div className="w-40 h-11 bg-gray-200 rounded-full" />
      </div>

      {/* Hero Section Skeleton */}
      <div className="relative w-full max-w-[1440px] mx-auto px-12 py-16 flex flex-col lg:flex-row gap-12 items-center justify-between animate-pulse">
        {/* Hero Card Container (Left side) */}
        <div className="w-full max-w-[756px] h-[382px] bg-purple-100/30 rounded-[32px] p-6 border border-purple-200/20 flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            {/* Tagline */}
            <div className="w-48 h-8 bg-purple-200/40 rounded-full" />
            {/* Title Line 1 */}
            <div className="w-3/4 h-14 bg-yellow-200/40 rounded-2xl" />
            {/* Title Line 2 */}
            <div className="w-1/2 h-14 bg-yellow-200/40 rounded-2xl" />
          </div>
          {/* Button placeholder */}
          <div className="w-56 h-12 bg-purple-200/60 rounded-full" />
        </div>

        {/* Hero Floating Card / Graphic (Right side) */}
        <div className="w-full lg:w-[480px] h-[400px] bg-gray-200/50 rounded-[40px] flex items-center justify-center relative overflow-hidden">
          {/* Inner Shimmer/Pattern effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
          <div className="w-24 h-24 bg-white/20 rounded-full animate-ping" />
        </div>
      </div>

      {/* Core Values Section Skeleton (Below Hero) */}
      <div className="w-full max-w-[1440px] mx-auto px-12 py-16 flex flex-col gap-8 animate-pulse">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-32 h-4 bg-gray-200 rounded-full" />
          <div className="w-64 h-8 bg-gray-200 rounded-full" />
        </div>

        {/* Value Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="h-[280px] bg-white border border-gray-100 rounded-[28px] p-6 flex flex-col justify-between">
            <div className="w-16 h-16 bg-gray-200 rounded-2xl" />
            <div className="flex flex-col gap-3">
              <div className="w-32 h-6 bg-gray-200 rounded-full" />
              <div className="w-full h-4 bg-gray-100 rounded-full" />
              <div className="w-5/6 h-4 bg-gray-100 rounded-full" />
            </div>
          </div>
          <div className="h-[280px] bg-white border border-gray-100 rounded-[28px] p-6 flex flex-col justify-between">
            <div className="w-16 h-16 bg-gray-200 rounded-2xl" />
            <div className="flex flex-col gap-3">
              <div className="w-32 h-6 bg-gray-200 rounded-full" />
              <div className="w-full h-4 bg-gray-100 rounded-full" />
              <div className="w-5/6 h-4 bg-gray-100 rounded-full" />
            </div>
          </div>
          <div className="h-[280px] bg-white border border-gray-100 rounded-[28px] p-6 flex flex-col justify-between">
            <div className="w-16 h-16 bg-gray-200 rounded-2xl" />
            <div className="flex flex-col gap-3">
              <div className="w-32 h-6 bg-gray-200 rounded-full" />
              <div className="w-full h-4 bg-gray-100 rounded-full" />
              <div className="w-5/6 h-4 bg-gray-100 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
