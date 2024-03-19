const express = require("express");
const router = express.Router();
const { Addarticle, getarticles, updatearticle, deletearticles, getarticlesById } = require("../Controllers/articleControllers");

const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(verifyToken, Addarticle);
router.route("/").get(getarticles);
router.route("/:id").get(getarticlesById);
router.route("/update/:id").put(verifyToken, updatearticle);
router.route("/delete/:id").delete(verifyToken, deletearticles);

module.exports = router;
