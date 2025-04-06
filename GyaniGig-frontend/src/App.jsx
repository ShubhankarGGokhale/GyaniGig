import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Internships from "./pages/Internships"; // ✅ NEW
import CompanyCourses from "./pages/CompanyCourses"; // ✅ NEW

// 🔹 Styles
const navLinkStyle = {
  color: "#FFFFFF",
  textDecoration: "none",
  fontSize: "1rem",
  padding: "10px 15px",
  whiteSpace: "nowrap",
};

const appBarStyle = {
  background: "linear-gradient(to right, #38B6FF, #004AAD)",
};

const navContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
};

const buttonGroupStyle = {
  display: "flex",
  gap: "10px",
};

const pageContainerStyle = {
  minHeight: "100vh",
  background: "#f0f4f8",
  paddingTop: "80px",
  paddingLeft: "20px",
  paddingRight: "20px",
};

const Navbar = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <AppBar position="fixed" style={appBarStyle}>
      <Toolbar style={navContainerStyle}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          GyaniGig
        </Typography>
        <div style={buttonGroupStyle}>
          <Button component={Link} to="/" style={navLinkStyle}>
            Home
          </Button>
          <Button component={Link} to="/internships" style={navLinkStyle}>
            Internships
          </Button>
          <Button component={Link} to="/courses" style={navLinkStyle}>
            Courses
          </Button>
          {!isAuthenticated ? (
            <>
              <Button component={Link} to="/login" style={navLinkStyle}>
                Login
              </Button>
              <Button component={Link} to="/register" style={navLinkStyle}>
                Register
              </Button>
            </>
          ) : (
            <>
              <Button component={Link} to="/dashboard" style={navLinkStyle}>
                Dashboard
              </Button>
              <Button
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.href = "/login";
                }}
                style={{
                  backgroundColor: "#666D73",
                  color: "#FFFFFF",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  fontWeight: "bold",
                }}
              >
                Logout
              </Button>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

const ProtectedRoute = ({ element }) => {
  return localStorage.getItem("token") ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Navbar />
      <div style={pageContainerStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
          <Route path="/internships" element={<Internships />} /> {/* ✅ NEW */}
          <Route path="/courses" element={<CompanyCourses />} /> {/* ✅ NEW */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
