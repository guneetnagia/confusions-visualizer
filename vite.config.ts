import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  // dynamically load dev-only plugin to avoid Rollup trying to resolve / externalize it at build time
  const devPlugins = [];
  if (mode === "development") {
    // lazy-import so production build doesn't attempt to bundle/node-resolve this module
    const mod = await import("lovable-tagger");
    if (mod && typeof mod.componentTagger === "function") {
      devPlugins.push(mod.componentTagger());
    }
  }

  return {
    base: "/confusions-visualizer/",
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), ...devPlugins],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});