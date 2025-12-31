import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "src",
  future: {
    unstable_optimizeDeps: true,
    unstable_subResourceIntegrity: true,
    v8_middleware: true,
    v8_splitRouteModules: true,
    v8_viteEnvironmentApi: true,
  },
  ssr: true,
} satisfies Config;
