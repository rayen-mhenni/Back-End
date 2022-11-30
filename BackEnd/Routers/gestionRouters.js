const express = require("express");
const { Addgestion, getgestion, updategestion, deletegestion } = require("../Controllers/gestionControllers");
const router = express.Router();

const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(Addgestion);
router.route("/").get(getgestion);
router.route("/update/:id").put(verifyToken, updategestion);
router.route("/delete/:id").delete(verifyToken, deletegestion);

module.exports = router;
