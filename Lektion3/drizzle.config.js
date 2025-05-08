// filepath: /workspaces/Neurodagbog2025/Lektion3/drizzle.config.js
import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';
import fs from 'fs';
console.log('Schema file exists:', fs.existsSync('./Lektion3/src/lib/server/db/schema.js'));

dotenv.config(); // Indlæs .env-filen
console.log('DATABASE_URL:', process.env.DATABASE_URL); // Debug linje

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

export default defineConfig({
  "schema": "./Lektion3/src/lib/server/db/schema.js", // Relativ sti
  "out": "./src/lib/server/db/migrations",
  "dialect": "postgresql",
  "dbCredentials": {
    "host": "ep-quiet-surf-a27edkmn-pooler.eu-central-1.aws.neon.tech",
    "database": "neondb",
    "user": "neondb_owner",
    "password": "npg_v79qkVRUgmQI",
    "ssl": true
  }
});