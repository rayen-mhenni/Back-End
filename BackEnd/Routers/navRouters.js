const express = require("express");
const router = express.Router();
const { Addnavigation, updatenavigation, getnavigation, deletenavigation } = require("../Controllers/navControllers");

const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(verifyToken, Addnavigation);
router.route("/").get(getnavigation);
router.route("/update/:id").put(verifyToken, updatenavigation);
router.route("/delete/:id").delete(verifyToken, deletenavigation);

module.exports = router;
