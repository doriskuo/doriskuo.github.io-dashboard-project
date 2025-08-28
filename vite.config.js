import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/doriskuo.github.io-dashboard-project/",
  plugins: [react(), tailwindcss()],
});
