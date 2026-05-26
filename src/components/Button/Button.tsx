"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "../../utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "text" | "danger" | "yellow";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  fullWidth?: boolean;
  animate?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  animate = true,
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full border transition-all focus:outline-none focus:ring-2 focus:ring-purple/50 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary:
      "bg-navy text-white border-transparent hover:bg-navy-deep hover:shadow-lg active:scale-[0.98]",
    secondary:
      "bg-pink text-white border-transparent hover:bg-pink-hover hover:shadow-lg active:scale-[0.98]",
    outline:
      "bg-transparent text-navy border-navy/30 hover:border-navy hover:bg-navy/5 active:scale-[0.98]",
    text: "bg-transparent text-navy border-transparent hover:bg-navy/5 px-2 active:scale-[0.98]",
    danger:
      "bg-red-500 text-white border-transparent hover:bg-red-600 hover:shadow-lg active:scale-[0.98]",
    yellow:
      "bg-yellow text-navy-deep border-transparent hover:bg-yellow-hover hover:shadow-lg active:scale-[0.98] font-bold",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const buttonClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    loading && "relative text-transparent hover:text-transparent",
    className
  );

  const content = (
    <>
      {loading && (
        <span className="absolute flex items-center justify-center inset-0">
          <svg
            className="animate-spin h-5 w-5 text-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </span>
      )}
      {children}
    </>
  );

  if (animate && !disabled && !loading) {
    return (
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={buttonClasses}
        disabled={disabled || loading}
        {...(props as HTMLMotionProps<"button">)}
      >
        {content}
      </motion.button>
    );
  }

  return (
    <button
      className={buttonClasses}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
};
