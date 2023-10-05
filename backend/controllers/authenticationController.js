const bcrypt = require("bcrypt");
// const StudentSchema = require("../models/Student.js");
// const TeacherSchema = require("../models/Teacher.js");

const Student = require("../models/Student.js");

async function register(req, res, next) {
  const { username, email, password } = req.body;

  try {
    // Generate a salt
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    // Hash the password using the generated salt
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new student instance
    const student = new Student({
      credentials: {
        name: username,
        email: email,
        password: hashedPassword,
      },
    });

    // Save the user with the hashed password
    await student.save();

    res.status(200).json({
      message: "User registered successfully!",
    });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern['credentials.name'] === 1) {
      // Duplicate username error
      return res.status(409).json({
        message: "Username is already taken. Please choose a different one.",
      });
    }

    console.error("Error during registration:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
}

async function login(req, res, next) {
  try {
    const email = req.body.email;
    const user = await UserActivation.findOne({ email });

    // if user doesn't exist
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found!' });
    }

    // if user exists then check the password or compare the password
    const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password);

    // if password incorrect
    if (!checkCorrectPassword) {
      return res.status(401).json({ success: false, message: "Incorrect email or password!" });
    }

    // if login successful
    const { password, role, ...rest } = user._doc;
    res.status(200).json({ success: true, message: "Login successful!", user: rest });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
}

module.exports = {
  register,
  login,
};
