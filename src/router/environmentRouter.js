require("dotenv").config();
const express = require("express");
const { addValueDataEnvironment, getValueRecent } = require("../controller/environmentController");
const router = express.Router();

router.post("/addValue", addValueDataEnvironment);
router.get("/getRecent", getValueRecent);


module.exports = router;