import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { defineConfig } from "drizzle-kit";

expand(config());

export default defineConfig({
  schema: "./src/db/schema/index.ts",
  dialect: "postgresql",
  out: "./src/db/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
});
