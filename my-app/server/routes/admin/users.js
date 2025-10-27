import express from "express";
import db from "../../db.js";

const router = express.Router();

// Get all team members
router.get("/", (req, res) => {
  db.query("SELECT * FROM team ORDER BY id DESC", (err, results) => {
    if (err) return res.status(500).json({ message: "Failed to fetch team" });
    res.json(results);
  });
});

// Add new member
router.post("/", (req, res) => {
  const { name, email, role } = req.body;
  db.query("INSERT INTO team (name, email, role) VALUES (?, ?, ?)", [name, email, role], (err) => {
    if (err) return res.status(500).json({ message: "Insert failed" });
    res.json({ message: "Team member added successfully" });
  });
});

// Update member
router.put("/:id", (req, res) => {
  const { name, email, role } = req.body;
  db.query("UPDATE team SET name=?, email=?, role=? WHERE id=?", [name, email, role, req.params.id], (err) => {
    if (err) return res.status(500).json({ message: "Update failed" });
    res.json({ message: "Team member updated successfully" });
  });
});

// Delete member
router.delete("/:id", (req, res) => {
  db.query("DELETE FROM team WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ message: "Delete failed" });
    res.json({ message: "Team member deleted successfully" });
  });
});

export default router;
