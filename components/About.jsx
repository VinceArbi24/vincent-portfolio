import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "@/data/siteConfig";

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeading index="02" eyebrow="About" title="Who I Am" />
          </div>

          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <p className="font-mono text-xs uppercase tracking-widest2 text-steel">
                {siteConfig.about.subheading}
              </p>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/85 md:text-xl">
                {siteConfig.about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-line pt-8 font-mono text-xs uppercase tracking-widest2 text-ink/70 sm:grid-cols-3">
                {[
                  "Short-Form Video",
                  "Social Media Content",
                  "Graphic Design",
                  "Promotional Graphics",
                  "YouTube Thumbnails",
                  "Carousel Design",
                ].map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="h-1 w-1 bg-seal" aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
