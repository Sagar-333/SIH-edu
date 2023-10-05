const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth")

require('dotenv').config(); // load all the environment variables

const PORT = process.env.PORT || 3001;
const URI_KEY = "";
// const 
const corsOptions = {
  origin: true,
  credentials: true
}
// ADD ROUTES
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/v1/auth", authRoute)


// ADD ERROR HANDLING
mongoose.set("strictQuery", false)
const connect = async() => {
  try{
    await mongoose.connect(process.env.MONGO_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('MongoDB connected!')
  } catch (error){
    console.log('MongoDB connection failed!')
  }
}
// ADD MONGOOSE UTILITY
// ADD JWT HANDLING

// ROUTES

const test = require("./routes/test.js");
const auth = require("./routes/auth.js");

app.use("/test", test);
app.use("/auth", auth);

app.listen(PORT, () => {
  connect();
  console.log(`yahoo: ${PORT}`);
})

