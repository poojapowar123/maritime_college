// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Navigate } from "react-router-dom";

// export default function Dashboard1() {
//   const [user, setUser] = useState(null);
//   const [tasksOverview, setTasksOverview] = useState({ total: 0, completed: 0, pending: 0 });
//   const [dateFilter, setDateFilter] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch user profile
//     axios.get("http://localhost:5000/admin/profile", { withCredentials: true })
//       .then(res => setUser(res.data.user))
//       .catch(err => console.log(err));

//     // Fetch tasks overview
//     axios.get("http://localhost:5000/admin/tasks-overview", { withCredentials: true })
//       .then(res => setTasksOverview(res.data))
//       .catch(err => console.log(err))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (!user) return <Navigate to="/login" />;

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       {/* Header Section */}
//       <div style={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         marginBottom: "40px",
//         borderBottom: "1px solid #ddd",
//         paddingBottom: "10px"
//       }}>
//         <h1 style={{ margin: 0 }}>Dashboard</h1>
//         <div>
//           <label htmlFor="dateFilter">Date: </label>
//           <input
//             type="date"
//             id="dateFilter"
//             value={dateFilter}
//             onChange={(e) => setDateFilter(e.target.value)}
//             style={{ padding: "5px" }}
//           />
//         </div>
//         <div>
//           <span style={{ marginRight: "15px" }}>{user.name} ({user.email})</span>
//         </div>
//       </div>

//       {/* Welcome Section */}
//       <div style={{ textAlign: "center", marginBottom: "30px" }}>
//         <h2>Welcome, {user.name}</h2>
//       </div>

//       {/* Tasks Overview Cards */}
//       <div style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
//         gap: "20px",
//         marginBottom: "30px"
//       }}>
//         <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", textAlign: "center", backgroundColor: "#f0f8ff" }}>
//           <h3>Total Tasks</h3>
//           <p style={{ fontSize: "24px", margin: "10px 0" }}>{tasksOverview.total}</p>
//         </div>
//         <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", textAlign: "center", backgroundColor: "#d4edda" }}>
//           <h3>Completed Tasks</h3>
//           <p style={{ fontSize: "24px", margin: "10px 0" }}>{tasksOverview.completed}</p>
//         </div>
//         <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", textAlign: "center", backgroundColor: "#fff3cd" }}>
//           <h3>Pending Tasks</h3>
//           <p style={{ fontSize: "24px", margin: "10px 0" }}>{tasksOverview.pending}</p>
//         </div>
//       </div>

//       {/* Main Content Placeholder */}
//       <div style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//         gap: "20px"
//       }}>
//         <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>Top Metrics</div>
//         <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>Performance Chart</div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "../adminSidebar";
import AdminHeader from "../adminHeader";

axios.defaults.withCredentials = true;

export default function Dashboard1() {
  const [user, setUser] = useState(null);
  const [tasksOverview, setTasksOverview] = useState({
    total: 0,
    completed: 0,
    pending: 0,
  });
  const [dateFilter, setDateFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch session info
    axios
      .get("http://localhost:5000/admin/profile")
      .then((res) => {
        setUser(res.data.user);
        sessionStorage.setItem("admin", JSON.stringify(res.data.user));
      })
      .catch(() => navigate("/login"))
      .finally(() => setLoading(false));

    // Fetch overview
    axios
      .get("http://localhost:5000/admin/tasks-overview")
      .then((res) => setTasksOverview(res.data))
      .catch((err) => console.log("Tasks error:", err));
  }, [navigate]);

  const handleLogout = () => {
    axios
      .post("http://localhost:5000/admin/logout")
      .then(() => {
        sessionStorage.removeItem("admin");
        navigate("/login");
      })
      .catch((err) => console.log("Logout failed:", err));
  };

  if (loading) return <p>Loading...</p>;
  if (!user) return null;

  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />
      <div style={{ flex: 1 }}>
        <AdminHeader user={user} />

        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
          <Outlet />

          {/* Header */}
          {/* <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
          borderBottom: "1px solid #ddd",
          paddingBottom: "10px",
        }}
      >
        <h1 style={{ margin: 0 }}>Dashboard</h1>

        <div>
          <label htmlFor="dateFilter">Date: </label>
          <input
            type="date"
            id="dateFilter"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            style={{ padding: "5px" }}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span>
            {user.name} ({user.email})
          </span>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "#ff4d4f",
              color: "white",
              border: "none",
              padding: "8px 15px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </div> */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "10px",
            }}
          >
            <label htmlFor="dateFilter" style={{ marginRight: "10px" }}>
              Date:
            </label>
            <input
              type="date"
              id="dateFilter"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              style={{
                padding: "5px",
              }}
            />
          </div>

          {/* Overview */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "20px",
              marginBottom: "30px",
            }}
          >
            <div
              style={{
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                textAlign: "center",
                backgroundColor: "#f0f8ff",
              }}
            >
              <h3>Total Tasks</h3>
              <p style={{ fontSize: "24px" }}>{tasksOverview.total}</p>
            </div>
            <div
              style={{
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                textAlign: "center",
                backgroundColor: "#d4edda",
              }}
            >
              <h3>Completed</h3>
              <p style={{ fontSize: "24px" }}>{tasksOverview.completed}</p>
            </div>
            <div
              style={{
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                textAlign: "center",
                backgroundColor: "#fff3cd",
              }}
            >
              <h3>Pending</h3>
              <p style={{ fontSize: "24px" }}>{tasksOverview.pending}</p>
            </div>
          </div>

          {/* Main Content Placeholder */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            >
              Top Metrics
            </div>
            <div
              style={{
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            >
              Performance Chart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
