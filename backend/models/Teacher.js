const mongoose = require('mongoose');

const TeacherSchema = {
  // we don't need an ID key in here, as mongoDB
  // by default maintains an unique ID
  credentials: {
    name: { type: String, unique: true, required: true, trim: true },
    id: { type: String, unique: true, required: true, trim: true },
  },
  quality: {
    rating: { type: String, required: false },
    // what else can be added in here?
  },
  courses: [], // courses the teacher teaches in
}

module.exports = TeacherSchema;