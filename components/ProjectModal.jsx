"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} project details`}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-4 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden border border-paper/20 bg-paper text-ink md:flex-row"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project viewer"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center bg-ink text-paper transition-transform duration-300 hover:scale-105"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative flex max-h-[50vh] items-center justify-center bg-ink md:max-h-[90vh] md:w-3/5">
              {project.type === "video" ? (
                <video
                  key={project.id}
                  className="max-h-[50vh] w-full object-contain md:max-h-[90vh]"
                  src={project.src}
                  poster={project.poster}
                  controls
                  playsInline
                  autoPlay
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.src}
                  alt={project.title}
                  className="max-h-[50vh] w-full object-contain md:max-h-[90vh]"
                />
              )}
            </div>

            <div className="flex flex-col justify-between gap-6 overflow-y-auto p-6 md:w-2/5 md:p-8">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest2 text-seal">
                  {project.tag}
                </p>
                <h3 className="mt-3 font-display text-3xl uppercase leading-[0.9] tracking-tightest sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-ink/80">
                  {project.description}
                </p>
              </div>

              {project.tools?.length > 0 && (
                <div className="border-t border-line pt-5">
                  <p className="font-mono text-[10px] uppercase tracking-widest2 text-steel">
                    Tools
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <li
                        key={tool}
                        className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest2"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
