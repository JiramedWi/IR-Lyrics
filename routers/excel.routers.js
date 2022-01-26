const express = require("express");
const router = express.Router();

const ExcelController = require("../controllers/excel.controller");

// uncomment to use insert excel function
// router.post("/insert", ExcelController.insert);

router.get("/getExcel", ExcelController.getExcel);

router.get("/", ExcelController.hello);

module.exports = router;
