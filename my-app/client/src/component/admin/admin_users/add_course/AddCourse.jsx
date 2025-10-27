import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({
    course_id: "",
    add_course_name: "",
    added_by: 1, // example user_id
    status: "hold",
    remarks: ""
  });

  // Fetch all courses
  const fetchCourses = () => {
    axios.get("http://localhost:5000/courses")
      .then(res => setCourses(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // Handle input change
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Add new course
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/courses", form);
      alert(" Course Added");
      setForm({ course_id: "", add_course_name: "", added_by: 1, status: "hold", remarks: "" });
      fetchCourses();
    } catch (err) {
      console.error(err);
      alert(" Error adding course");
    }
  };

  // Delete course
  const deleteCourse = async (id) => {
    if (!window.confirm("Delete this course?")) return;
    try {
      await axios.delete(`http://localhost:5000/courses/${id}`);
      setCourses(courses.filter(c => c.id !== id));
    } catch (err) {
      console.error(err);
      alert("Error deleting course");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Courses List & Add Course</h2>

      {/* Add Course Form */}
      <div style={{ marginBottom: 30, padding: 10, border: "1px solid #ccc" }}>
        <h3> Add New Course</h3>
        <form onSubmit={handleSubmit}>
          <input
            name="course_id"
            placeholder="Course ID"
            value={form.course_id}
            onChange={handleChange}
            required
          /><br/>
          <input
            name="add_course_name"
            placeholder="Course Name"
            value={form.add_course_name}
            onChange={handleChange}
            required
          /><br/>
          <textarea
            name="remarks"
            placeholder="Remarks"
            value={form.remarks}
            onChange={handleChange}
          /><br/>
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="approved">Approved</option>
            <option value="reject">Reject</option>
            <option value="hold">Hold</option>
            <option value="delete">Delete</option>
          </select><br/>
          <button type="submit">Save</button>
        </form>
      </div>

      {/* Courses Table */}
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Course ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Remarks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.course_id}</td>
              <td>{c.add_course_name}</td>
              <td>{c.status}</td>
              <td>{c.remarks}</td>
              <td>
                <button onClick={() => deleteCourse(c.id)}> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
