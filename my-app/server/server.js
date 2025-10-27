// code added by miss pooja 10-10-2025

// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// import db from "./db.js";
// // import { body, validationResult } from "express-validator";

// const app = express();

// app.use(cors({origin: "http://localhost:3000"}));
// app.use(bodyParser.json());

// app.get("/employees", (req, res) => {
//   db.query("SELECT * FROM employees", (err, results) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.json(results);  // send results as JSON
//   });
// });

// app.get("/test", (req, res) => {
//   db.query("SELECT 1 + 1 AS result", (err, results) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.json(results);
//   });
// });

// // Create Employee
// app.post("/employees", (req, res) => {
//   const { name, position, salary } = req.body;
//   const sql = "INSERT INTO employees (name, position, salary) VALUES (?, ?, ?)";
//   db.query(sql, [name, position, salary], (err, result) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.json({ message: "Employee added successfully!", id: result.insertId });
//   });
// })

// // Update Employee
// app.put("/employees/:id", (req, res) => {
//   const { id } = req.params;
//   const { name, position, salary } = req.body;
//   const sql = "UPDATE employees SET name=?, position=?, salary=? WHERE id=?";
//   db.query(sql, [name, position, salary, id], (err, result) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.json({ message: "Employee updated successfully!" });
//   });
// });

// // Delete Employee
// app.delete("/employees/:id", (req, res) => {
//   const { id } = req.params;
//   db.query("DELETE FROM employees WHERE id=?", [id], (err, result) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.json({ message: "Employee deleted!" });
//   });
// });

// app.listen(3300, () => console.log("Server running on port 3300"));

// code added by miss pooja 10-10-2025 end

// code added by miss pooja 13-10-2025

// import express from "express";
// import cors from "cors";
// import db from "./db.js";

// const app = express();
// app.use (cors());
// app.use(express.json());

// // Get all tasks
// app.get("/tasks", (req, res) => {
//   db.query("SELECT * FROM tasks", (err, result) => {
//     if (err) return res.status(500).json({ message: "DB Error", error: err.message });
//     res.json(result);
//   });
// });

// //API Route -> Add new Task
// app.post("/tasks", (req, res) => {
//   console.log("Request body:", req.body); // <--- Check what is coming

//   const { title, description, assigned_to, deadline } = req.body;
//   const status = "Pending";

//   const sql = "INSERT INTO tasks (title, description, assigned_to, deadline, status) VALUES (?, ?, ?, ?, ?)";

//   db.query(sql, [title, description, assigned_to, deadline, status], (err, result) => {
//     if (err) {
//       console.error("DB Error:", err);
//       return res.status(500).json({ message: "Database Error", error: err.message });
//     }
//     console.log("Insert result:", result);
//     res.status(200).json({ message: "Task added successfully" });
//   });
// });

// //Get Team Members For Dropdwon
// app.get("/team", (req, res) => {
//   db.query("SELECT * FROM team", (err, result) =>{
//      console.error("Database query error:", err);
//     if (err) return res.status(500).json({message: "Error fetching team"});
//     res.json(result);
//   });
// });

// app.listen(5000, () => {
//   console.log("Server running on port 5000")
// })

import express from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db.js";

import admin from "./routes/admin/admin.js";
import dashboard from "./routes/admin/dashboard.js";

import session from "express-session";

import tasks from "./routes/admin/tasks.js";
import team from "./routes/admin/team.js";
import users from "./routes/admin/users.js";
import users_list from "./routes/admin/users_list.js"

import admin_users from "./routes/admin_panel/admin_users.js";
import courses from "./routes/admin_panel/courses.js"

// Import CommonJS properly
import MySQLStorePkg from "express-mysql-session";
const MySQLStore = MySQLStorePkg(session); // important for ESM
const sessionStore = new MySQLStore({}, db); 

const app = express();
// Use Helmet to set security headers
app.use(helmet());
dotenv.config();
app.use(
  cors({
    origin: "http://localhost:3000", // exact frontend origin
    credentials: true, // allow cookies to be sent
  })
);
app.use(express.json());

// Session store
app.use(
  session({
    key: "user_session",
    secret: "your_secret_key",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60, // 1 hour
      secure: false,  
    },
  })
);


// Use modular routes

app.use("/admin", admin);
app.use("/dashboard", dashboard);

app.use("/tasks", tasks);
app.use("/team", team);
app.use("/users", users);
app.use("/users_list", users_list);

app.use("/admin_users", admin_users);
app.use("/courses", courses);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
