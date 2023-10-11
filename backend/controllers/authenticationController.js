const bcrypt = require("bcrypt");
const Student = require("../models/Student.js");
const generateToken = require("../utils/generateToken.js");
// const TeacherSchema = require("../models/Teacher.js");


const register = async(req, res, next) => {
  const { username, email, password, fullName, confirmPassword } = req.body;

  if (!username || !email || !password || !fullName || !confirmPassword) {
    res.status(400).json({
      message: "Incomplete data!"
    });
    return;
  }


  const user = await Student.findOne({
    $or: [
      { "credentials.name": username },
      { "credentials.email": email },
    ],
  });

  if (user) {
    return res.status(409).json({
      message: "Username is already taken. Please choose a different one.",
    });
  }

  try {
    // Generate a salt
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new student instance
    const student = new Student({
      credentials: {
        name: username,
        email: email,
        password: hashedPassword,
      },
    });
    await student.save(); // user is now successfully added to the database
    return res.status(200).json({
      message: "User registered successfully!",
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({
      message: "Internal server error",
    });
    return;
  }
}

const login = async(req, res, next) => {
  try {
    const { email, username, password } = req.body;
    const userId = email || name;

    if (!userId || !password) {
      return res.status(400).json({
        message: "Incomplete data!"
      });
    }

    const user = await Student.findOne({
      $or: [
        { "credentials.name": userId },
        { "credentials.email": userId },
      ],
    });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found!' });
    }
    const checkCorrectPassword = await bcrypt.compare(password, user.credentials.password);
    if (!checkCorrectPassword) {
      return res.status(401).json({
        success: false,
        message: "Incorrect email or password!"
      });
    }
    // if login successful
    const { ...rest } = user._doc;

    const token = generateToken(user._id.toString()); 
    // Generated JWT is the result of the unique MongoDB storage ID
    res.cookie("authorization", token, {
      httpOnly: true,
      secure: false,
    });
    return res.status(200).json({
      success: true,
      message: "Login successful!", user: rest
    });
    
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

module.exports = {
  register,
  login,
};
