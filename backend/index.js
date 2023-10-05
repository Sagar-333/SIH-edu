const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

require('dotenv').config(); // load all the environment variables

const PORT = process.env.PORT || 3001;
const URI_KEY = "";
// const 

app.use(express.json());
app.use(cors());

// ADD ROUTES
// ADD ERROR HANDLING
// ADD MONGOOSE UTILITY
// ADD JWT HANDLING

// ROUTES

const test = require("./routes/test.js");
const auth = require("./routes/auth.js");

app.use("/test", test);
app.use("/auth", auth);

app.listen(PORT, () => {
  console.log(`yahoo: ${PORT}`);
})

