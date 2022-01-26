const Excel = require("../models/excel.model");

exports.insert = (req, res) => {
  const newExcel = new Excel({
    artistName: "Hello",
    lyrics: "Sunday morning is the best",
  });

  newExcel
    .save()
    .then(() => res.json(newDevice))
    .catch((error) => res.status(400).json("error" + error));
};

exports.getExcel = (req, res) => {
  Excel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
};

exports.hello = (req, res) => {
  res.json("hello world");
};
