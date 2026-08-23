"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STAGE_MS = 650;

export default function Loader({ onDone }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onDone();
      return;
    }
    const t1 = setTimeout(() => setStage(1), STAGE_MS);
    const t2 = setTimeout(() => setStage(2), STAGE_MS * 2);
    const t3 = setTimeout(() => onDone(), STAGE_MS * 2 + 500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink text-paper"
      initial={{ opacity: 1 }}
      exit={{
        clipPath: "inset(0 0 100% 0)",
        skewY: -4,
        transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      <div className="relative flex flex-col items-center gap-4 px-6 text-center">
        <AnimatePresence mode="wait">
          {stage === 0 && (
            <motion.h1
              key="name"
              initial={{ opacity: 0, y: 16, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="font-display text-[13vw] leading-[0.85] uppercase tracking-tightest sm:text-6xl"
            >
              Vincent
              <br />
              Arbitrario
            </motion.h1>
          )}
          {stage === 1 && (
            <motion.p
              key="role"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
              className="font-mono text-xs uppercase tracking-widest2 text-paper/70"
            >
              Graphic Designer / Video Editor
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <div className="absolute bottom-10 left-1/2 h-px w-24 -translate-x-1/2 overflow-hidden bg-paper/20">
        <motion.div
          className="h-full w-full bg-seal"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: STAGE_MS * 2 / 1000, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
