import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../assets/logo.png"; // ✅ Import logo from assets
import { useEffect, useState } from "react";

const NavigationBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <Navbar
      expand="lg"
      variant="dark"
      style={{
        background: "linear-gradient(90deg, #38B6FF, #004AAD)",
        padding: "15px 20px",
      }}
      sticky="top"
    >
      <Container>
      <Navbar.Brand
  as={Link}
  to="/"
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1.6rem",
    textDecoration: "none",
  }}
>
  <img
    src={logo}
    alt="GyaniGig Logo"
    style={{ height: "40px", width: "40px", objectFit: "contain" }}
  />
  GyaniGig
</Navbar.Brand>


        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: "#fff" }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ gap: "15px", alignItems: "center" }}>
            <Nav.Link as={Link} to="/" style={navLinkStyle}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/courses" style={navLinkStyle}>
              Courses
            </Nav.Link>

            {!isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/login" style={navLinkStyle}>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register" style={navLinkStyle}>
                  Register
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/dashboard" style={navLinkStyle}>
                  Dashboard
                </Nav.Link>
                <Button
                  onClick={handleLogout}
                  style={{
                    fontWeight: "500",
                    padding: "6px 12px",
                    borderRadius: "4px",
                    border: "none",
                    backgroundColor: "#dc3545",
                    color: "#fff",
                  }}
                >
                  Logout
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const navLinkStyle = {
  color: "#fff",
  fontWeight: "500",
  textDecoration: "none",
};

export default NavigationBar;
