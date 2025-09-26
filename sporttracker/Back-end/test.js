const db = require("./db");

db.query("SELECT * FROM Users", (err, results) => {
  if (err) throw err;
  console.log("✅ Query results:", results);
  db.end();
});
