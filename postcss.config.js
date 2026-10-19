// This file intentionally exports an empty config.
// The new portfolio uses Tailwind CSS v4 via the @tailwindcss/vite Vite plugin
// (configured in vite.config.ts). PostCSS does NOT need to process Tailwind here —
// the Vite plugin handles it directly.
// This file prevents PostCSS from accidentally picking up the parent directory's
// Tailwind v3 postcss config when building from within this subfolder.
export default {}
