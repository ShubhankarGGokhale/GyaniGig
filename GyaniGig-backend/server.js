import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

// 🔗 Route Imports
import authRoutes from "./routes/authRoutes.js";
import internshipsRoute from "./routes/internships.js";
import companiesRoute from "./routes/companies.js";
import studentRoutes from "./routes/student.js"; // ✅ Add student dashboard route

// 🔧 Configs
dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// 🔓 CORS Setup
app.use(cors({
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));

// 📌 API Routes
app.use("/api/auth", authRoutes);
app.use("/api/internships", internshipsRoute);
app.use("/api/companies", companiesRoute);
app.use("/api/student", studentRoutes); // ✅ Important for dashboard

// 🚀 Server Listen
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
