"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/Button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to an external analytics service if available
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cream p-6 text-center">
      <div className="bg-white p-8 max-w-md rounded-[32px] shadow-xl border border-gray-100 flex flex-col items-center">
        {/* Warning Icon inside Playful background */}
        <div className="w-16 h-16 bg-pink/10 rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-pink"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h2
          className="text-2xl font-extrabold text-navy-deep font-sans mb-3"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Oops! Something went sideways
        </h2>
        <p className="text-gray-500 mb-8 font-sans leading-relaxed text-sm">
          {error.message || "An unexpected error occurred while loading this page. Let's try again!"}
        </p>

        <div className="flex gap-4">
          <Button variant="secondary" onClick={reset}>
            Try Again
          </Button>
          <Button variant="outline" onClick={() => (window.location.href = "/")}>
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
