const jwt = require("jsonwebtoken");

const decodeClientKey = (authorizationToken) => {
  // get the JWT key and confirm whether it is valid or not
  try {
    const token = authorizationToken.split(" ");
    return jwt.verify(token[1], process.env.JWT_SECRET).id;
  } catch (error) {
    res.status(412).json({
      message: "Authentication failed!",
    });
  }
};

exports.decodeClientKey = decodeClientKey;