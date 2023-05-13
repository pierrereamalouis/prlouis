import { defineConfig } from "npm:vite@^4.0.4";
import glob from "glob";
import path from "node:path";
import { fileURLToPath } from "node:url";

import "npm:lit@^2.5.0";

console.log(Deno.args);

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: /^lit/,
      input: ["src/components/my-element.ts", "src/components/name-tag.ts"],
      output: {
        format: "es",
        dir: "../src/components",
        entryFileNames: "[name].js",
      },
    },
  },
});
