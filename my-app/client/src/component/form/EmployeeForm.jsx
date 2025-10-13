import React, { useEffect, useState } from "react";
import axios from "axios";

function EmployeeForm() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({ name: "", position: "", salary: "" });

  const API = "http://localhost:3300/employees";

  // Read employees
  const fetchEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:3300/employees");
      console.log(res.data); // check what comes
      setEmployees(res.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Create or Update employee
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.id) {
      await axios.put(`${API}/${form.id}`, form);
    } else {
      await axios.post(API, { ...form, salary: Number(form.salary) });
    }
    setForm({ name: "", position: "", salary: "" });
    fetchEmployees();
  };

  // Delete employee
  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchEmployees();
  };

  const handleEdit = (emp) => {
    setForm(emp);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee Management</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Position"
          value={form.position}
          onChange={(e) => setForm({ ...form, position: e.target.value })}
        />
        <input
          type="number"
          placeholder="Salary"
          value={form.salary}
          onChange={(e) => setForm({ ...form, salary: e.target.value })}
        />
        <button type="submit">
          {form.id ? "Update Employee" : "Add Employee"}
        </button>
      </form>

      <hr />
      <h3>Employee List</h3>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name} - {emp.position} - ₹{emp.salary}
            <button onClick={() => handleEdit(emp)}>✏️ Edit</button>
            <button onClick={() => handleDelete(emp.id)}>🗑️ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeForm;
