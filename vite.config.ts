import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.app.json"),
      include: ["src/components"],
    }),
    libInjectCss(),
  ],
  optimizeDeps: {
    exclude: ["vue-demi"],
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/components"),
      name: "VueDemiExampleLib",
      fileName: "vue-demi-example-lib",
    },
    rollupOptions: {
      external: ["vue", "vue-demi"],
      output: {
        globals: {
          vue: "Vue",
          "vue-demi": "VueDemi",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
