import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";



export default defineConfig({
  plugins: [react(), svgrPlugin()],
  resolve: {
    alias: {
      api: "/src/api",
      assets: "/src/assets",
      engine: "/src/engine",
      ui: "/src/ui",
      utils: "/src/utils",
    }
  }
});