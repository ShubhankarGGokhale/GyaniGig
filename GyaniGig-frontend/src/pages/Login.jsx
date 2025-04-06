import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import for redirection

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // ✅ For displaying error messages
  const navigate = useNavigate(); // ✅ Used for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5002/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token); // ✅ Store JWT token
        alert("🎉 Login Successful! Redirecting...");
        navigate("/dashboard"); // ✅ Redirect to Dashboard
      } else {
        setMessage(data.message || "Invalid email or password");
      }
    } catch (error) {
      setMessage("❌ Login Error: Unable to connect to server.");
      console.error("Login Error:", error);
    }
  };

  return (
    <div style={styles.container}>
      {/* Left Section - Welcome Text */}
      <div style={styles.leftSection}>
        <h1>Welcome Back to GyaniGig</h1>
        <p>Login to access learning, freelancing, and mentorship.</p>
      </div>

      {/* Right Section - Login Form */}
      <div style={styles.rightSection}>
        <div style={styles.formContainer}>
          <h2 style={styles.heading}>Login</h2>
          {message && <p style={{ color: "red" }}>{message}</p>} {/* ✅ Show error messages */}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
            <button type="submit" style={styles.button}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { display: "flex", width: "100vw", height: "100vh" },
  leftSection: {
    width: "50%",
    backgroundColor: "#007bff",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    textAlign: "center",
  },
  rightSection: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  formContainer: {
    width: "80%",
    maxWidth: "400px",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  heading: { marginBottom: "20px", fontSize: "1.8rem", fontWeight: "bold" },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default Login;
