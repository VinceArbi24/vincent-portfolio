"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-28 md:pt-32"
    >
      {/* Vertical editorial label — decorative, sparing manga/editorial detail */}
      <span
        aria-hidden="true"
        className="vertical-rl absolute right-4 top-32 hidden font-mono text-[10px] uppercase tracking-widest2 text-steel md:block lg:right-8"
      >
        Scroll to explore — 01
      </span>

      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 gap-10 px-6 md:grid-cols-12 md:gap-6 md:px-10">
        {/* Text block */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 flex flex-col justify-center md:order-1 md:col-span-7 lg:col-span-7"
        >
          <motion.div
            variants={item}
            className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-widest2 text-steel"
          >
            <span className="h-2 w-2 bg-seal" aria-hidden="true" />
            Portfolio — Visual Studio
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display uppercase leading-[0.83] tracking-tightest text-[16vw] sm:text-[10vw] md:text-[6.2vw] lg:text-[5.6vw]"
          >
            Vincent
            <br />
            Arbitrario
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md font-mono text-xs uppercase tracking-widest2 text-ink/70"
          >
            {siteConfig.role}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-base leading-relaxed text-ink/80 md:text-lg"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group relative inline-flex items-center gap-2 bg-ink px-6 py-3.5 font-mono text-xs uppercase tracking-widest2 text-paper transition-transform duration-300 hover:-translate-y-0.5"
            >
              <motion.span
                aria-hidden="true"
                animate={{ scale: [1, 1.3, 1], rotate: [0, 15, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-2 -top-2 text-seal"
              >
                ✦
              </motion.span>
              View My Work
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-ink px-6 py-3.5 font-mono text-xs uppercase tracking-widest2 text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Portrait block — manga panel framing */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
          className="order-1 md:order-2 md:col-span-5 lg:col-span-5"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            whileHover={{ rotate: -1.2, scale: 1.015 }}
            className="panel-corners relative mx-auto aspect-[4/5] w-full max-w-sm text-ink transition-transform duration-300 md:max-w-none"
          >
            {/* halftone accent block behind the portrait */}
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0, x: -6, y: -6 }}
              animate={{ opacity: 0.4, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -right-3 -top-3 h-full w-full bg-halftone bg-halftonesize md:-right-5 md:-top-5"
            />
            <div className="relative h-full w-full overflow-hidden border border-ink bg-bone">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/profile/profile.png"
                alt="Portrait of Vincent Arbitrario"
                className="h-full w-full object-cover grayscale contrast-[1.08]"
                onError={(e) => {
                  console.warn(
                    `Profile photo not found at "${e.currentTarget.src}". ` +
                      `Check that the file exists at /public/images/profile/profile.png ` +
                      `and that its real file type matches the extension in its name ` +
                      `(check the "Type" column in File Explorer — Windows sometimes ` +
                      `shows a different extension in the name than the actual file format).`
                  );
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextSibling.style.display = "flex";
                }}
              />
              <div
                style={{ display: "none" }}
                className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-bone px-6 text-center"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest2 text-steel">
                  Add your photo to
                </span>
                <span className="font-mono text-[10px] text-steel">
                  /public/images/profile/profile.png
                </span>
              </div>
              <div className="halftone-overlay" />
            </div>
            <span className="absolute bottom-3 left-3 bg-paper px-2 py-1 font-mono text-[10px] uppercase tracking-widest2">
              Fig. 01 — Vincent
            </span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mx-auto mb-6 hidden items-center gap-2 font-mono text-[10px] uppercase tracking-widest2 text-steel md:flex"
      >
        <ArrowDown className="h-3 w-3 animate-bounce" />
        Scroll
      </motion.div>
    </section>
  );
}
