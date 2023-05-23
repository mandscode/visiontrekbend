const express = require("express");
const { deleteService } = require("./services.controller");

const router = express.Router();

router.delete("/:id", deleteService);

module.exports = router;