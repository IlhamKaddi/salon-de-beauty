"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface FloatingCardProps {
  children: ReactNode;
  variants: Variants;
  className?: string;
  /** Vertical float amplitude in px once the card has settled in. */
  floatDistance?: number;
  floatDuration?: number;
}

/**
 * Wraps its content in the shared glass-and-gold card treatment,
 * then adds a slow perpetual float once the entrance animation ends.
 */
export default function FloatingCard({
  children,
  variants,
  className = "",
  floatDistance = 10,
  floatDuration = 4.5,
}: FloatingCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div variants={variants} className={className}>
      <motion.div
        className="rounded-2xl border border-[#C9A469]/25 bg-[#1D1416]/70 px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-md"
        animate={
          prefersReducedMotion
            ? undefined
            : { y: [0, -floatDistance, 0] }
        }
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}