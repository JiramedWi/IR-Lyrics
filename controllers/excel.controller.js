const Excel = require("../models/excel.model");

// const fs = require("fs");
// const csv = require("csv-parser");
// let results = [];

// fs.createReadStream("../data.csv")
//   .pipe(
//     csv({
//       mapHeaders: ({ header, index }) => header.toLowerCase(),
//     })
//   )
//   .on("data", (data) => results.push(data));

// exports.insert = (req, res) => {
//   const excelList = [];

//   results.forEach((item, index) => {
//     const newExcel = new Excel({
//       order: index,
//       sname: item.sname,
//       artist: item.artist,
//       lyrics: item.lyric_y,
//     });

//     excelList.push(newExcel);
//   });

//   Excel.insertMany(excelList)
//     .then(() => {
//       res.json(excelList);
//     })
//     .catch((error) => {
//       res.json("error", error);
//     });
// };

exports.getExcel = (req, res) => {
  limit = 10000;
  skip = limit * req.body.start;

  Excel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  })
    .skip(skip)
    .limit(limit);
};

exports.hello = (req, res) => {
  res.json("hello world");
};
