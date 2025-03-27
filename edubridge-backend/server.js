import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"; // ✅ Import authentication routes

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// ✅ Fix CORS issue
import cors from "cors";
app.use(cors({
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));

// 🔗 API Routes
app.use("/api/auth", authRoutes); // ✅ Ensure this is correct

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
