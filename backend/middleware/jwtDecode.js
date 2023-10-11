const jwt = require("jsonwebtoken");

const decodeClientKey = (authorizationToken) => {
  // get the JWT key and confirm whether it is valid or not
  try {
    return jwt.verify(authorizationToken, process.env.JWT_SECRET).id;
  } catch (error) {
    res.status(412).json({
      message: "Authentication failed!",
    });
  }
};

module.exports = decodeClientKey;