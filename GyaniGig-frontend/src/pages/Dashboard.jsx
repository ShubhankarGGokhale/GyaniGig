import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "chart.js/auto";

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const [progress, setProgress] = useState([]);
  const [internships, setInternships] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5002/api/student/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setCourses(res.data.courses || []);
        setProgress(res.data.progress || []);
        setInternships(res.data.internships || []);
        setCompanies(res.data.companies || []);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (progress.length > 0) {
      const ctx = document.getElementById("progressChart");
      if (ctx) {
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: progress.map((c) => c.courseName),
            datasets: [
              {
                label: "Completion (%)",
                data: progress.map((c) => c.completion),
                backgroundColor: "rgba(75, 192, 192, 0.6)",
              },
            ],
          },
        });
      }
    }
  }, [progress]);

  return (
    <div style={styles.container}>
      <h1>📚 Student Dashboard</h1>

      {/* Enrolled Courses */}
      <div style={styles.section}>
        <h2>🎓 Enrolled Courses</h2>
        {courses.length > 0 ? (
          <ul>
            {courses.map((course) => (
              <li key={course._id}>{course.name}</li>
            ))}
          </ul>
        ) : (
          <p>No courses enrolled.</p>
        )}
      </div>

      {/* Progress Chart */}
      <div style={styles.section}>
        <h2>📊 Course Completion</h2>
        {progress.length > 0 ? (
          <canvas id="progressChart" width="400" height="200"></canvas>
        ) : (
          <p>No progress data available.</p>
        )}
      </div>

      {/* Companies with Courses */}
      <div style={styles.section}>
        <h2>🏢 Companies & Their Courses</h2>
        {companies.length > 0 ? (
          companies.map((company) => (
            <div key={company._id} style={{ marginBottom: "15px" }}>
              <h4>{company.name}</h4>
              <ul>
                {company.courses && company.courses.length > 0 ? (
                  company.courses.map((course) => (
                    <li key={course._id}>📘 {course.name}</li>
                  ))
                ) : (
                  <li>No courses available.</li>
                )}
              </ul>
            </div>
          ))
        ) : (
          <p>No companies found.</p>
        )}
      </div>

      {/* Internship Opportunities */}
      <div style={styles.section}>
        <h2>💼 Internship Opportunities</h2>
        {internships.length > 0 ? (
          <ul>
            {internships.map((intern) => (
              <li key={intern._id}>{intern.companyName}</li>
            ))}
          </ul>
        ) : (
          <p>No internships available.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    background: "#f5f7fa",
    minHeight: "100vh",
  },
  section: {
    marginBottom: "25px",
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    backgroundColor: "#fff",
  },
};

export default Dashboard;
