const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/error");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const dotenv = require("dotenv");



app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// config:
dotenv.config({ path: "backend/config/config.env" });

// Route Import:
const sell = require("./routes/sellRoute");
const user = require("./routes/userRoute");
const project = require("./routes/projectRoute");
const blog = require("./routes/blogRoute");
const register = require("./routes/registerRoute");

app.use("/api/v1", sell);
app.use("/api/v1", user);
app.use("/api/v1", project);
app.use("/api/v1", blog);
app.use("/api/v1", register);


//Middleware For Errors:

app.use(errorMiddleware);


module.exports = app;
