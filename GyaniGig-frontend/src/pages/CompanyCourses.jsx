import React from "react";

const courses = [
  {
    name: "Google Cloud Certification",
    company: "Google",
    link: "https://cloud.google.com/training",
    description: "Get certified in cloud infrastructure, data engineering, and more.",
  },
  {
    name: "Meta Front-End Developer",
    company: "Meta",
    link: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    description: "Learn HTML, CSS, React, and JavaScript from Meta engineers.",
  },
  {
    name: "AWS Solutions Architect",
    company: "Amazon",
    link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    description: "Architect and deploy secure applications on AWS cloud.",
  },
  {
    name: "Microsoft Learn",
    company: "Microsoft",
    link: "https://learn.microsoft.com/en-us/training/",
    description: "Explore technical courses on Azure, .NET, and more.",
  },
];

const CompanyCourses = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>✨ Company Offered Courses</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {courses.map((course, index) => (
          <li
            key={index}
            style={{
              backgroundColor: "#f8f9fa",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <h3>{course.name}</h3>
            <p><strong>Company:</strong> {course.company}</p>
            <p>{course.description}</p>
            <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              Visit Course →
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyCourses;
