const express = require("express");
const { Addopinions, updateopinions, deleteopinions, getopinions } = require("../Controllers/opinionsControllers");

const router = express.Router();


const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(Addopinions);
router.route("/").get(verifyToken, getopinions);
router.route("/update/:id").put(verifyToken, updateopinions);
router.route("/update/:id").delete(verifyToken, deleteopinions);

module.exports = router;
