import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), WindiCSS()],
  server: {
    proxy: {
      "/api": {
        target: "https://netease.yujian.icu",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
