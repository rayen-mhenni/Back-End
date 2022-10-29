const express = require("express");
const router = express.Router();
const { Addarticle, getarticles, updatearticle, deletearticles, getarticlesBytitle } = require("../Controllers/articleControllers");

const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(Addarticle);
router.route("/").get(verifyToken, getarticles);
router.route("/title").get(verifyToken, getarticlesBytitle);
router.route("/update/:id").put(verifyToken, updatearticle);
router.route("/delete/:id").delete(verifyToken, deletearticles);

module.exports = router;
