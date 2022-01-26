var express = require("express");
var cors = require("cors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var path = require("path");
var bodyParser = require("body-parser");
require("dotenv").config({ path: __dirname + "/.env" });

var app = express();
var port = process.env.PORT || 4000;

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "./")));

app.locals.moment = require("moment");

var mongoose = require("mongoose");

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

app.listen(port, () => {
  console.log("Listening on port: " + port);
});

module.exports = app;
