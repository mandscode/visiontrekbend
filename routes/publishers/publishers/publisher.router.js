const express = require("express");
const { fetchPublishers } = require("./publisher.controller");
const router = express.Router();

router.get("/", fetchPublishers);

module.exports = router;