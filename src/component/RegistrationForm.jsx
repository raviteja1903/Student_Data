import React, { useState } from "react";
import axios from "axios";
import "./RegistrationForm.css";

const RegistrationForm = ({ onRegistered }) => {
  const [formData, setFormData] = useState({
    studentId: "",
    name: "",
    email: "",
    password: "",
    course: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/students/register", formData);
      alert("✅ Registered successfully!");
      onRegistered();
    } catch (err) {
      alert("❌ " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div>
      <h4 className="text-center mb-3">Register</h4>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          name="studentId"
          placeholder="Student ID"
          value={formData.studentId}
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-2"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          className="form-control mb-2"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          className="form-control mb-2"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-3"
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
          required
        />
        <button className="btn btn-success w-100" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
