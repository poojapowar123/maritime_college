// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// axios.defaults.withCredentials = true;

// export default function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get("http://localhost:5000/admin/check-session")
//       .then(res => {
//         if(res.data.loggedIn) navigate("/dashboard");
//       });
//   }, []);

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/admin/login", { email, password });
//       setMessage(res.data.message);
//       navigate("/dashboard");
//     } catch(err) {
//       setMessage(err.response?.data?.error || "Login failed");
//     }
//   };

//   return (
//     <div style={{ width:"300px", margin:"100px auto" }}>
//       <h3>Admin Login</h3>
//       <form onSubmit={handleSubmit}>
//         <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required /><br/><br/>
//         <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required /><br/><br/>
//         <button type="submit">Login</button>
//       </form>
//       <p>{message}</p>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Check session on mount
  useEffect(() => {
    axios.get("http://localhost:5000/admin/check-session")
      .then(res => {
        if (res.data.loggedIn) navigate("/dashboard");
      })
      .catch(() => console.log("No active session"));
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/admin/login", { email, password });
      setMessage(res.data.message);
      
      // Store minimal info in sessionStorage
      sessionStorage.setItem("admin", JSON.stringify(res.data.user));
      navigate("/dashboard");
    } catch (err) {
      setMessage(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div style={{ width: "300px", margin: "100px auto", textAlign: "center" }}>
      <h3>Admin Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <button type="submit" style={{ width: "100%", padding: "8px" }}>
          Login
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
}
