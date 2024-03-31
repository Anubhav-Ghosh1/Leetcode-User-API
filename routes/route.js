const {leetcode} = require("../leetcode");

const express = require("express");
const router = express.Router();

router.get("/getUser/:id",leetcode);

module.exports = router;