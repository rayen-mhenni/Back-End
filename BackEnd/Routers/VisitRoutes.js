const express = require("express");
const router = express.Router();
const { getvisit, visit } = require("../Controllers/VisitControllers");

const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/").post(visit);
router.route("/visite").get(verifyToken, getvisit);

module.exports = router;
