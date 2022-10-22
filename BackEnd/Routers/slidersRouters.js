const express = require("express");
const router = express.Router();
const {
  Addsliders,
  updatesliders,
  getsliders,
  deletesliders,
} = require("../controllers/slidersControllers");

const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(Addsliders);
router.route("/").get(verifyToken, getsliders);
router.route("/update/:id").put(verifyToken, updatesliders);
router.route("/delete/:id").delete(verifyToken, deletesliders);

module.exports = router;
