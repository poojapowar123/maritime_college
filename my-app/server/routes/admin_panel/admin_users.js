import express from "express";
import db from "../../db.js";

import bcrypt from "bcryptjs";

const router = express.Router();

// Get all users
router.get("/", (req, res) => {
  const q = "SELECT * FROM users ORDER BY user_id DESC";
  db.query(q, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

//  Get single user by ID
router.get("/:id", (req, res) => {
  const q = "SELECT * FROM users WHERE user_id = ?";
  db.query(q, [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
});

//  Create new user
router.post("/", async (req, res) => {
  try {
    const { name, email_id, contact_no, designation, department, password, role, created_by } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const q = `
      INSERT INTO users (name, email_id, contact_no, designation, department, password, role, created_by)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(q, [name, email_id, contact_no, designation, department, hashedPassword, role, created_by], (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "User added successfully", user_id: result.insertId });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  Update user
router.put("/:id", (req, res) => {
  const { name, email_id, contact_no, designation, department, role, status } = req.body;
  const q = `
    UPDATE users 
    SET name=?, email_id=?, contact_no=?, designation=?, department=?, role=?, status=? 
    WHERE user_id=?
  `;
  db.query(q, [name, email_id, contact_no, designation, department, role, status, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: " User updated successfully" });
  });
});

//  Delete user
router.delete("/:id", (req, res) => {
  const q = "DELETE FROM users WHERE user_id=?";
  db.query(q, [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: " User deleted successfully" });
  });
});

export default router;
