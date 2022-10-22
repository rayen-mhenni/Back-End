const express = require("express");
const router = express.Router();
const {
  Addservices,
  updateservices,
  getservices,
  deleteservices,
} = require("../controllers/servicesControllers");

const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(Addservices);
router.route("/").get(verifyToken, getservices);
router.route("/update/:id").put(verifyToken, updateservices);
router.route("/update/:id").delete(verifyToken, deleteservices);

module.exports = router;
