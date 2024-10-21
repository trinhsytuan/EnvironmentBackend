require("dotenv").config();
const express = require("express");
const { addValueDataEnvironment } = require("../controller/environmentController");
const router = express.Router();

router.post("/addValue", addValueDataEnvironment);
router.get("/getRecent", getValueRecent);


module.exports = router;