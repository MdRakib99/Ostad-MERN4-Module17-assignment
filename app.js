const express = require("express");
const app = new express();
const router = express.Router();

const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const corst = require("cors");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const path = require("path");

//Middleware implement

//Databage

let URI =
  "mongodb+srv://<username>:<password>@cluster0.eq5zxrj.mongodb.net/AssignmentEcommerce";
let OPTION = { user: "rakib", pass: "rakib1122", autoIndex: true };
mongoose
  .connect(URI, OPTION)
  .then((res) => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

//Route

app.use("/api/v1", router);
// Serve static files
app.use(express.static(path.resolve(__dirname, "client-side", "dist")));

//Backend route

// Frontend route define

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "client-side", "dist", "index.html"));
});

module.exports = app;
