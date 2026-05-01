import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: "happy-dom",
    setupFiles: ["./test/setup.ts"],
    coverage: {
      provider: "v8",
      exclude: ["./build", "./node_modules", "./test"],
    },
  },
});
