const express = require("express");
const router = express.Router();

const dashboardController = require('../controllers/dashboardController.js');
const jwtMiddlewareAuthentication = require("../middleware/jwtMiddlewareAuthenticate.js");

router.get("/", jwtMiddlewareAuthentication, dashboardController.dashboardPopulate);

module.exports = router;