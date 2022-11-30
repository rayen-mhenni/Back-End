const express = require("express");
const router = express.Router();
const {
getvisit,
visit
} = require("../Controllers/VisitControllers");

const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/").post(visit);
router.get("/visite").post(getvisit);

module.exports = router;
