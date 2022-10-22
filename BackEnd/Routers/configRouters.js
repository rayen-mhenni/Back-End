const express = require("express");
const router = express.Router();
const { Addconfig, getconfigs, updateconfig, deleteconfigs } = require("../Controllers/configurationsControllers");

const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(Addconfig);
router.route("/").get(verifyToken, getconfigs);
router.route("/update/:id").put(verifyToken, updateconfig);
router.route("/update/:id").delete(verifyToken, deleteconfigs);

module.exports = router;
