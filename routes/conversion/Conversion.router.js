const express = require("express");
const { showPublicTraffic } = require("./Conversion.controller");
const router = express.Router();

router.get('/', showPublicTraffic);

module.exports = router;