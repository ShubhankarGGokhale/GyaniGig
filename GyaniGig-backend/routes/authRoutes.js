import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// 🏷️ REGISTER ROUTE
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // 🛑 Check if user already exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("❌ Registration Failed: User already exists", email);
      return res.status(400).json({ message: "User already exists" });
    }

    // 🔑 Hash password before storing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log("🔑 Original Password:", password);
    console.log("🔑 Hashed Password:", hashedPassword);

    // 📌 Save new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword, // Store hashed password
      role
    });

    await newUser.save();
    console.log("✅ User Registered Successfully:", newUser);

    res.status(201).json({ message: "Registration successful!" });

  } catch (error) {
    console.error("❌ Registration Error:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// 🏷️ LOGIN ROUTE
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 🔍 Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      console.log("❌ Login Failed: User not found", email);
      return res.status(400).json({ message: "User not found" });
    }

    console.log("🔍 Found User:", user);
    console.log("🔑 Stored Password (Hashed):", user.password);
    console.log("🔑 Entered Password:", password);

    // 🔑 Compare entered password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("🔍 Password Match:", isMatch);

    if (!isMatch) {
      console.log("❌ Login Failed: Incorrect password");
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // 🎫 Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    console.log("✅ Login Successful! Token Generated:", token);
    res.status(200).json({ message: "Login successful", token });

  } catch (error) {
    console.error("❌ Server Error:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;
