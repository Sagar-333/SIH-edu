const bcrypt = require("bcrypt");
const StudentSchema = require("../models/Student.js");
const TeacherSchema = require("../models/Teacher.js");

async function register(req, res, next) {
  const { username, email, password } = req.body;
  if (!password || !username || !email) {
    res.status(405).json({
      message: "ERROR!"
    });
  }
  res.status(200).json({
    message: "ALL OK!",
  });
}

// TODO FIX HTTP_HEADER_SENT BUG

async function login(req, res, next) {
  return;
}


module.exports = {
  register,
  login
}