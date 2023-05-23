const express = require("express");
const { controlledService } = require("./services.controller");

const router = express.Router();

router.put("/:id", controlledService);

module.exports = router;