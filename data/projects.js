// ────────────────────────────────────────────────────────────────
// PORTFOLIO DATA
//
// To add a new project: copy one object below, give it a unique
// "id", and point "src" (and "poster" for videos) at a file you've
// placed in /public. That's it — it will appear in the gallery
// automatically.
//
// type: "video" | "image"
// categories: any combination of
//   "video", "graphic-design", "social-media", "thumbnails", "advertising"
// ────────────────────────────────────────────────────────────────

export const categories = [
  { id: "all", label: "All" },
  { id: "video", label: "Video" },
  { id: "graphic-design", label: "Graphic Design" },
  { id: "social-media", label: "Social Media" },
  { id: "thumbnails", label: "Thumbnails" },
  { id: "advertising", label: "Advertising" },
];

export const projects = [
  {
    id: "podcast-edit-01",
    title: "Podcast Edit 01",
    type: "video",
    categories: ["video"],
    tag: "Video Editing",
    tools: ["Premiere Pro", "CapCut"],
    description:
      "Long-form podcast episode cut for pacing and clarity, with clean captioning and multi-cam switching.",
    src: "/videos/podcast/podcast-1.mp4",
  },
  {
    id: "podcast-edit-02",
    title: "Podcast Edit 02",
    type: "video",
    categories: ["video"],
    tag: "Video Editing",
    tools: ["Premiere Pro"],
    description:
      "Second podcast edit with tightened pacing, sound design, and highlight clips prepared for repurposing.",
    src: "/videos/podcast/podcast-2.mp4",
  },
  {
    id: "real-estate-01",
    title: "Real Estate Video 01",
    type: "video",
    categories: ["video", "advertising"],
    tag: "Real Estate / Promo",
    tools: ["Premiere Pro", "DaVinci Resolve"],
    description:
      "Property walkthrough edited with smooth transitions and text overlays for listing promotion.",
    src: "/videos/real-estate/real-estate-1.mp4",
  },
  {
    id: "real-estate-02",
    title: "Real Estate Video 02",
    type: "video",
    categories: ["video", "advertising"],
    tag: "Real Estate / Promo",
    tools: ["Premiere Pro"],
    description:
      "Second property feature focused on pacing and a strong call-to-action close.",
    src: "/videos/real-estate/real-estate-2.mp4",
  },
  {
    id: "shorts-edit-01",
    title: "Shorts Edit 01",
    type: "video",
    categories: ["video", "social-media"],
    tag: "Short-Form Video Editing",
    tools: ["Premiere Pro", "CapCut"],
    description:
      "Fast-paced vertical content edited for social media, focusing on pacing, captions, visual hooks, and retention.",
    src: "/videos/shorts/shorts-1.mp4",
  },
  {
    id: "shorts-edit-02",
    title: "Shorts Edit 02",
    type: "video",
    categories: ["video", "social-media"],
    tag: "Short-Form Video Editing",
    tools: ["Premiere Pro", "CapCut"],
    description:
      "Vertical short built around a single hook, edited tight for maximum watch-through.",
    src: "/videos/shorts/shorts-2.mp4",
  },
  {
    id: "youtube-sample-01",
    title: "YouTube Video Sample 01",
    type: "video",
    categories: ["video"],
    tag: "Long-Form Video Editing",
    tools: ["Premiere Pro", "CapCut"],
    description:
      "Full YouTube video edit, including pacing, motion graphics, and sound design.",
    src: "/videos/youtube/youtube-1.mp4",
  },
  {
    id: "carousel-01",
    title: "Carousel Design",
    type: "image",
    categories: ["graphic-design", "social-media"],
    tag: "Social Media Carousel",
    tools: ["Photoshop", "Illustrator"],
    description:
      "Multi-slide carousel designed for consistent visual flow and readability while scrolling.",
    src: "/images/carousel/carousel-1.png",
  },
  {
    id: "youtube-thumbnails-01",
    title: "YouTube Thumbnails",
    type: "image",
    categories: ["graphic-design", "thumbnails"],
    tag: "Thumbnail Design",
    tools: ["Photoshop"],
    description:
      "Attention-grabbing thumbnail set designed for clarity at small sizes and strong click-through.",
    src: "/images/thumbnails/thumbnail-1.png",
  },
  {
    id: "ads-01",
    title: "Advertisement Set",
    type: "image",
    categories: ["graphic-design", "advertising"],
    tag: "Advertising / Promo Graphics",
    tools: ["Photoshop", "Illustrator"],
    description:
      "Promotional graphics designed for paid and organic social placements.",
    src: "/images/advertisements/ad-1.png",
  },
];
