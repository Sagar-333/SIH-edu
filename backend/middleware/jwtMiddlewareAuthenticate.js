const jwt = require("jsonwebtoken");

// callstack for this function:
// api call => .get() or .post() methods
// authenticateToken(req, res)
// actualFunction requiring authentication(req, res)

// if authenticateToken(res, res) fails while verifying the JWT,
// then it will not proceed to the actualFunction to be called later in the process

const authenticateToken = (req, res, next) => {
  // get the JWT key and confirm whether it is valid or not
  try {
    const token = req.headers.cookie.split("authorization=")[1];
    jwt.verify(token, process.env.JWT_SECRET).id;
    // if the verification has failed, it will trigger an exception
    // however, if the verfication is true, then we don't really need to return the
    // decrypted ID anyway, and it will allow us to call "next()", which is really just the 
    // function in line to be executed next.
    next();
  } catch (error) {
    return res.status(412).json({
      message: "Authentication failed!",
    });
  }
};

module.exports = authenticateToken;