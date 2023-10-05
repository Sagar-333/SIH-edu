const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
    console.log(req);
    res.json({
        msg: "Hi There!",
    });
})

module.exports = router;