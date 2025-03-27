import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Unauthorized! Please log in.");
      navigate("/login");
    }
  }, []);

  return (
    <div style={styles.container}>
      <h2>Welcome to Your Dashboard</h2>
      <p>You are logged in successfully.</p>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
        style={styles.button}
      >
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
  },
  button: {
    padding: "10px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    marginTop: "20px",
  },
};

export default Dashboard;
