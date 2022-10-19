const express = require("express");
const { getnavigation } = require("../Controllers/navicationControllers");
const router = express.Router();


const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/").get(verifyToken, getnavigation);


module.exports = router;
