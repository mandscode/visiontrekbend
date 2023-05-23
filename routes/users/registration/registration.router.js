const express = require("express");
const { insertedNewUser } = require("./registration.controller");
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/images');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname + '-' + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage
})

var uploadLogo = upload.fields([
    {name: 'photo_path', maxCount: 1},
])


router.post('/',uploadLogo, insertedNewUser);

module.exports = router;