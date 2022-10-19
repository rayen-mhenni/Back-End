const express = require("express");
const router = express.Router();
const { Addarticle, getarticles, updatearticle } = require("../controllers/articleControllers");

const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(Addarticle);
router.route("/").get(verifyToken, getarticles);
router.route("/update/:id").post(verifyToken, updatearticle);

module.exports = router;
