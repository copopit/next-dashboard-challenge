import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({
  path: "./.env.local",
});

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    connectionString: process.env.DB_URL as string,
  },
} satisfies Config;

// connectionString: process.env.NEXT_PUBLIC_DATABASE_CONNECTIONSTRING!,

// dbCredentials: {
//   host: process.env.DATABSE_HOST as string,
//   database: process.env.DATABASE_NAME as string,
//   user: process.env.DATABASE_USERNAME as string,
//   password: process.env.DATABASE_PASSWORD as string,
// },