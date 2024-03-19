const express = require("express");
const { Addcontact, getcontacts, updatecontact, deletecontacts } = require("../Controllers/contactControllers");
const router = express.Router();

const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(Addcontact);
router.route("/").get(verifyToken, getcontacts);
router.route("/update/:id").put(verifyToken, updatecontact);
router.route("/delete/:id").delete(verifyToken, deletecontacts);

module.exports = router;
