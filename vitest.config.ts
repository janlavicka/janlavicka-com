import react from "@vitejs/plugin-react";
import { defaultExclude, defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: "happy-dom",
    setupFiles: ["./test/setup.ts"],
    exclude: [...defaultExclude, "test/e2e/**"],
    coverage: {
      provider: "v8",
      exclude: ["./build", "./node_modules", "./test"],
    },
  },
});
