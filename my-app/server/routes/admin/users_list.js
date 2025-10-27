import express from "express";
import db from "../../db.js";
import { requireAdmin } from "../../middleware/auth.js";
import bcrypt from "bcryptjs";

const router = express.Router();

// GET all users
router.get("/", requireAdmin, (req, res) => {
  db.query("SELECT id, name, email, role FROM users", (err, results) => {
    if (err) return res.status(500).json({ error: "DB error" });
    res.json(results);
  });
});

// GET users with tasks count
router.get("/with-tasks", requireAdmin, (req, res) => {
  const sql = `
    SELECT u.id, u.name, u.email, u.role,
           COUNT(t.id) AS task_count,
           SUM(CASE WHEN t.status='Completed' THEN 1 ELSE 0 END) AS completed_tasks
    FROM users u
    LEFT JOIN tasks t ON u.id = t.user_id
    GROUP BY u.id
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: "DB error" });
    res.json(results);
  });
});

//POST add new user
router.post("/", requireAdmin, async (req, res) => {
  const { name, email, role, password } = req.body;

  if (!name || !email || !role || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Hash password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = "INSERT INTO users (name, email, role, password) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, role, hashedPassword], (err, result) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") return res.status(400).json({ error: "Email already exists" });
      return res.status(500).json({ error: "DB error" });
    }
    res.json({ message: "User added successfully", id: result.insertId });
  });
});

//PUT update user
router.put("/:id", requireAdmin, (req, res) => {
  const { name, email, role } = req.body;
  const { id } = req.params;
  const sql = "UPDATE users SET name=?, email=?, role=? WHERE id=?";
  db.query(sql, [name, email, role, id], (err) => {
    if (err) return res.status(500).json({ error: "DB error" });
    res.json({ message: "User updated successfully" });
  });
});

//DELETE user
router.delete("/:id", requireAdmin, (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM users WHERE id=?";
  db.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: "DB error" });
    res.json({ message: "User deleted successfully" });
  });
});

export default router;
