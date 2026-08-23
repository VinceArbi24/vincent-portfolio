// ────────────────────────────────────────────────────────────────
// SITE CONFIG
// Edit this file to update names, copy, and contact details across
// the whole website. You should not need to touch component code
// to change text — it all flows from here and from projects.js.
// ────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Vincent Arbitrario",
  firstName: "Vincent",
  role: "Graphic Designer / Video Editor",
  tagline:
    "Hi, I'm Vincent, a graphic designer and video editor focused on creating engaging visual content, short-form videos, social media creatives, advertisements, thumbnails, and branded content.",

  about: {
    heading: "Vincent Arbitrario",
    subheading: "Graphic Designer & Video Editor",
    paragraphs: [
      "I work on visual content — short-form video editing, social media content, graphic design, promotional graphics, advertisements, YouTube thumbnails, carousel designs, and branded visual content.",
      "I care about pacing, clarity, and making things that actually hold attention. Every project starts with the same question: what's the one thing this needs to say, and how do I say it fast.",
      "Based on the work below, feel free to reach out if you've got something in mind.",
    ],
  },

  // Real contact details — used to build the Gmail, WhatsApp, and
  // LinkedIn buttons. Edit the raw values here; components build the
  // correct URLs (mailto, Gmail compose, wa.me, LinkedIn) from these.
  contact: {
    email: "vince.arbi@gmail.com",
    whatsappNumber: "639950378736", // digits only, used in the wa.me link
    whatsappDisplay: "+639 950378736", // shown to visitors
    linkedin: "https://www.linkedin.com/in/vincent-arbitrario-54aa09380",
  },

  // Real experience only — add more entries or edit dates as needed.
  experience: [
    {
      role: "Video Editor",
      org: "Mason",
      period: "~1 year",
      description:
        "Creating Instagram Reels and short-form content, focused on pacing, hooks, and retention for social platforms.",
    },
    {
      role: "Virtual Assistant",
      org: "Freelance / Personal",
      period: "TODO: add dates",
      description:
        "General creative and content-related virtual assistance work. Update this line with more detail if you'd like.",
    },
  ],

  services: [
    {
      title: "Video Editing",
      description:
        "Short-form videos, Reels, TikToks, YouTube Shorts and social media content.",
    },
    {
      title: "Graphic Design",
      description:
        "Social media creatives, advertisements, promotional graphics and branded visual content.",
    },
    {
      title: "Thumbnail Design",
      description: "YouTube thumbnails and attention-grabbing visual covers.",
    },
    {
      title: "Social Media Content",
      description: "Carousels, promotional posts and other social media graphics.",
    },
    {
      title: "Virtual Assistance",
      description: "General creative and content-related virtual assistance.",
    },
  ],

  // Real client feedback, anonymized at the client's/your discretion.
  // Add more the same way: { quote, author, context }
  testimonials: [
    {
      quote:
        "Vincent understood exactly what I was looking for and delivered clean, engaging edits. He was easy to communicate with and very open to feedback.",
      author: "Anonymous Client",
      context: "Video Editing",
    },
    {
      quote:
        "The edits were creative, well-paced, and fit the style I wanted. Vincent paid attention to the small details and made the content feel much more polished.",
      author: "Anonymous Client",
      context: "Short-Form Content",
    },
    {
      quote:
        "Vincent was reliable, responsive, and easy to work with. He took feedback seriously and consistently improved the work.",
      author: "Anonymous Client",
      context: "Creative Services",
    },
    {
      quote:
        "I really liked how Vincent handled the visual direction. The final designs were clean, professional, and captured the idea I had in mind.",
      author: "Anonymous Client",
      context: "Graphic Design",
    },
    {
      quote:
        "Working with Vincent was a smooth experience. He understood the brief, communicated clearly, and delivered quality work.",
      author: "Anonymous Client",
      context: "Video Editing & Design",
    },
  ],

  nav: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};
