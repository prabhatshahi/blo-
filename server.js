const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");

const dotenv = require("dotenv");
const connectDB = require("./config/db");

//env config
dotenv.config();

//mogodb coinn
connectDB();

// Create express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
  res.status(200).send({
    message: "Node server",
  });
});

// Port
const PORT = process.env.PORT || 5000;

// Listen on the specified port
app.listen(PORT, () => {
  console.log(
    `Server is running ${process.env.DEV_MODE} on Port no ${PORT}`.bgWhite.red
  );
});
