"use client";

import { useEffect, useRef, useState } from "react";
import { VolumeX } from "lucide-react";

/**
 * Renders a project's preview media.
 *
 * Videos autoplay muted and loop automatically — no click or hover
 * needed — but only once they scroll into view, and they pause again
 * once they scroll out, so a page full of projects doesn't try to
 * play every video at once.
 *
 * If a file hasn't been added to /public yet, this shows a clean
 * placeholder panel instead of a broken image/video icon.
 */
export default function MediaThumb({ project, className = "" }) {
  const [failed, setFailed] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (project.type !== "video" || !videoEl || failed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoEl.play().catch(() => {
            // Autoplay can be blocked in rare cases (e.g. low-power mode).
            // Failing silently here is fine — the poster frame still shows.
          });
        } else {
          videoEl.pause();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(videoEl);
    return () => observer.disconnect();
  }, [project.type, failed]);

  if (failed) {
    return (
      <div
        className={`relative flex items-center justify-center bg-bone ${className}`}
        aria-label={`${project.title} preview placeholder`}
      >
        <div className="halftone-overlay" />
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-steel px-4 text-center">
          Add file to
          <br />
          {project.src}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-bone ${className}`}>
      {project.type === "video" ? (
        <>
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={project.src}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            poster={project.poster}
            onError={() => {
              console.warn(
                `"${project.title}" video not found at "${project.src}". Check the filename and extension match exactly (Windows sometimes hides the real extension).`
              );
              setFailed(true);
            }}
            aria-hidden="true"
          />
          <span className="pointer-events-none absolute bottom-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-ink/60 text-paper">
            <VolumeX className="h-3 w-3" />
          </span>
        </>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.src}
          alt={project.title}
          className="h-full w-full object-cover"
          loading="lazy"
          onError={() => {
            console.warn(
              `"${project.title}" image not found at "${project.src}". Check the filename and extension match exactly (Windows sometimes hides the real extension).`
            );
            setFailed(true);
          }}
        />
      )}
    </div>
  );
}
