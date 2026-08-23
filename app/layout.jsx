import { Anton, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Vincent Arbitrario — Graphic Designer / Video Editor",
  description:
    "Portfolio of Vincent Arbitrario, a graphic designer and video editor specializing in short-form video, social media content, thumbnails, and advertisements.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
