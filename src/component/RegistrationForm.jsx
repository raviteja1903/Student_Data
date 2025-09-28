import React, { useState } from "react";
import axios from "axios";
const BACKEND_URL = "https://student-data-backend-u9w8.onrender.com";

const RegisterForm = ({ onRegisterSuccess, onToggleLogin }) => {
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BACKEND_URL}/api/students/register`, {
        studentId,
        name,
        course,
        email,
        password,
      });

      // await axios.post("http://localhost:5000/api/students/register", {
      //   studentId,
      //   name,
      //   course,
      //   email,
      //   password,

      alert("✅ Registered successfully!");
      onRegisterSuccess();
    } catch (err) {
      alert("❌ " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div
      className="card shadow p-4"
      style={{ maxWidth: "400px", width: "100%" }}
    >
      <h2 className="text-center mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          required
        />
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-success w-100 mb-3" type="submit">
          Register
        </button>
      </form>
      {/* 🔽 Toggle link inside card */}
      <div className="text-center">
        <button className="btn btn-link" onClick={onToggleLogin}>
          ← Back to Login
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
