const express = require('express');
const { validatedUser } = require('./userLogin.controller');
const router = express.Router();

router.post("/", validatedUser);

module.exports = router;