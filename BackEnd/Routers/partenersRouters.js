const express = require("express");
const { Addparteners, updateparteners, deleteparteners, getparteners } = require("../Controllers/partenersControllers");

const router = express.Router();


const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(Addparteners);
router.route("/").get(verifyToken, getparteners);
router.route("/update/:id").post(verifyToken, updateparteners);
router.route("/delete/:id").post(verifyToken, deleteparteners);

module.exports = router;
