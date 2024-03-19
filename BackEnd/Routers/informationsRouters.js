const express = require("express");
const {
  Addinformations,
  updateinformations,
  deleteinformations,
  getinformations,
} = require("../Controllers/informationsControllers");

const router = express.Router();

const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(verifyToken, Addinformations);
router.route("/").get(getinformations);
router.route("/update/:id").put(verifyToken, updateinformations);
router.route("/delete/:id").delete(verifyToken, deleteinformations);

module.exports = router;
