"use client";

import { motion } from "framer-motion";

/**
 * Generic scroll-triggered reveal wrapper.
 * Wrap any block of content: <Reveal><h2>Title</h2></Reveal>
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.7,
  className = "",
  once = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.65, 0, 0.35, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
