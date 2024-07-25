import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { configDefaults } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    include: ["tests/**/*.{test,spec}.js"],
    exclude: [...configDefaults.exclude, "node_modules/**"],
    setupFiles: "./setupTests.js",
  },
});
