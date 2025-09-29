const express = require("express");
const router = express.Router();
const User = require("./userModels.js");
const Workout = require("./workModels.js");
const Player = require("./player.js");

// Register
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  User.register(name, email, password, (err, result) => {
    if (err) return res.status(500).json({ message: "Error registering user" });
    res.json({ message: "✅ User registered successfully" });
  });
});

// Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.login(email, password, (err, user) => {
    if (err) return res.status(500).json({ message: "Error logging in" });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });
    res.json({ message: "✅ Login successful", user });
  });
});

// Add Workout
router.post("/workouts", (req, res) => {
  const { user_id, workout_name, duration, date } = req.body;
  Workout.add(user_id, workout_name, duration, date, (err, result) => {
    if (err) return res.status(500).json({ message: "Error adding workout" });
    res.json({ message: "✅ Workout added successfully" });
  });
});

// Get Workouts by User
router.get("/workouts/:user_id", (req, res) => {
  Workout.getByUser(req.params.user_id, (err, results) => {
    if (err) return res.status(500).json({ message: "Error fetching workouts" });
    res.json(results);
  });
});

// Add Player
router.post("/players", (req, res) => {
  const { user_id, player_name, position } = req.body;
  Player.add(user_id, player_name, position, (err, result) => {
    if (err) return res.status(500).json({ message: "Error adding player" });
    res.json({ message: "✅ Player added successfully" });
  });
});

// Get Players
router.get("/players/:user_id", (req, res) => {
  Player.getByUser(req.params.user_id, (err, results) => {
    if (err) return res.status(500).json({ message: "Error fetching players" });
    res.json(results);
  });
});

module.exports = router;
