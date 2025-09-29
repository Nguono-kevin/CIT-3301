// models/playerModel.js
const db = require("./db");

class Player {
  static add(user_id, player_name, position, callback) {
    db.query(
      "INSERT INTO players (user_id, player_name, position) VALUES (?, ?, ?)",
      [user_id, player_name, position],
      callback
    );
  }

  static getByUser(user_id, callback) {
    db.query("SELECT * FROM players WHERE user_id = ?", [user_id], callback);
  }
}

module.exports = Player;
