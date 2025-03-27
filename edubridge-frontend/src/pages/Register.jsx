import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");
  const [message, setMessage] = useState(""); // To show success or error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch("http://localhost:5002/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role, // Ensure role is included
        }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        alert("✅ Registration successful!");
        console.log("User Registered:", data);
      } else {
        alert(`❌ Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("❌ Error registering user. Please try again.");
    }
  };
  

  return (
    <div style={styles.container}>
      {/* Left Section - Welcome Text */}
      <div style={styles.leftSection}>
        <h1>Join GyaniGig</h1>
        <p>Register now to access learning, freelancing, and mentorship.</p>
      </div>

      {/* Right Section - Register Form */}
      <div style={styles.rightSection}>
        <div style={styles.formContainer}>
          <h2 style={styles.heading}>Register</h2>
          {message && <p style={{ color: "red" }}>{message}</p>} {/* Display messages */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              required
            />
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
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={styles.input}
            >
              <option value="Student">Student</option>
              <option value="Freelance Employee">Freelance Employee</option>
              <option value="Mentor">Mentor</option>
            </select>
            <button type="submit" style={styles.button}>Register</button>
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
    backgroundColor: "#28a745",
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
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default Register;
