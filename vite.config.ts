import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Replace with your GitHub repo name
const repoName = "ember-savings";

export default defineConfig(({ mode }) => ({
  base: `/${repoName}/`, // 👈 Important for GitHub Pages
  server: {
    host: "::",
    port: 9000,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
