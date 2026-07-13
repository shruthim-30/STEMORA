import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./server/db.ts", // IMPORTANT (your schema file path)
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});