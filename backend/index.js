const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// require('dotenv').config();

app.use(express.json());
app.use(cors());

app.listen(3001, () => {
  console.log("yahoo");
})

