"use client";

import { motion } from "framer-motion";

/**
 * Consistent section heading used across the site:
 * a small mono "eyebrow" label + index that pops in, then a large
 * display title that reveals word by word.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  align = "left",
  theme = "light",
  className = "",
}) {
  const eyebrowColor = theme === "dark" ? "text-paper/60" : "text-steel";
  const lineColor = theme === "dark" ? "bg-paper/40" : "bg-ink/30";
  const titleColor = theme === "dark" ? "text-paper" : "text-ink";
  const words = title.split(" ");

  return (
    <div className={className}>
      <div className={align === "center" ? "text-center" : ""}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className={`flex items-center gap-3 font-mono text-xs tracking-widest2 uppercase ${eyebrowColor} mb-4 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          {index && (
            <motion.span
              variants={{
                hidden: { opacity: 0, scale: 0.4, rotate: -12 },
                show: {
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  transition: { type: "spring", stiffness: 420, damping: 16 },
                },
              }}
              className="inline-block text-seal"
            >
              {index}
            </motion.span>
          )}
          <motion.span
            variants={{
              hidden: { scaleX: 0 },
              show: {
                scaleX: 1,
                transition: { duration: 0.5, delay: 0.15, ease: [0.65, 0, 0.35, 1] },
              },
            }}
            style={{ transformOrigin: "left" }}
            className={`h-px w-8 ${lineColor}`}
            aria-hidden="true"
          />
          <motion.span
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { delay: 0.25, duration: 0.4 } },
            }}
          >
            {eyebrow}
          </motion.span>
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.07, delayChildren: 0.1 }}
          className={`font-display text-[13vw] leading-[0.85] tracking-tightest uppercase sm:text-6xl md:text-7xl lg:text-8xl ${titleColor}`}
        >
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-1 pr-[0.2em] align-bottom">
              <motion.span
                className="inline-block"
                variants={{
                  hidden: { y: "110%", rotate: 4 },
                  show: {
                    y: "0%",
                    rotate: 0,
                    transition: { duration: 0.65, ease: [0.65, 0, 0.35, 1] },
                  },
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h2>
      </div>
    </div>
  );
}
