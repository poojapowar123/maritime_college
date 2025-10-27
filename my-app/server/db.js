// code added by miss pooja 10-10-2025
// import mysql from "mysql2";

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "test@2025",
//   database: "company_db",
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log(" MySQL Connected!");
// });

// export default db;

// code added by miss pooja 10-10-2025 ended



// code added by miss pooja 13-10-2025
import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

//mysql coonection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "test@2025",
  database: "tasks_db",
});

db.connect((err) => {
  if (err) throw err;
  console.log(" MySQL Connected!");
});

export default db;
