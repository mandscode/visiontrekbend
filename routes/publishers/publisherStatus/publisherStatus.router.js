const express = require("express");
const { controlledPublisher } = require("./services.controller");

const router = express.Router();

router.put("/:id", controlledPublisher);

module.exports = router;