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
      entry: path.resolve(__dirname, "src/main.tsx"),
      name: "casterMaterials",
      formats: ["es", "umd"],
      fileName: (format) => `main.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@craftjs/core",
        "antd",
        "@ant-design/icons",
        "@emotion/react",
        "@emotion/styled",
        "@emotion/css",
        "lodash"
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
