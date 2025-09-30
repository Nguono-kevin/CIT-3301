const db = require("./db");

class Player {
  static create(userId, playerName, sport, age, callback) {
    db.query(
      "INSERT INTO players (user_id, player_name, sport, age) VALUES (?, ?, ?, ?)",
      [userId, playerName, sport, age],
      callback
    );
  }

  static getAllByUser(userId, callback) {
    db.query("SELECT * FROM players WHERE user_id = ?", [userId], callback);
  }

  static delete(playerId, callback) {
    db.query("DELETE FROM players WHERE id = ?", [playerId], callback);
  }
}

module.exports = Player;
