// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Card, CardContent, Typography, Grid } from "@mui/material";

// function Dashboard() {
//   const [stats, setStats] = useState({
//     total: 0,
//     completed: 0,
//     pending: 0,
//   });

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     axios
//       .get("http://localhost:5000/dashboard", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => setStats(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Dashboard</h2>
//       <Grid container spacing={2}>
//         <Grid item xs={12} sm={4}>
//           <Card sx={{ backgroundColor: "#f0f0f0" }}>
//             <CardContent>
//               <Typography variant="h6">Total Tasks</Typography>
//               <Typography variant="h4">{stats.total}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         <Grid item xs={12} sm={4}>
//           <Card sx={{ backgroundColor: "#d1e7dd" }}>
//             <CardContent>
//               <Typography variant="h6">Completed Tasks</Typography>
//               <Typography variant="h4">{stats.completed}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         <Grid item xs={12} sm={4}>
//           <Card sx={{ backgroundColor: "#fff3cd" }}>
//             <CardContent>
//               <Typography variant="h6">Pending Tasks</Typography>
//               <Typography variant="h4">{stats.pending}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

// export default Dashboard;
