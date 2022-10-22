const express = require("express");
const { Addparteners, updateparteners, deleteparteners, getparteners } = require("../Controllers/partenersControllers");

const router = express.Router();


const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(Addparteners);
router.route("/").get(verifyToken, getparteners);
router.route("/update/:id").put(verifyToken, updateparteners);
router.route("/update/:id").delete(verifyToken, deleteparteners);

module.exports = router;
