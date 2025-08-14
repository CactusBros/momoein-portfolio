"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React, { useState } from "react";

type ShinyButtonProps = {
  text: string;
  variant?: "primary" | "secondary";
  size?: "default" | "sm";
  children?: React.ReactNode;
} & HTMLMotionProps<"button">;

export default function ShinyButton({
  text,
  variant = "primary",
  size = "default",
  children,
  className = "",
  ...props
}: ShinyButtonProps) {
  const [mousePosition, setMousePosition] = useState({ x: -1, y: -1 });

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const borderStyle = {
    "--x": `${mousePosition.x}px`,
    "--y": `${mousePosition.y}px`,
  } as React.CSSProperties;

  // --- Style definitions based on props ---
  const primaryStyles =
    "text-white bg-neutral-900 dark:bg-neutral-800 border-transparent";
  const secondaryStyles =
    "text-neutral-700 dark:text-neutral-300 bg-transparent border-neutral-300 dark:border-neutral-700";

  const defaultSizeStyles = "px-8 py-3 text-lg font-semibold";
  const smSizeStyles = "px-4 py-2 text-sm font-medium";

  return (
    <motion.button
      {...props}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: -1, y: -1 })}
      style={borderStyle}
      className={`
        relative inline-flex items-center justify-center
        border rounded-lg group overflow-hidden transition-colors duration-300
        ${variant === "primary" ? primaryStyles : secondaryStyles}
        ${size === "default" ? defaultSizeStyles : smSizeStyles}
        ${className}
      `}
    >
      <span className="relative z-10">
        {text}
        {children}
      </span>
      <div
        className={`
          absolute inset-0 rounded-lg z-0
          opacity-0 group-hover:opacity-100 transition-opacity duration-500
          ${
            variant === "primary"
              ? "bg-[radial-gradient(400px_circle_at_var(--x)_var(--y),_rgba(255,255,255,0.2),_transparent_40%)]"
              : "bg-[radial-gradient(400px_circle_at_var(--x)_var(--y),_rgba(150,150,150,0.2),_transparent_40%)] dark:bg-[radial-gradient(400px_circle_at_var(--x)_var(--y),_rgba(255,255,255,0.1),_transparent_40%)]"
          }
        `}
      />
    </motion.button>
  );
}
