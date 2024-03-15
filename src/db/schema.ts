import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("user", {
  github_id: integer("github_id").unique(),
  email: text("email").notNull().unique(),
  id: text("id").notNull().primaryKey(),
  username: text("username").notNull(),
  avatar: text("avatar"),
  name: text("name"),
});

export const sessions = sqliteTable("session", {
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  expiresAt: integer("expires_at").notNull(),
  id: text("id").notNull().primaryKey(),
});
