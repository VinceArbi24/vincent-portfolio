import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "@/data/siteConfig";

export default function Services() {
  return (
    <section id="services" className="border-t border-line bg-ink py-24 text-paper md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading index="05" eyebrow="Services" title="What I Do" theme="dark" />

        <div className="mt-14 grid grid-cols-1 border-t border-paper/15 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.06}>
              <div className="group flex h-full flex-col gap-4 border-b border-r border-paper/15 p-8 transition-colors duration-300 hover:bg-paper/[0.04]">
                <span className="font-mono text-xs text-seal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl uppercase leading-tight tracking-tightest">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-paper/70">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
