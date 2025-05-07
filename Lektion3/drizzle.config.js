// filepath: /workspaces/Neurodagbog2025/Lektion3/drizzle.config.js
import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';

dotenv.config(); // Indlæs .env-filen

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

export default defineConfig({
  "schema": "./src/lib/server/db/schema.js",
  "out": "./src/lib/server/db/migrations",
  "driver": "pg",
  "dbCredentials": {
    "connectionString": process.env.DATABASE_URL
  }
});
