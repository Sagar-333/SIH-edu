const mongoose = require('mongoose');

const StudentSchema = {
  // we don't need an ID key in here, as mongoDB
  // by default maintains an unique ID
  credentials: {
    name: { type: String, unique: true, required: true, trim: true },
    email: { type: String, unique: true, required: true, trim: true },
    password: { type: String, unique: true, required: true, trim: true },
  },
  courses: {
    courses_completed: [], // array will have unique IDs of these courses
    current_courses: [],
    certificates: [],
  },
}

module.exports = StudentSchema;