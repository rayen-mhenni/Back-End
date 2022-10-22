const express = require("express");
const router = express.Router();
const {
  Addsocials,
  updatesocials,
  getsocials,
  deletesocials,
} = require("../controllers/socialsControllers");

const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(Addsocials);
router.route("/").get(verifyToken, getsocials);
router.route("/update/:id").post(verifyToken, updatesocials);
router.route("/delete/:id").post(verifyToken, deletesocials);

module.exports = router;
