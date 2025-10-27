// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function AddTask() {
//   const [team, setTeam] = useState([]);
//   const [tasks, setTasks] = useState([]);
//   const [editingTask, setEditingTask] = useState(null);

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     assigned_to: "",
//     deadline: "",
//     status: "Pending"
//   });

//   useEffect(() => {
//     fetchTeam();
//     fetchTasks();
//   }, []);

//   const fetchTeam = () => {
//     axios.get("http://localhost:5000/team").then((res) => setTeam(res.data));
//   };

//   const fetchTasks = () => {
//     axios.get("http://localhost:5000/tasks").then((res) => setTasks(res.data));
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editingTask) {
//       // Update task
//       axios
//         .put(`http://localhost:5000/tasks/${editingTask.id}`, formData)
//         .then((res) => {
//           alert(res.data.message);
//           setEditingTask(null);
//           resetForm();
//           fetchTasks();
//         });
//     } else {
//       // Add new task
//       axios
//         .post("http://localhost:5000/tasks", formData)
//         .then((res) => {
//           alert(res.data.message);
//           resetForm();
//           fetchTasks();
//         });
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       title: "",
//       description: "",
//       assigned_to: "",
//       deadline: "",
//       status: "Pending"
//     });
//   };

//   const handleEdit = (task) => {
//     setEditingTask(task);
//     setFormData({
//       title: task.title,
//       description: task.description,
//       assigned_to: team.find(t => t.name === task.assigned_to)?.id || "",
//       deadline: task.deadline?.split("T")[0],
//       status: task.status
//     });
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this task?")) {
//       axios.delete(`http://localhost:5000/tasks/${id}`).then((res) => {
//         alert(res.data.message);
//         fetchTasks();
//       });
//     }
//   };

//   const handleMarkComplete = (id) => {
//     axios.put(`http://localhost:5000/tasks/${id}/complete`).then((res) => {
//       alert(res.data.message);
//       fetchTasks();
//     });
//   };

//   return (
//     <div className="task-container">
//       {/* Add / Edit Task Form */}
//       <h2>{editingTask ? "Edit Task" : "Add New Task"}</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Task Title:</label>
//         <input type="text" name="title" value={formData.title} onChange={handleChange} required />

//         <label>Description:</label>
//         <textarea name="description" value={formData.description} onChange={handleChange} />

//         <label>Assigned To:</label>
//         <select name="assigned_to" value={formData.assigned_to} onChange={handleChange} required>
//           <option value="">Select Member</option>
//           {team.map((member) => (
//             <option key={member.id} value={member.id}>
//               {member.name}
//             </option>
//           ))}
//         </select>

//         <label>Deadline:</label>
//         <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} required />

//         <button type="submit">{editingTask ? "Update Task" : "Save Task"}</button>
//       </form>

//       {/* Task List Table */}
//       <h2>Task List</h2>
//       <table border="1" width="100%" cellPadding="10">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Assigned To</th>
//             <th>Deadline</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tasks.length > 0 ? (
//             tasks.map((task) => (
//               <tr key={task.id}>
//                 <td>{task.id}</td>
//                 <td>{task.title}</td>
//                 <td>{task.assigned_to}</td>
//                 <td>{task.deadline?.split("T")[0]}</td>
//                 <td>{task.status}</td>
//                 <td>
//                   <button onClick={() => handleEdit(task)}>Edit</button>
//                   <button onClick={() => handleDelete(task.id)}>Delete</button>
//                   {task.status !== "Completed" && (
//                     <button onClick={() => handleMarkComplete(task.id)}>Mark Complete</button>
//                   )}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6" align="center">No tasks available</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AddTask;

import React, { useState, useEffect } from "react";
import axios from "axios";

function AddTask() {
  const [team, setTeam] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  // 🔍 Search & Filter states
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    assigned_to: "",
    deadline: "",
    status: "Pending",
  });

  useEffect(() => {
    fetchTeam();
    fetchTasks();
  }, []);

  const fetchTeam = () => {
    axios.get("http://localhost:5000/team").then((res) => setTeam(res.data));
  };

  const fetchTasks = () => {
    axios.get("http://localhost:5000/tasks").then((res) => setTasks(res.data));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const api = editingTask
      ? axios.put(`http://localhost:5000/tasks/${editingTask.id}`, formData)
      : axios.post("http://localhost:5000/tasks", formData);

    api.then((res) => {
      alert(res.data.message);
      setEditingTask(null);
      resetForm();
      fetchTasks();
    });
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      assigned_to: "",
      deadline: "",
      status: "Pending",
    });
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setFormData({
      title: task.title,
      description: task.description,
      assigned_to:
        team.find((t) => t.name === task.assigned_to)?.id || "",
      deadline: task.deadline?.split("T")[0],
      status: task.status,
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      axios.delete(`http://localhost:5000/tasks/${id}`).then((res) => {
        alert(res.data.message);
        fetchTasks();
      });
    }
  };

  const handleMarkComplete = (id) => {
    axios.put(`http://localhost:5000/tasks/${id}/complete`).then((res) => {
      alert(res.data.message);
      fetchTasks();
    });
  };

  // 🔍 Filtered tasks list
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      (task.assigned_to &&
        task.assigned_to.toLowerCase().includes(search.toLowerCase()));

    const matchesStatus =
      statusFilter === "All" || task.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="task-container">
      {/* Add / Edit Task Form */}
      <h2>{editingTask ? "Edit Task" : "Add New Task"}</h2>
      <form onSubmit={handleSubmit}>
        <label>Task Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <label>Assigned To:</label>
        <select
          name="assigned_to"
          value={formData.assigned_to}
          onChange={handleChange}
          required
        >
          <option value="">Select Member</option>
          {team.map((member) => (
            <option key={member.id} value={member.id}>
              {member.name}
            </option>
          ))}
        </select>

        <label>Deadline:</label>
        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {editingTask ? "Update Task" : "Save Task"}
        </button>
      </form>

      {/* 🔍 Search & Filter Section */}
      <div style={{ marginTop: "20px" }}>
        <h3>Search & Filter</h3>
        <input
          type="text"
          placeholder="Search by title or member"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Task List Table */}
      <h2>Task List</h2>
      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Assigned To</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.assigned_to}</td>
                <td>{task.deadline?.split("T")[0]}</td>
                <td>{task.status}</td>
                <td>
                  <button onClick={() => handleEdit(task)}>Edit</button>
                  <button onClick={() => handleDelete(task.id)}>Delete</button>
                  {task.status !== "Completed" && (
                    <button onClick={() => handleMarkComplete(task.id)}>
                      Mark Complete
                    </button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" align="center">
                No matching tasks found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AddTask;
