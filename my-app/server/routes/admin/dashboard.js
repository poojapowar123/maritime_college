import express from "express";
import db from "../../db.js";
import { requireAdmin } from "../../middleware/auth.js";

const router = express.Router();

router.get("/", requireAdmin, (req, res) => {
  const sql = `
    SELECT 
      COUNT(*) AS total,
      IFNULL(SUM(CASE WHEN status='Completed' THEN 1 ELSE 0 END),0) AS completed,
      IFNULL(SUM(CASE WHEN status='Pending' THEN 1 ELSE 0 END),0) AS pending
    FROM tasks
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ message: "Database error", error: err.message });
    res.json(results[0]);
  });
});

export default router;
