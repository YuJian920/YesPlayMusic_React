import { defineConfig } from "vite";
import { swcReactRefresh } from "vite-plugin-swc-react-refresh"
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [swcReactRefresh(), WindiCSS()],
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
