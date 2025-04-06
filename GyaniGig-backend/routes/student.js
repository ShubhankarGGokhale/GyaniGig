import express from "express";
const router = express.Router();

// Dummy authenticated middleware (replace with your actual one if needed)
const requireAuth = (req, res, next) => {
  next();
};

// Sample student dashboard route
router.get("/dashboard", requireAuth, (req, res) => {
  res.json({
    courses: [
      { _id: "1", name: "React Basics" },
      { _id: "2", name: "Node.js Fundamentals" }
    ],
    progress: [
      { courseName: "React Basics", completion: 60 },
      { courseName: "Node.js Fundamentals", completion: 80 }
    ],
    internships: [
      { _id: "i1", companyName: "TechCorp" },
      { _id: "i2", companyName: "InnoSoft" }
    ],
    companies: [
      {
        _id: "c1",
        name: "TechCorp",
        courses: [
          { _id: "r1", name: "Advanced React" },
          { _id: "r2", name: "React with TypeScript" }
        ]
      },
      {
        _id: "c2",
        name: "InnoSoft",
        courses: [
          { _id: "n1", name: "Node.js for Beginners" },
          { _id: "n2", name: "Express.js Deep Dive" }
        ]
      }
    ]
  });
});

export default router;
