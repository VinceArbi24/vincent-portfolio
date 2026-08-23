const ITEMS = [
  "VIDEO EDITING",
  "GRAPHIC DESIGN",
  "SOCIAL MEDIA CONTENT",
  "THUMBNAILS",
  "ADVERTISING",
  "CAROUSELS",
];

/**
 * Continuous scrolling strip of service keywords, styled like a manga
 * volume spine / editorial ticker. Purely decorative, low-key motion.
 */
export default function Marquee() {
  const loopItems = [...ITEMS, ...ITEMS];

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-ink bg-ink py-3 text-paper"
    >
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap font-display text-2xl uppercase tracking-tightest sm:text-3xl">
        {loopItems.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            {item}
            <span className="text-seal">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
