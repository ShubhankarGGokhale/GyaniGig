import React, { useEffect, useState } from "react";
import axios from "axios";

const Internships = () => {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5002/api/internships")
      .then((res) => {
        setInternships(res.data);
      })
      .catch((err) => {
        console.error("Error fetching internships:", err);
      });
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Available Internships</h2>
      {internships.length === 0 ? (
        <p>Loading internships...</p>
      ) : (
        internships.map((intern, index) => (
          <div key={index} style={{ marginBottom: "1rem", border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
            <h3>{intern.company}</h3>
            <p><strong>Role:</strong> {intern.role}</p>
            <p><strong>Location:</strong> {intern.location}</p>
            <p><strong>Duration:</strong> {intern.duration}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Internships;
