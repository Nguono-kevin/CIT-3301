// db.js
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",     // change if needed
  user: "root",          // your DB username
  password: "",          // your DB password
  database: "sports_tracker"
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
    return;
  }
  console.log("✅ Connected to MySQL Database");
});

module.exports = db;
