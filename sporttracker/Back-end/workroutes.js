// routes/workoutRoutes.js
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Workout = require("./workModels.js"); // adjust path if in models folder

// Middleware to check JWT
function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(403).json({ success: false, error: "No token provided" });

  const token = authHeader.split(" ")[1];
  jwt.verify(token, "SECRET_KEY", (err, decoded) => {
    if (err) return res.status(401).json({ success: false, error: "Unauthorized" });
    req.userId = decoded.id;
    next();
  });
}

// GET all workouts
router.get("/", verifyToken, (req, res) => {
  Workout.getAll(req.userId, (err, results) => {
    if (err) return res.json({ success: false, error: err.message });
    res.json({ success: true, workouts: results });
  });
});

// ADD new workout
router.post("/", verifyToken, (req, res) => {
  const { sport, duration, notes } = req.body;
  Workout.add(req.userId, sport, duration, notes, (err) => {
    if (err) return res.json({ success: false, error: err.message });
    res.json({ success: true, message: "Workout added!" });
  });
});

// DELETE a workout
router.delete("/:id", verifyToken, (req, res) => {
  const id = req.params.id;
  Workout.delete(id, req.userId, (err) => {
    if (err) return res.json({ success: false, error: err.message });
    res.json({ success: true, message: "Workout deleted!" });
  });
});

module.exports = router;
