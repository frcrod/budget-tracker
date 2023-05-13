import preact from "@preact/preset-vite";
import { defineConfig, splitVendorChunkPlugin } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), splitVendorChunkPlugin()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
