const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const excelSchema = new Schema({
  artistName: { type: String, require: true },
  lyrics: { type: String, require: true },
});

const Excel = mongoose.model("Excel", excelSchema);

module.exports = Excel;
