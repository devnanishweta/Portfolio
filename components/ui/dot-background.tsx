"use client";

import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";

// Theme: primary #C1694F, accent #E8A87C, background #FAF7F2, border #DDD5C8
const DOT_COLORS = {
  baseLight: "rgb(200 190 178)",   // warm gray (border-like)
  baseDark: "rgb(44 36 32)",       // warm charcoal (text)
  spotlight: "rgb(232 168 124)",  // accent (E8A87C)
};

export const DotBackground = ({
  children,
  containerClassName,
}: {
  children?: React.ReactNode;
  containerClassName?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const dotPattern = (color: string) => ({
    backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
    backgroundSize: "16px 16px",
  });

  return (
    <div
      className={cn(
        "relative w-full flex items-center justify-center group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Base dot grid (light mode) — warm gray */}
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={dotPattern(DOT_COLORS.baseLight)}
      />

      {/* Base dot grid (dark mode) — warm charcoal */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-70"
        style={dotPattern(DOT_COLORS.baseDark)}
      />

      {/* Cursor spotlight — accent color */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          ...dotPattern(DOT_COLORS.spotlight),
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      {/* Optional content — fills area so absolute children (blobs, etc.) position correctly */}
      {children && <div className="absolute inset-0 z-10 flex items-center justify-center w-full">{children}</div>}
    </div>
  );
};
