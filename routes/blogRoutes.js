const express = require("express");

const { getAllBlog } = require("../controllers/blogControllers");

const router = express.Router();

router.get("/", getAllBlog);

module.exports = router;