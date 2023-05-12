import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";

const path = require("path");


export default defineConfig({
  plugins: [react(), svgrPlugin()],
  resolve: {
    alias: [
      { find: "src", replacement: path.resolve(__dirname, "src") },
    ],
  }
});