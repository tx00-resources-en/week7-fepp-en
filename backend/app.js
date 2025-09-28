require('dotenv').config()
const express = require("express");
const app = express();
// const morgan = require("morgan");
const userRouter = require("./routes/userRouter");
const jobRouter = require("./routes/jobRouter");
const { unknownEndpoint,errorHandler } = require("./middleware/customMiddleware");
const connectDB = require("./config/db");
const cors = require("cors");
 
// Middlewares
app.use(cors())
app.use(express.json());
// app.use(morgan("dev"));

connectDB();

// Use the jobRouter for all "/jobs" routes
app.use("/api/jobs", jobRouter);

// Use the userRouter for all /users routes
app.use("/api/users", userRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

module.exports = app;