const express = require("express");
const authenticationController = require("../controllers/authenticationController.js");
const router = express.Router();

// Both <WEBSITE>/auth/register and <WEBSITE>/auth/login will lead to their own
// non-lambda functions for their own respective job.

router.post("/register", authenticationController.register);

router.post("/login", (req, res, next) => {
  if (!req.body.password || !req.body.username) {
    res.status(405).json({
      message: "ERROR!"
    });
  }
  authenticationController.login(req, res, next);
});

module.exports = router;