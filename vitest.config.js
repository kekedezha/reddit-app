import { defineConfig, mergeConfig, configDefaults } from "vitest/config";
import viteConfig from "./vite.config.js";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      include: ["tests/**/*.{test,spec}.js?(x)"],
      exclude: [...configDefaults.exclude, "node_modules/**"],
      setupFiles: "./setupTests.js",
    },
  })
);
