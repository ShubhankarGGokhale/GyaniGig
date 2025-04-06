import express from "express";
import Course from "../models/Course.js";
import Internship from "../models/Internship.js";

const router = express.Router();

// Get Courses from DB
router.get("/courses", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// Get Internships from DB
router.get("/internships", async (req, res) => {
  const internships = await Internship.find();
  res.json(internships);
});

export default router;
