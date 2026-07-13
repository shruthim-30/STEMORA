import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { users, contactSubmissions } from "./drizzle/schema";
import * as dotenv from "dotenv";

dotenv.config();

async function test() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    console.error("DATABASE_URL not set");
    return;
  }

  console.log("Connecting to:", url);
  try {
    const connection = await mysql.createConnection(url);
    const db = drizzle(connection);
    console.log("Connected successfully");

    // Try to select from users
    try {
      const allUsers = await db.select().from(users);
      console.log("Users table exists, count:", allUsers.length);
    } catch (e) {
      console.log("Users table might not exist yet");
    }

    await connection.end();
  } catch (error) {
    console.error("Connection failed:", error);
  }
}

test();
