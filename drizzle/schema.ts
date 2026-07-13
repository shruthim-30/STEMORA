import {
  pgTable,
  integer,
  varchar,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

/* =========================================================
   USERS TABLE
   ========================================================= */

export const users = pgTable("users", {
  id: integer("id")
    .generatedAlwaysAsIdentity()
    .primaryKey(),

  openId: varchar("open_id", { length: 255 })
    .notNull()
    .unique(),

  name: varchar("name", { length: 255 }),

  email: varchar("email", { length: 255 }),

  role: varchar("role", { length: 50 })
    .default("user"),

  loginMethod: varchar("login_method", { length: 50 }),

  lastSignedIn: timestamp("last_signed_in")
    .defaultNow(),

  createdAt: timestamp("created_at")
    .defaultNow(),
});

/* =========================================================
   CONTACT SUBMISSIONS TABLE
   ========================================================= */

export const contactSubmissions = pgTable("contact_submissions", {
  id: integer("id")
    .generatedAlwaysAsIdentity()
    .primaryKey(),

  fullName: varchar("full_name", { length: 255 })
    .notNull(),

  email: varchar("email", { length: 255 })
    .notNull(),

  phone: varchar("phone", { length: 50 })
    .notNull(),

  courseInterest: varchar("course_interest", { length: 255 }),

  message: text("message"),

  formType: varchar("form_type", { length: 50 })
    .notNull(),

  submittedAt: timestamp("submitted_at")
    .defaultNow(),
});

/* =========================================================
   TYPE EXPORTS (DRIZZLE AUTO-INFERRED TYPES)
   ========================================================= */

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export type ContactSubmission =
  typeof contactSubmissions.$inferSelect;

export type InsertContactSubmission =
  typeof contactSubmissions.$inferInsert;
