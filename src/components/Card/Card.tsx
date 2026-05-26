"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "../../utils/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "bordered" | "flat";
  shadow?: "none" | "sm" | "md" | "lg";
  hoverAnimate?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = "default",
  shadow = "md",
  hoverAnimate = false,
  padding = "md",
  ...props
}) => {
  const baseStyles = "rounded-[24px] overflow-hidden transition-all duration-300";

  const variants = {
    default: "bg-white border border-gray-100",
    glass: "bg-white/70 backdrop-blur-md border border-white/40",
    bordered: "bg-transparent border-2 border-navy/10",
    flat: "bg-cream border-transparent",
  };

  const shadows = {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]",
    lg: "shadow-[0_10px_35px_-5px_rgba(0,0,0,0.08)]",
  };

  const paddings = {
    none: "p-0",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const cardClasses = cn(
    baseStyles,
    variants[variant],
    shadows[shadow],
    paddings[padding],
    className
  );

  if (hoverAnimate) {
    return (
      <motion.div
        whileHover={{ y: -6, scale: 1.01, boxShadow: "0 12px 40px -5px rgba(0,0,0,0.1)" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cardClasses}
        {...(props as HTMLMotionProps<"div">)}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};
