import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from 'better-sqlite3';

const sqlite = new Database(process.env.DB_URL!);
const db = drizzle(sqlite);
migrate(db, { migrationsFolder: "drizzle" });

export { db };
