import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

const makeVariants = (y: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: { opacity: 1, y: 0 },
});

/**
 * Wraps content in a gentle fade + rise animation that triggers once
 * the element scrolls into view. Keeps motion consistent and
 * respects prefers-reduced-motion via framer-motion's defaults.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={makeVariants(y)}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
