// models/workoutModel.js
const db = require("../db");

class Workout {
  static add(user_id, workout_name, duration, date, callback) {
    db.query(
      "INSERT INTO workouts (user_id, workout_name, duration, date) VALUES (?, ?, ?, ?)",
      [user_id, workout_name, duration, date],
      callback
    );
  }

  static getByUser(user_id, callback) {
    db.query("SELECT * FROM workouts WHERE user_id = ?", [user_id], callback);
  }
}

module.exports = Workout;
