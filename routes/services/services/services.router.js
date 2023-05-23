const express = require("express");
const { fetchServices } = require("./services.controller");

const router = express.Router();

router.get("/", fetchServices);

module.exports = router;