const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  // we don't need an ID key in here, as MongoDB
  // by default maintains a unique ID
  credentials: {
    name: { type: String, unique: true, required: true, trim: true },
    email: { type: String, unique: true, required: true, trim: true },
    password: { type: String, required: true, trim: true },
  },
  courses: {
    courses_completed: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }], // assuming you have a 'Course' model
    current_courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    certificates: [],
  },
});

// Assuming you want to create a model named 'Student' based on the 'StudentSchema'
const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;
