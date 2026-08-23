/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        paper: "#f5f4f0",
        bone: "#e9e7e0",
        steel: "#87857e",
        line: "#d6d3ca",
        linedark: "#2a2a27",
        seal: "#a53a2c",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.35em",
      },
      backgroundImage: {
        halftone:
          "radial-gradient(rgba(10,10,10,0.9) 1px, transparent 1.4px)",
      },
      backgroundSize: {
        halftonesize: "6px 6px",
      },
      transitionTimingFunction: {
        panel: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 26s linear infinite",
      },
    },
  },
  plugins: [],
};
