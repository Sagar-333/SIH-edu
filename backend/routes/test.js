const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        msg: "Hi there!",
        type: "/GET"
    });
});

router.post("/", (req, res) => {
    res.json({
        msg: "Hi there!",
        type: "/POST",
        check: 45,
        requestContent: req?.body
    });
});

module.exports = router;