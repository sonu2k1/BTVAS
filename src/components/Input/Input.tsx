import React from "react";
import { cn } from "../../utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, error, helperText, fullWidth = true, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-1.5", fullWidth && "w-full")}>
        {label && (
          <label className="text-sm font-bold text-navy-deep font-sans select-none pl-1">
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            "px-4 py-3 bg-white border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/10 transition-all font-sans text-base",
            error && "border-red-500 focus:border-red-500 focus:ring-red-100",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <span className="text-xs text-red-500 font-semibold pl-1">
            {error}
          </span>
        )}
        {!error && helperText && (
          <span className="text-xs text-gray-400 pl-1">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
