const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const workoutRoutes = require("./workroutes.js");
const apiRoutes = require("./api.js");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "#Nguono_22",
  database: "Sport_tracker"
});

db.connect((err) => {
  if (err) throw err;
  console.log("✅ Connected to MySQL");
});

// Test route
app.get("/", (req, res) => {
  res.send("Hello, MySQL + Node.js!");
});

// Routes
app.use("/workouts", workoutRoutes);
app.use("/api", apiRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
