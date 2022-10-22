const express = require("express");
const { Addopinions, updateopinions, deleteopinions, getopinions } = require("../Controllers/opinionsControllers");

const router = express.Router();


const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(Addopinions);
router.route("/").get(verifyToken, getopinions);
router.route("/update/:id").post(verifyToken, updateopinions);
router.route("/delete/:id").post(verifyToken, deleteopinions);

module.exports = router;
