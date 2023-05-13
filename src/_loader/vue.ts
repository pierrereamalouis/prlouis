// import { build } from "https://esm.sh/v119/vite@4.3.5/es2022/vite.mjs";

import { build } from "vite";
import vue from "npm:@vitejs/plugin-vue@^4.0.0";

(async () => {
  await build({
    plugins: [vue()],
    build: {
      rollupOptions: {
        external: ["vue"],
        input: ["src/_vue/App.vue"],
        output: {
          format: "es",
          dir: "src/components",
          entryFileNames: "[name].js",
        },
      },
    },
  });
})();
