const express = require("express");
const { insertedNewPublisher } = require("./publisher.controller");
const router = express.Router();

router.post("/", insertedNewPublisher);

module.exports = router;