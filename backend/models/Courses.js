const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema(
  {
    // we don't need an ID key in here, as mongoDB
    // by default maintains an unique ID
    details: {
      name: { type: String, unique: true, required: true, trim: true },
      language: { type: String, unique: true, required: true, trim: true },
      price: { type: String, unique: true, required: true, trim: true },
    },
    metadata: {
      difficulty: { type: String, default: "" },
      subject: [], // which subject(s) this course falls under
      students_enrolled: { type: String, default: "" }
    },
    resources_used: [], // all the resources used in this course
  }
);

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;