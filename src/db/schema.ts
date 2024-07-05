import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { createId } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";

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
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text("name").notNull(),
  description: text("description").notNull(),
  location: text("location").notNull(),
  price: integer("price").notNull(),
});

export const reservations = sqliteTable("reservation", {
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  accomodationId: text("accomodation_id")
    .notNull()
    .references(() => accomodations.id),
  checkIn: text("check_in").notNull(),
  checkOut: text("check_out").notNull(),
  id: text("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
});

export const reservationsRelations = relations(reservations, ({ one }) => ({
  accomodation: one(accomodations, {
    fields: [reservations.accomodationId],
    references: [accomodations.id],
  }),
  user: one(users, {
    fields: [reservations.userId],
    references: [users.id],
  }),
}));
