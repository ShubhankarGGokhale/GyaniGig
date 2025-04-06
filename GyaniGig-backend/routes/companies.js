// routes/companies.js
import express from "express";
const router = express.Router();

const companies = [
  { id: 1, name: "Google" },
  { id: 2, name: "Microsoft" },
  { id: 3, name: "Amazon" },
  { id: 4, name: "Netflix" },
];

router.get("/", (req, res) => {
  res.json(companies);
});

export default router;
