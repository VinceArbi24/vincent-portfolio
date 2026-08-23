import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "@/data/siteConfig";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading index="04" eyebrow="Experience" title="Where I've Worked" />

        <div className="mt-14 border-t border-line">
          {siteConfig.experience.map((exp, i) => (
            <Reveal key={exp.role + exp.org} delay={i * 0.08}>
              <div className="grid grid-cols-1 gap-2 border-b border-line py-8 md:grid-cols-12 md:items-baseline md:gap-6">
                <span className="font-mono text-xs uppercase tracking-widest2 text-seal md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl uppercase leading-none tracking-tightest md:col-span-4 md:text-3xl">
                  {exp.role}
                </h3>
                <p className="font-mono text-xs uppercase tracking-widest2 text-steel md:col-span-3">
                  {exp.org} — {exp.period}
                </p>
                <p className="text-sm leading-relaxed text-ink/80 md:col-span-4">
                  {exp.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
