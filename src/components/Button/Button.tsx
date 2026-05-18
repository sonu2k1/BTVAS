"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type Variant = "pink" | "yellow" | "icon";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: Variant;
  children: React.ReactNode;
}

const variantClasses: Record<Variant, string> = {
  pink: "bg-pink text-white px-7 py-3 text-base hover:bg-pink-hover",
  yellow:
    "bg-yellow text-navy-deep px-7 py-3 text-[15px] font-extrabold hover:bg-yellow-hover",
  icon: "bg-yellow text-navy-deep w-14 h-14 rounded-full p-0 text-2xl hover:bg-yellow-hover",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "pink",
  children,
  className = "",
  ...props
}) => {
  return (
    <motion.button
      whileHover={{ y: -2, boxShadow: "0 6px 16px rgba(0,0,0,0.15)" }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={`
        inline-flex items-center justify-center
        border-none rounded-full font-bold cursor-pointer
        transition-colors duration-200
        ${variantClasses[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};
