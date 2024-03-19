const express = require("express");
const { Adddata, updatedata, deletedata, getdata } = require("../Controllers/dataControllers");

const router = express.Router();

const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(verifyToken, Adddata);
router.route("/").get(getdata);
router.route("/update/:id").put(verifyToken, updatedata);
router.route("/delete/:id").delete(verifyToken, deletedata);

module.exports = router;
