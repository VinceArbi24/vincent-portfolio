import { Mail, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { WhatsAppIcon, LinkedInIcon } from "./BrandIcons";
import { siteConfig } from "@/data/siteConfig";
import { contactLinks } from "@/data/contactLinks";

export default function Contact() {
  const { whatsappDisplay } = siteConfig.contact;

  return (
    <section id="contact" className="border-t border-line bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest2 text-steel">
            07 — Contact
          </p>
          <h2 className="mt-4 font-display text-[12vw] uppercase leading-[0.85] tracking-tightest sm:text-7xl md:text-8xl">
            Let&apos;s Work
            <br />
            Together
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base text-ink/70 md:text-lg">
            Have a project in mind? Let&apos;s create something worth
            stopping the scroll for.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 border-t border-line pt-8">
            <p className="font-display text-2xl uppercase tracking-tightest">
              {siteConfig.name}
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-widest2 text-steel">
              {siteConfig.role}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            <ContactButton
              href={contactLinks.gmailCompose}
              external
              icon={<Mail className="h-5 w-5" />}
              label="Contact Me on Gmail"
            />
            <ContactButton
              href={contactLinks.whatsapp}
              external
              icon={<WhatsAppIcon className="h-5 w-5" />}
              label="Message Me on WhatsApp"
            />
            <ContactButton
              href={contactLinks.linkedin}
              external
              icon={<LinkedInIcon className="h-5 w-5" />}
              label="Connect With Me on LinkedIn"
            />
          </div>

          <p className="mt-6 font-mono text-[10px] uppercase tracking-widest2 text-steel">
            No Gmail account?{" "}
            <a href={contactLinks.mailto} className="underline underline-offset-4 hover:text-ink">
              Email me directly
            </a>{" "}
            — {contactLinks.email}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 border-t border-line pt-10 text-left sm:grid-cols-3">
            <ContactLine label="Email" value={contactLinks.email} href={contactLinks.mailto} />
            <ContactLine
              label="WhatsApp"
              value={whatsappDisplay}
              href={contactLinks.whatsapp}
              external
            />
            <ContactLine
              label="LinkedIn"
              value="View Profile"
              href={contactLinks.linkedin}
              external
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactButton({ href, icon, label, external }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="panel-corners group relative flex flex-col items-center justify-center gap-3 border border-ink bg-ink px-5 py-7 text-paper transition-colors duration-300 hover:bg-paper hover:text-ink"
    >
      <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
        {icon}
      </span>
      <span className="font-mono text-[11px] uppercase leading-snug tracking-widest2">
        {label}
      </span>
      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
    </a>
  );
}

function ContactLine({ label, value, href, external }) {
  const content = (
    <>
      <p className="font-mono text-[10px] uppercase tracking-widest2 text-steel">{label}</p>
      <p className="mt-2 break-words text-sm text-ink">{value}</p>
    </>
  );

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block transition-opacity duration-300 hover:opacity-60"
    >
      {content}
    </a>
  );
}
