const express = require("express");
const router = express.Router();
const { Addarticle, getarticles, updatearticle, deletearticles, getarticlesBytitle } = require("../controllers/articleControllers");

const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(Addarticle);
router.route("/").get(verifyToken, getarticles);
router.route("/title").get(verifyToken, getarticlesBytitle);
router.route("/update/:id").put(verifyToken, updatearticle);
router.route("/update/:id").delete(verifyToken, deletearticles);

module.exports = router;
