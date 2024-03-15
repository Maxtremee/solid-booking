import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { createId } from "@paralleldrive/cuid2";

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

export const accomodations = sqliteTable("accomodation", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text("name").notNull(),
  description: text("description").notNull(),
  location: text("location").notNull(),
  price: integer("price").notNull(),
});
