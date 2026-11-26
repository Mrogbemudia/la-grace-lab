import { defineConfig } from "vitest/config";
import path from "node:path";
import { loadEnvFile } from "node:process";

// Tests use .env.test (a separate Neon branch), never your real data.
try {
  loadEnvFile(".env.test");
} catch {
  // unit tests run without it; integration tests need it
}

export default defineConfig({
  test: { include: ["tests/unit/**/*.test.ts", "tests/integration/**/*.test.ts"], environment: "node", fileParallelism: false },
  resolve: { alias: { "@": path.resolve(__dirname, ".") } },
});
