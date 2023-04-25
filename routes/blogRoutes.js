const express = require("express");

const { getallblog } = require("../controllers/blogControllers");

const router = express.Router();

router.get("/", getallblog);

module.exports = router;