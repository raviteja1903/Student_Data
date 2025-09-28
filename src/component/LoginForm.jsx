import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.css";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/students/login", {
        email,
        password,
      });
      alert("✅ Login successful!");
      onLogin(res.data);
    } catch (err) {
      alert("❌ " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div className="card shadow-sm p-4 mx-auto login-card">
      <h2 className="card-title text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button className="btn btn-primary w-100" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
