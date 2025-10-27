import express from "express";
import db from "../../db.js";

const router = express.Router();

//  GET all tasks
router.get("/", (req, res) => {
  const sql = `
    SELECT t.id, t.title, t.description, t.deadline, t.status, team.name AS assigned_to
    FROM tasks t
    LEFT JOIN team ON t.assigned_to = team.id
  `;
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ message: "DB Error", error: err.message });
    res.json(result);
  });
});

// POST add new task
router.post("/", (req, res) => {
  const { title, description, assigned_to, deadline } = req.body;
  const status = "Pending";

  const sql = "INSERT INTO tasks (title, description, assigned_to, deadline, status) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [title, description, assigned_to, deadline, status], (err, result) => {
    if (err) return res.status(500).json({ message: "Database Error", error: err.message });
    res.status(200).json({ message: "Task added successfully" });
  });
});

//  PUT update task
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, assigned_to, deadline, status } = req.body;

  const sql = `
    UPDATE tasks
    SET title=?, description=?, assigned_to=?, deadline=?, status=?
    WHERE id=?
  `;
  db.query(sql, [title, description, assigned_to, deadline, status, id], (err, result) => {
    if (err) return res.status(500).json({ message: "Error updating task", error: err.message });
    res.json({ message: "Task updated successfully" });
  });
});

//  DELETE task
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM tasks WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json({ message: "Error deleting task", error: err.message });
    res.json({ message: "Task deleted successfully" });
  });
});

// PATCH mark as complete
// Mark task as complete
router.put("/:id/complete", (req, res) => {
  const taskId = req.params.id;

  const sql = "UPDATE tasks SET status = 'Completed' WHERE id = ?";
  db.query(sql, [taskId], (err, result) => {
    if (err) return res.status(500).json({ message: "DB error", error: err.message });

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Task not found" });

    res.json({ message: "Task marked as complete!" });
  });
});

export default router;
