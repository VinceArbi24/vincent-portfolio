// Simple monochrome brand marks for WhatsApp and LinkedIn, drawn to match
// the stroke weight/style of the lucide icons used elsewhere on the site.
// Kept as local SVGs (rather than a brand-icon package) so the palette
// stays strictly black-and-white with no imported brand colors.

export function WhatsAppIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.87 11.9L4 20l4.2-1.1a7.9 7.9 0 0 0 3.85 1h.01a7.94 7.94 0 0 0 5.54-13.58ZM12.06 18.4h-.01a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.43-.16-.25a6.6 6.6 0 0 1 10.2-8.24 6.55 6.55 0 0 1 1.94 4.66 6.62 6.62 0 0 1-6.54 6.67Zm3.6-4.93c-.2-.1-1.17-.58-1.35-.64-.18-.07-.31-.1-.44.1-.13.19-.5.64-.62.77-.11.13-.23.15-.42.05-.2-.1-.83-.3-1.58-.97a5.9 5.9 0 0 1-1.09-1.35c-.11-.2 0-.3.09-.4.09-.1.2-.23.3-.34.1-.12.13-.2.2-.33.06-.13.03-.25-.02-.35-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.33h-.38c-.13 0-.34.05-.52.24-.18.2-.68.66-.68 1.6s.7 1.87.79 2c.1.13 1.37 2.1 3.33 2.94.46.2.83.32 1.11.41.47.15.9.13 1.24.08.38-.06 1.17-.48 1.33-.94.17-.46.17-.86.12-.94-.05-.09-.18-.14-.38-.24Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LinkedInIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M7.6 10v6.2M7.6 7.7v.02M11.4 16.2V10M11.4 12.6c0-1.5.9-2.6 2.2-2.6s2.1 1 2.1 2.6v3.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
