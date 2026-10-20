import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";
import { app } from "electron";

export const initDB = async () => {
    const dbPath = path.join(app.getPath("userData"), "Chat.db");

    const db = await open({
        filename: dbPath,
        driver: sqlite3.Database,
    });

    await db.exec(`
    CREATE TABLE IF NOT EXISTS Chat (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      Time TEXT
    )
  `);

    return db;
};