import React, { useState } from "react";
import "./Form.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // CORRECTED: The URL now points to the correct port (8083) and
      // includes the backend's context path (/springapp1).
      const res = await fetch("http://localhost:8083/springapp1/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.text();
      // WARNING: Using 'alert()' is not recommended in production.
      // Use a modal or a state-based message instead.
      alert(data);
    } catch (err) {
      console.error(err);
      alert("Error logging in");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
