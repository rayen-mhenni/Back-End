const express = require("express");
const { Addconfig, getconfigs, updateconfig, deleteconfigs, updateconfigstatus } = require("../Controllers/configurationsControllers");
const { Adddata, updatedata, deletedata, getdata } = require("../Controllers/dataControllers");

const router = express.Router();


const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(Addconfig);
router.route("/").get(verifyToken, getconfigs);
router.route("/update/:id").put(verifyToken, updateconfig);
router.route("/update/status/:id").put(verifyToken, updateconfigstatus);
router.route("/delete/:id").delete(verifyToken, deleteconfigs);

module.exports = router;
