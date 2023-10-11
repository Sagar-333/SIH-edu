const express = require("express");
const router = express.Router();

const courseController = require("../controllers/courseController.js");
const jwtMiddlewareAuthentication = require("../middleware/jwtMiddlewareAuthenticate.js");

router.get("/", async (req, res) => {});
router.post("/add", courseController.addNewCourse);

module.exports = router;