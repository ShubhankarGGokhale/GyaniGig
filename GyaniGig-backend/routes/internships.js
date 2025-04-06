import { Router } from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 📥 Load the JSON data dynamically
router.get("/", async (req, res) => {
  try {
    const dataPath = path.join(__dirname, "../data/internships.json");
    const internshipsJson = await fs.readFile(dataPath, "utf-8");
    const internships = JSON.parse(internshipsJson);
    res.json(internships);
  } catch (err) {
    console.error("Failed to load internships:", err);
    res.status(500).json({ error: "Failed to load internships" });
  }
});

export default router;
