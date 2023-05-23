const { insertedNewService } = require("./service.controller");

const express = require("express");

const router = express.Router();

router.post("/", insertedNewService);

module.exports = router;