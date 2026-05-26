import React from "react";
import { cn } from "../../utils/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "success" | "warning" | "info" | "gold";
  size?: "sm" | "md";
  showDot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  showDot = false,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center gap-1.5 font-bold rounded-full border tracking-wide uppercase font-sans";

  const variants = {
    primary: "bg-navy/5 text-navy border-navy/10",
    secondary: "bg-pink/5 text-pink border-pink/10",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    warning: "bg-amber-50 text-amber-700 border-amber-200/60",
    info: "bg-sky-50 text-sky-700 border-sky-200/60",
    gold: "bg-yellow/10 text-navy-deep border-yellow/20",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-3 py-1 text-xs",
  };

  const dots = {
    primary: "bg-navy",
    secondary: "bg-pink",
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    info: "bg-sky-500",
    gold: "bg-yellow",
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {showDot && (
        <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", dots[variant])} />
      )}
      {children}
    </span>
  );
};
