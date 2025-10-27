import express from "express";
import db from "../../db.js";

const router = express.Router();

// Get all courses
router.get("/", (req, res) => {
  const q = "SELECT * FROM courses ORDER BY id DESC";
  db.query(q, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Get course by ID
router.get("/:id", (req, res) => {
  db.query("SELECT * FROM courses WHERE id=?", [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
});

// Add new course
router.post("/", (req, res) => {
  const { course_id, add_course_name, added_by, status, remarks } = req.body;
  const q = `
    INSERT INTO courses (course_id, add_course_name, added_by, status, remarks)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(q, [course_id, add_course_name, added_by, status || "hold", remarks], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: " Course added", id: result.insertId });
  });
});

// Update course
router.put("/:id", (req, res) => {
  const { add_course_name, edited_by, status, remarks } = req.body;
  const q = `
    UPDATE courses 
    SET add_course_name=?, edited_by=?, status=?, remarks=?, edited_by_timestamp=NOW()
    WHERE id=?
  `;
  db.query(q, [add_course_name, edited_by, status, remarks, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: " Course updated" });
  });
});

// Delete course
router.delete("/:id", (req, res) => {
  db.query("DELETE FROM courses WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: " Course deleted" });
  });
});

export default router;
