import React, { useState } from "react";
import axios from "axios";

const LoginForm = ({ onLogin, onToggleRegister }) => {
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
    <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
      <h2 className="text-center mb-4">Login</h2>
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
        <button className="btn btn-primary w-100 mb-3" type="submit">
          Login
        </button>
      </form>
      {/* 🔽 Toggle link goes inside card */}
      <div className="text-center">
        <button className="btn btn-link" onClick={onToggleRegister}>
          + Register
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
