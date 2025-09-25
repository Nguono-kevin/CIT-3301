// models/userModel.js
const db = require("../db");
const bcrypt = require("bcryptjs");

class User {
  static register(name, email, password, callback) {
    const hashedPassword = bcrypt.hashSync(password, 10);
    db.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword],
      callback
    );
  }

  static login(email, password, callback) {
    db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
      if (err) return callback(err, null);
      if (results.length === 0) return callback(null, null);

      const user = results[0];
      const isMatch = bcrypt.compareSync(password, user.password);
      if (!isMatch) return callback(null, null);

      callback(null, user);
    });
  }
}

module.exports = User;
