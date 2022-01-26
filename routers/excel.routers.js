const express = require("express");
const router = express.Router();

const ExcelController = require("../controllers/excel.controller");

router.post("/insert", ExcelController.insert);

router.get("/getExcel", ExcelController.getExcel);

router.get("/hello", ExcelController.hello);

module.exports = router;
