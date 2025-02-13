"use client";
import { motion } from "motion/react"

export const transitionMotion = {
  transition: {
    duration: 3,
    type: "spring",
  },
  initial: {
    opacity: 0,
    bottom: "5rem",
    transform: "translateY(200px)",
  },
  whileInView: {
    opacity: 1,
    transform: "translateY(0px)",
  },
};

export function MotionTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      transition={transitionMotion.transition}
      initial={transitionMotion.initial}
      whileInView={transitionMotion.whileInView}
    >
      {children}
    </motion.div>
  );
}
