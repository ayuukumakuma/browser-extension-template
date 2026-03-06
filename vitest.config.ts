import { defineConfig } from "vitest/config";
import { WxtVitest } from "wxt/testing/vitest-plugin";

export default defineConfig({
  test: {
    globals: false,
    include: ["tests/**/*.spec.ts"],
    exclude: [".direnv/**", ".output/**", ".wxt/**"],
  },
  plugins: [WxtVitest()],
});
