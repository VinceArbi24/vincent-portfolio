"use client";

import { motion } from "framer-motion";
import MediaThumb from "./MediaThumb";

export default function ProjectCard({ project, index, total, onOpen, size = "normal" }) {
  const num = String(index + 1).padStart(2, "0");
  const totalLabel = String(total || 0).padStart(2, "0");
  // alternate tilt direction so a grid of cards doesn't lean the same way
  const tilt = index % 2 === 0 ? -1.2 : 1.2;

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      layout
      initial={{ opacity: 0, y: 24, rotate: tilt * 1.5 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      exit={{ opacity: 0, y: -12 }}
      whileHover={{ rotate: tilt, y: -4 }}
      transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
      className={`group panel-corners relative block w-full overflow-hidden border border-line bg-bone text-left text-ink transition-shadow duration-300 hover:shadow-[6px_6px_0_0_rgba(10,10,10,0.9)] focus-visible:outline-2 focus-visible:outline-seal ${
        size === "tall" ? "row-span-2" : ""
      }`}
      aria-label={`View project: ${project.title}`}
    >
      <div
        className={`relative w-full overflow-hidden ${
          size === "tall" ? "aspect-[4/6]" : "aspect-[4/3]"
        }`}
      >
        <div className="h-full w-full transition-transform duration-700 ease-panel group-hover:scale-[1.06]">
          <MediaThumb project={project} className="h-full w-full" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />

        <span className="absolute left-3 top-3 bg-paper px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest2">
          {num} / {totalLabel}
        </span>

        <motion.span
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          whileHover={{ opacity: 1, scale: 1, rotate: 0 }}
          className="absolute right-3 top-3 text-seal opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          ✦
        </motion.span>
      </div>

      <div className="flex items-start justify-between gap-3 border-t border-line px-4 py-4">
        <div>
          <h3 className="font-display text-xl uppercase leading-none tracking-tightest sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-widest2 text-steel">
            {project.tag}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="mt-1 shrink-0 font-mono text-xs opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
        >
          →
        </span>
      </div>
    </motion.button>
  );
}
