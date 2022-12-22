import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";

function _resolve(dir: string) {
  return path.resolve(__dirname, dir)
}

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "casterRequest",
      formats: ["es", "umd"],
      fileName: (format) => `main.${format}.js`,
    },
    rollupOptions: {
      external: [
        "axios",
        "antd"
      ],
    },
  },
});
