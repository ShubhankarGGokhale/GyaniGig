import express from "express";
import authMiddleware from "../Middleware/authMiddleware.js";
import Student from "../models/Student.js";

const router = express.Router();

router.get("/student/dashboard", authMiddleware, async (req, res) => {
  try {
    const student = await Student.findById(req.user.id)
      .populate("courses")
      .populate("internships")
      .populate("companies");

    if (!student) return res.status(404).json({ message: "Student not found" });

    res.status(200).json({
      courses: student.courses,
      progress: student.courses.map((course) => ({
        courseName: course.name,
        completion: course.completion, // Assuming there's a completion field
      })),
      internships: student.internships,
      companies: student.companies,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;
