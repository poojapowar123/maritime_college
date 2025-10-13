import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./db.js";
// import { body, validationResult } from "express-validator";

const app = express();

app.use(cors({origin: "http://localhost:3000"}));
app.use(bodyParser.json());


app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);  // send results as JSON
  });
});

app.get("/test", (req, res) => {
  db.query("SELECT 1 + 1 AS result", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});


// Create Employee
app.post("/employees", (req, res) => {
  const { name, position, salary } = req.body;
  const sql = "INSERT INTO employees (name, position, salary) VALUES (?, ?, ?)";
  db.query(sql, [name, position, salary], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Employee added successfully!", id: result.insertId });
  });
})

// Update Employee
app.put("/employees/:id", (req, res) => {
  const { id } = req.params;
  const { name, position, salary } = req.body;
  const sql = "UPDATE employees SET name=?, position=?, salary=? WHERE id=?";
  db.query(sql, [name, position, salary, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Employee updated successfully!" });
  });
});


// Delete Employee
app.delete("/employees/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM employees WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Employee deleted!" });
  });
});


app.listen(3300, () => console.log("Server running on port 3300"));

