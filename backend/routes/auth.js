const express = require("express");
const authenticationController = require("../controllers/authenticationController.js");
const router = express.Router();

// Both <WEBSITE>/auth/register and <WEBSITE>/auth/login will lead to their own
// non-lambda functions for their own respective job.

router.post("/register", authenticationController.register);
router.post("/login", authenticationController.login);

module.exports = router;