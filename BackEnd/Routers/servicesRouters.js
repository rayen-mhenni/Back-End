const express = require("express");
const router = express.Router();
const { Addservices, updateservices, getservices, deleteservices } = require("../Controllers/servicesControllers");

const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(verifyToken, Addservices);
router.route("/").get(getservices);
router.route("/update/:id").put(verifyToken, updateservices);
router.route("/delete/:id").delete(verifyToken, deleteservices);

module.exports = router;
