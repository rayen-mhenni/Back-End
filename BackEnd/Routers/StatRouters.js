const express = require("express");
const { getnbSimulation, getnbMeeting, getnbcontacts } = require("../Controllers/StatControllers");
const router = express.Router();


const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/simul").get(verifyToken, getnbSimulation);
router.route("/meeting").get(verifyToken, getnbMeeting);
router.route("/contact").get(verifyToken, getnbcontacts);


module.exports = router;
