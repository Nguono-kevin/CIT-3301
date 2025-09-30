const db = require("./db");

class Workout {
  static create(userId, playerId, sport, duration, notes, callback) {
    db.query(
      "INSERT INTO workouts (user_id, player_id, sport, duration, notes) VALUES (?, ?, ?, ?, ?)",
      [userId, playerId || null, sport, duration, notes],
      callback
    );
  }

  static getAllByUser(userId, callback) {
    db.query(
      "SELECT w.*, p.player_name FROM workouts w LEFT JOIN players p ON w.player_id = p.id WHERE w.user_id = ?",
      [userId],
      callback
    );
  }

  static delete(workoutId, callback) {
    db.query("DELETE FROM workouts WHERE id = ?", [workoutId], callback);
  }
}

module.exports = Workout;
