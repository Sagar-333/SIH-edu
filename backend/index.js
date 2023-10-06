const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const {
  errorHandler,
  notFound,
} = require("./middleware/errorHandlerWrapper.js");
const authRoute = require("./routes/auth")
require('dotenv').config(); // load all the environment variables

const corsOptions = {
  origin: true,
  credentials: true
}

// CONFIG
const PORT = process.env.PORT || 3001;
const MONGO_URI_KEY = process.env.MONGO_URI;

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(errorHandler);
app.use(notFound);

// ROUTES
app.use("/api/v1/auth", authRoute)


mongoose.set("strictQuery", false)
const connect = async() => {
  try{
    await mongoose.connect(MONGO_URI_KEY,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('MongoDB connected!')
  } catch (error){
    console.log('MongoDB connection failed!')
  }
}

// ROUTES

const test = require("./routes/test.js");
const auth = require("./routes/auth.js");

app.use("/test", test);
app.use("/auth", auth);

app.listen(PORT, () => {
  connect();
  console.log(`yahoo: ${PORT}`);
})

// TODO
// ADD JWT middleware
// ADD MONGODB querying
// ADD OBJECT POPULATION 
