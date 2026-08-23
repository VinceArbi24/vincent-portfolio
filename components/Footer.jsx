import { siteConfig } from "@/data/siteConfig";
import { contactLinks } from "@/data/contactLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <p className="font-display text-2xl uppercase tracking-tightest">
            {siteConfig.name}
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-widest2 text-steel">
            {siteConfig.role}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-widest2">
            <li>
              <a href={contactLinks.mailto} className="hover:opacity-60">
                Email
              </a>
            </li>
            <li>
              <a
                href={contactLinks.whatsapp}
                className="hover:opacity-60"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={contactLinks.linkedin}
                className="hover:opacity-60"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#work" className="hover:opacity-60">
                Work
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <p className="mx-auto mt-10 max-w-7xl px-6 font-mono text-[10px] uppercase tracking-widest2 text-steel md:px-10">
        © {year} {siteConfig.name}. All rights reserved.
      </p>
    </footer>
  );
}
