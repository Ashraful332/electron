import express from 'express';
import cors from "cors";
import { initDB } from "./db/db.js";

export const startServer = async () => {
    const app = express();
    const db = await initDB();

    app.use(cors());
    app.use(express.json());

    // GET সব todo
    app.get("/chat", async (_, res) => {
        const Chat = await db.all("SELECT * FROM Chat");
        res.json(Chat);
    });

    // ADD todo
    app.post("/chat", async (req, res) => {
        const { title } = req.body;
        const now = new Date();
        const Times = now.toLocaleTimeString();
        await db.run("INSERT INTO Chat (title, Time) VALUES (?, ?)", [
            title,
            Times,
        ]);
        res.json({ success: true });
    });

    // UPDATE (Supports updating title and/or Time status)
    app.put("/chat/:id", async (req, res) => {
        const { id } = req.params;
        const { title, Time } = req.body;

        if (title !== undefined && Time !== undefined) {
            await db.run("UPDATE Chat SET title=?, Time=? WHERE id=?", [title, Time, id]);
        } else if (title !== undefined) {
            await db.run("UPDATE Chat SET title=? WHERE id=?", [title, id]);
        } else if (Time !== undefined) {
            await db.run("UPDATE Chat SET Time=? WHERE id=?", [Time, id]);
        }

        res.json({ success: true });
    });

    // DELETE
    app.delete("/chat/:id", async (req, res) => {
        const { id } = req.params;
        await db.run("DELETE FROM Chat WHERE id=?", [id]);
        res.json({ success: true });
    });

    app.listen(3001, () => {
        console.log("Server running on http://localhost:3001");
    });
};