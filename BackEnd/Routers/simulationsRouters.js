const express = require("express");
const router = express.Router();
const {
  Addsimulations,
  updatesimulations,
  getsimulations,
  deletesimulations,
} = require("../Controllers/simulationsControllers");

const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(Addsimulations);
router.route("/").get(verifyToken, getsimulations);
router.route("/update/:id").put(verifyToken, updatesimulations);
router.route("/delete/:id").delete(verifyToken, deletesimulations);

module.exports = router;
