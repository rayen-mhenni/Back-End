const express = require("express");
const router = express.Router();
const { Addsliders, updatesliders, getsliders, deletesliders } = require("../Controllers/slidersControllers");

const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(verifyToken, Addsliders);
router.route("/").get(getsliders);
router.route("/update/:id").put(verifyToken, updatesliders);
router.route("/delete/:id").delete(verifyToken, deletesliders);

module.exports = router;
