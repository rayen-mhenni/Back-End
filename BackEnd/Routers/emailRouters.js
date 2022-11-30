const express = require("express");
const router = express.Router();
const {
  AddEmail,
  updateEmailByReference,
  getEmailByReference,
  getAllemail,
  deleteEmail,
} = require("../Controllers/emailControllers");

const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(AddEmail);
router.route("/all").get(getAllemail);
router.route("/:ref").get(getEmailByReference);
router.route("/update").put(verifyToken, updateEmailByReference);
router.route("/delete").delete(deleteEmail);

module.exports = router;
