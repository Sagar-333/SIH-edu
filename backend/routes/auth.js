const express = require("express");
const router = express.Router();

// Both <WEBSITE>/auth/register and <WEBSITE>/auth/login will lead to their own
// non-lambda functions for their own respective job.

router.post("/register", (req, res) => {
  if (!req.body.password || !req.body.username || !req.body.email) {
    res.status(405).json({
      message: "ERROR!"
    });
  }
  res.json({
    uname: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
});

router.post("/login", (req, res) => {
  if (!req.body.password || !req.body.username) {
    res.status(405).json({
      message: "ERROR!"
    });
  }
  res.json({
    uname: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
});

module.exports = router;