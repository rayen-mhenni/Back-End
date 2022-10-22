const express = require("express");
const router = express.Router();
const { Addarticle, getarticles, updatearticle, deletearticles, getarticlesBytitle } = require("../controllers/articleControllers");

const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(Addarticle);
router.route("/").get(verifyToken, getarticles);
router.route("/title").get(verifyToken, getarticlesBytitle);
router.route("/update/:id").post(verifyToken, updatearticle);
router.route("/delete/:id").post(verifyToken, deletearticles);

module.exports = router;
