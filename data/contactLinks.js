import { siteConfig } from "./siteConfig";

const { email, whatsappNumber, linkedin } = siteConfig.contact;

export const contactLinks = {
  email,
  // Opens Gmail's compose window directly with the address filled in.
  gmailCompose: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}`,
  // Standard fallback for people without a Gmail account signed in —
  // opens whatever mail client is set as default on their device.
  mailto: `mailto:${email}`,
  // wa.me expects digits only, no plus sign or spaces.
  whatsapp: `https://wa.me/${whatsappNumber}`,
  linkedin,
};
