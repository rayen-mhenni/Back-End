const express = require("express");
const { Addinfos, updateinfos, deleteinfos, getinfos } = require("../Controllers/infosControllers");

const router = express.Router();


const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(Addinfos);
router.route("/").get(verifyToken, getinfos);
router.route("/update/:id").put(verifyToken, updateinfos);
router.route("/update/:id").delete(verifyToken, deleteinfos);

module.exports = router;
