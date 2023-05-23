const express = require('express');
const router = express.Router();

const { showPublishers } = require("./publishers.controller");
// const { showUser } = require("./publisher-traffic.controller");
 
router.get('/', showPublishers)
// router.get('/', showUser)

module.exports = router;