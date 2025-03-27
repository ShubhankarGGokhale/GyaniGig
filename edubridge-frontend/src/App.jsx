import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard"; // ✅ Import Dashboard

const Navbar = () => {
  const isAuthenticated = !!localStorage.getItem("token"); // ✅ Check if user is logged in

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#222",
        color: "#fff",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ margin: 0, fontSize: "1.5rem" }}>GyaniGig</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={navLinkStyle}>Home</Link>
        {!isAuthenticated ? (
          <>
            <Link to="/login" style={navLinkStyle}>Login</Link>
            <Link to="/register" style={navLinkStyle}>Register</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" style={navLinkStyle}>Dashboard</Link>
            <button onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login"; // Redirect to login after logout
            }} style={{ ...navLinkStyle, background: "red", border: "none", cursor: "pointer" }}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

const navLinkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "1rem",
  padding: "10px 15px",
  whiteSpace: "nowrap",
};

const ProtectedRoute = ({ element }) => {
  return localStorage.getItem("token") ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "70px",
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
