import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const authMiddleware = (req, res, next) => {
  try {
    const token = req.header("Authorization"); // Get token from request header
    if (!token) return res.status(401).json({ message: "Access Denied. No token provided." });

    // Verify and decode token
    const verified = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
    req.user = verified; // Attach user details to the request
    next(); // Proceed to the next middleware
  } catch (error) {
    res.status(401).json({ message: "Invalid Token", error: error.message });
  }
};

export default authMiddleware;
