const Course = require("../models/Courses.js");

const addNewCourse = async (req, res) => {
  const { details, metadata } = req.body;

  if (!details.name) {
    return res.status(412).json({
      success: false,
      message: "Incomplete data!"
    });
  }

  const course = await Course.findOne({
    $or: [
      { "details.name": details.name },
    ],
  });

  if (course) {
    return res.status(404).json({
      success: false,
      message: "Course already exists!"
    });
  }

  const newCourse = new Course({
    details,
    metadata
  });
  await newCourse.save();
  return res.status(200).json({
    success: true,
    message: "Course registered successfully!",
    course: newCourse
  });
}

module.exports = {
  addNewCourse
};