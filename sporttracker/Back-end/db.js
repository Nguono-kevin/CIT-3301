// db.js
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",     // change if needed
  user: "root",          // your DB username
  password: "#Nguono_22",          // your DB password
  database: "sport_tracker"
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:" + err.stack);
    return;
  }
  console.log("✅ Connected to MySQL as ID " + db.threadId);
});

module.exports = db;
