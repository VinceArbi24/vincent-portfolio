import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "@/data/siteConfig";

/**
 * Shows real client quotes once you add them to siteConfig.testimonials.
 * Until then, it shows an honest placeholder instead of an empty gap or
 * — worse — invented reviews.
 */
export default function Testimonials() {
  const { testimonials } = siteConfig;
  const hasTestimonials = testimonials && testimonials.length > 0;

  return (
    <section className="border-t border-line bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading index="06" eyebrow="Client Feedback" title="What Clients Say" />

        {hasTestimonials ? (
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={`${t.author}-${i}`} delay={i * 0.08}>
                <figure className="panel-corners relative h-full border border-line bg-paper p-6">
                  <span className="font-display text-4xl leading-none text-seal">&ldquo;</span>
                  <blockquote className="mt-2 text-sm leading-relaxed text-ink/85">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-5 border-t border-line pt-4 font-mono text-[10px] uppercase tracking-widest2 text-steel">
                    {t.author}
                    {t.context ? ` — ${t.context}` : ""}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.1}>
            <div className="panel-corners relative mt-14 flex flex-col items-center gap-3 border border-dashed border-line bg-paper px-6 py-16 text-center">
              <span className="font-mono text-[10px] uppercase tracking-widest2 text-steel">
                Coming soon
              </span>
              <p className="max-w-md text-sm text-ink/70">
                Client testimonials will appear here once collected. Add
                real quotes to <code className="text-ink">testimonials</code> in{" "}
                <code className="text-ink">data/siteConfig.js</code> and this
                section fills in automatically.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
