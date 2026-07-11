import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  // GitHub Pages serves this repo from the /fresh-people-co-za/ subpath, so
  // asset URLs must be prefixed or they 404 (blank page). The production FTP
  // site is served from the domain root, so it keeps the default '/'.
  const isGitHubPages = process.env.GITHUB_PAGES === "true";
  return {
    base: isGitHubPages ? "/fresh-people-co-za/" : "/",
    plugins: [react(), tailwindcss()],
    define: {
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== "true",
    },
  };
});
