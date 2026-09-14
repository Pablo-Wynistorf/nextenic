import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * Base path.
 *
 * The site is deployed to GitHub Pages behind a custom domain (see public/CNAME),
 * so the default is "/". If you ever serve it from a project subpath instead
 * (https://<user>.github.io/<repo>/), set BASE_PATH=/<repo>/ when building.
 */
const base = process.env.BASE_PATH ?? "/";

/**
 * Emits dist/404.html as a byte copy of dist/index.html.
 *
 * GitHub Pages has no server-side rewrite, so a hard load of /impressum would
 * otherwise 404. Serving the SPA shell from 404.html lets the client router
 * resolve the path instead.
 */
function githubPagesSpaFallback() {
  return {
    name: "gh-pages-spa-fallback",
    apply: "build",
    /* writeBundle, not generateBundle: Vite's own HTML plugin emits index.html
       during generateBundle, so reading it from the bundle there is a race that
       silently produced no 404.html at all. By writeBundle the file is on disk. */
    writeBundle(options) {
      const dir = options.dir ?? "dist";
      const shell = path.resolve(dir, "index.html");
      if (!fs.existsSync(shell)) {
        this.warn("index.html not found; skipped writing 404.html");
        return;
      }
      fs.copyFileSync(shell, path.resolve(dir, "404.html"));
    },
  };
}

export default defineConfig({
  base,
  plugins: [react(), tailwindcss(), githubPagesSpaFallback()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    target: "es2022",
    cssMinify: "lightningcss",
    // Screenshots are large; keep them as files rather than inlining.
    assetsInlineLimit: 2048,
    rollupOptions: {
      output: {
        /**
         * Split the vendor libraries out of the app chunk.
         *
         * A function rather than the object form: the object form matches
         * resolved module ids exactly, so listing "react-dom" caught
         * react-dom/index.js but left the much larger react-dom/client.js in the
         * app chunk. Matching on the path inside node_modules catches every
         * entry point of a package.
         */
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;
          if (/node_modules\/(react|react-dom|react-router|react-router-dom|scheduler)\//.test(id)) {
            return "react";
          }
          if (/node_modules\/(gsap|@gsap)\//.test(id)) return "gsap";
          if (/node_modules\/(motion|framer-motion|motion-dom|motion-utils)\//.test(id)) {
            return "motion";
          }
          /* ogl is only reached through the lazy Topography import; leaving it
             unassigned keeps it in that dynamic chunk. */
          if (/node_modules\/ogl\//.test(id)) return undefined;
          return "vendor";
        },
      },
    },
  },
});
