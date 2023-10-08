const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const { errorHandler, notFound } = require("./middleware/errorHandlerWrapper.js");
const authRoute = require("./routes/auth.js");
const testRoute = require("./routes/test.js");
require('dotenv').config();

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));

const APIpath = "/api/v1";
app.options('*', cors()); // Enable pre-flight requests for all routes

app.use(express.json());
app.use(`${APIpath}/auth`, authRoute);
app.use("/test", testRoute);

app.use(cookieParser());
app.use(errorHandler);
app.use(notFound);

mongoose.set("strictQuery", false);

const connect = async() => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected!');
  } catch (error) {
    console.log('MongoDB connection failed!');
  }
};

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});
