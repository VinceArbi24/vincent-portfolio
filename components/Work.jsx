"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { categories, projects } from "@/data/projects";

export default function Work() {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((p) => p.categories.includes(active));
  }, [active]);

  return (
    <section id="work" className="border-t border-line bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading index="03" eyebrow="Selected Work" title="The Work" />

          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap gap-2 md:justify-end"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={active === cat.id}
                onClick={() => setActive(cat.id)}
                className={`border px-4 py-2 font-mono text-[11px] uppercase tracking-widest2 transition-colors duration-300 ${
                  active === cat.id
                    ? "border-ink bg-ink text-paper"
                    : "border-line text-ink/70 hover:border-ink hover:text-ink"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                total={filtered.length}
                onOpen={setSelected}
              />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="mt-14 font-mono text-xs uppercase tracking-widest2 text-steel">
            No projects in this category yet.
          </p>
        )}
      </div>

      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
        allProjects={filtered}
        onNavigate={setSelected}
      />
    </section>
  );
}
