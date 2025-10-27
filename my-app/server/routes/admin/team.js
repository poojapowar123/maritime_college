// routes/team.js
import express from "express";
import db from "../../db.js";

const router = express.Router();

// GET all team members
router.get("/", (req, res) => {
  db.query("SELECT id, name FROM team", (err, results) => {
    if (err) return res.status(500).json({ error: "DB Error" });
    res.json(results);
  });
});

// GET single member by id (optional)
router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT id, name FROM team WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: "DB Error" });
    if (results.length === 0) return res.status(404).json({ error: "Member not found" });
    res.json(results[0]);
  });
});

export default router;
