import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  
  base: "/", // 👈 REQUIRED for Netlify

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "app/frontend/src"),
    },
  },

  server: {
    host: true,
  },
});
