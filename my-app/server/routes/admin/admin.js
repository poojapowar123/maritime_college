import express from "express";
import bcrypt from "bcryptjs";
import db from "../../db.js";
import { requireAdmin } from "../../middleware/auth.js";

const router = express.Router();

/* =========================
  Register Admin)
   ========================= */
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ error: "All fields required" });

  db.query(
    "SELECT * FROM admins WHERE email = ?",
    [email],
    async (err, results) => {
      if (err) return res.status(500).json({ error: "DB error" });
      if (results.length > 0)
        return res.status(400).json({ error: "Email already registered" });

      const hashedPassword = await bcrypt.hash(password, 10);
      db.query(
        "INSERT INTO admins (name, email, password) VALUES (?, ?, ?)",
        [name, email, hashedPassword],
        (err2) => {
          if (err2)
            return res.status(500).json({ error: "Failed to register admin" });
          res.json({ message: "Admin registered successfully" });
        }
      );
    }
  );
});

/* =========================
   ADMIN LOGIN
   ========================= */
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  db.query(
    "SELECT * FROM admins WHERE email = ?",
    [email],
    async (err, results) => {
      if (err) return res.status(500).json({ error: "DB error" });
      if (results.length === 0)
        return res.status(401).json({ error: "Invalid email or password" });

      const admin = results[0];
      const validPassword = await bcrypt.compare(password, admin.password);
      if (!validPassword)
        return res.status(401).json({ error: "Invalid email or password" });

      // Set session
      req.session.adminId = admin.id;
      req.session.adminName = admin.name;
      req.session.adminEmail = admin.email;

      res.json({
        message: "Login successful",
        admin: { name: admin.name, email: admin.email },
      });
    }
  );
});

/* --- Check Session --- */
router.get("/check-session", (req, res) => {
  if (req.session.adminId) {
    res.json({ loggedIn: true, adminEmail: req.session.adminEmail });
  } else {
    res.json({ loggedIn: false });
  }
});

/* --- Profile --- */
router.get("/profile", requireAdmin, (req, res) => {
  res.json({
    user: { name: req.session.adminName, email: req.session.adminEmail },
  });
});


/* --- Logout --- */
router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ error: "Logout failed" });
    res.clearCookie("connect.sid");
    res.json({ message: "Logged out successfully" });
  });
});

/* =========================
   CHANGE PASSWORD (Logged-in admin)
   ========================= */
router.post("/change-password", async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  // Must be logged in
  if (!req.session.adminId) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Fetch current password
  const sql = "SELECT password FROM admins WHERE id = ?";
  db.query(sql, [req.session.adminId], async (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });

    const admin = results[0];
    const validOld = await bcrypt.compare(oldPassword, admin.password);

    if (!validOld)
      return res.status(400).json({ error: "Old password is incorrect" });

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update password in DB
    const updateSql = "UPDATE admins SET password = ? WHERE id = ?";
    db.query(updateSql, [hashedPassword, req.session.adminId], (err2) => {
      if (err2)
        return res.status(500).json({ error: "Failed to update password" });
      res.json({ message: "Password changed successfully!" });
    });
  });
});

/* =========================
FORGOT PASSWORD & RESEt PASSWORD (Logged-in admin)
   ========================= */

// ----------------- FORGOT PASSWORD -----------------
router.post("/forgot-password", (req, res) => {
  const { email } = req.body;
  const sql = "SELECT * FROM admins WHERE email = ?";
  db.query(sql, [email], async (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (results.length === 0)
      return res.status(404).json({ error: "Email not found" });

    const token = crypto.randomBytes(32).toString("hex");
    const expiry = new Date(Date.now() + 3600000); // 1 hour

    const updateSql =
      "UPDATE admins SET reset_token = ?, reset_token_expiry = ? WHERE email = ?";
    db.query(updateSql, [token, expiry, email], async (err2) => {
      if (err2)
        return res.status(500).json({ error: "Failed to set reset token" });

      // Send email
      const transporter = nodemailer.createTransport({
        service: "gmail", // or any email service
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const resetLink = `http://localhost:3000/reset-password?token=${token}&email=${email}`;
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Reset Your Admin Password",
        html: `<p>Click <a href="${resetLink}">here</a> to reset your password. Token expires in 1 hour.</p>`,
      };

      await transporter.sendMail(mailOptions);
      res.json({ message: "Password reset link sent to your email" });
    });
  });
});

// ----------------- RESET PASSWORD -----------------
router.post("/reset-password", async (req, res) => {
  const { email, token, newPassword } = req.body;

  const sql = "SELECT * FROM admins WHERE email = ? AND reset_token = ?";
  db.query(sql, [email, token], async (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (results.length === 0)
      return res.status(400).json({ error: "Invalid token or email" });

    const admin = results[0];
    if (new Date() > new Date(admin.reset_token_expiry))
      return res.status(400).json({ error: "Token expired" });

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const updateSql =
      "UPDATE admins SET password = ?, reset_token = NULL, reset_token_expiry = NULL WHERE email = ?";
    db.query(updateSql, [hashedPassword, email], (err2) => {
      if (err2)
        return res.status(500).json({ error: "Failed to reset password" });
      res.json({ message: "Password has been reset successfully!" });
    });
  });
});

// tasks-overview
router.get("/tasks-overview", requireAdmin, (req, res) => {
  const sql = `
    SELECT 
      COUNT(*) AS total,
      SUM(CASE WHEN status='Completed' THEN 1 ELSE 0 END) AS completed,
      SUM(CASE WHEN status='Pending' THEN 1 ELSE 0 END) AS pending
    FROM tasks
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("DB Error in /tasks-overview:", err); // <-- log full error
      return res.status(500).json({ error: "DB error" });
    }
    res.json(results[0]);
  });
});

export default router;
