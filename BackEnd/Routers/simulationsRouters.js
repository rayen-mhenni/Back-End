const express = require("express");
const router = express.Router();
const {
  Addsimulations,
  updatesimulations,
  getsimulations,
  deletesimulations,
} = require("../controllers/simulationsControllers");

const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(Addsimulations);
router.route("/").get(verifyToken, getsimulations);
router.route("/update/:id").post(verifyToken, updatesimulations);
router.route("/delete/:id").post(verifyToken, deletesimulations);

module.exports = router;
