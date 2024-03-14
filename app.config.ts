import { defineConfig } from "@solidjs/start/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // middleware: "./src/middleware.ts",
  server: {
    preset: "bun",
  },
  ssr: true,
  vite() {
    return {
      plugins: [tsconfigPaths()],
    };
  },
});
