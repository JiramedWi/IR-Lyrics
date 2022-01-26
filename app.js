const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config({ path: __dirname + "/.env" });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "./")));

app.locals.moment = require("moment");

const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://jumma:jumma@ir-lyrics.s9eno.mongodb.net/IR-Lyrics?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("successfully connect to the database"))
  .catch((error) => console.log(error));

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

//router
const excelRouter = require("./routers/excel.routers");

app.use("/", excelRouter);

app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});

module.exports = app;
