const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const excelSchema = new Schema({
  order: { type: Number, require: true },
  sname: { type: String, require: true },
  artist: { type: String, require: true },
  lyrics: { type: String, require: true },
});

const Excel = mongoose.model("Excel", excelSchema);

module.exports = Excel;
