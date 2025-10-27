// // middleware/authSession.js
// export const requireAdmin = (req, res, next) => {
//   if (req.session && req.session.adminId) {
//     // Session exists, allow access
//     next();
//   } else {
//     res.status(401).json({ message: "Unauthorized: Please log in" });
//   }
// };

// middleware/authSession.js

// For normal logged-in users
export const requireLogin = (req, res, next) => {
  if (req.session && req.session.userId) {
    req.user = { id: req.session.userId }; // attach userId for later use
    next();
  } else {
    res.status(401).json({ message: "Unauthorized: Please log in" });
  }
};

// Optional: keep requireAdmin for admin-only routes
export const requireAdmin = (req, res, next) => {
  if (req.session && req.session.adminId) {
    req.user = { id: req.session.adminId };
    next();
  } else {
    res.status(401).json({ message: "Unauthorized: Admin login required" });
  }
};
