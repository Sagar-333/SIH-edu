const Student = require('../models/Student.js');
const decodeClientKey = require('../middleware/jwtDecode.js');

const dashboardPopulate = async (req, res, next) => {
  const token = req.headers.cookie.split("authorization=")[1];
  const userId = decodeClientKey(token);

  let user = await Student.findOne({
    "_id": userId,
  });

  res.status(200).json({
    success: true,
    id: user._id,
    courses: user.courses
  })
}

module.exports = {
  dashboardPopulate
}