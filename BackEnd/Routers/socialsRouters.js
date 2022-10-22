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
router.route("/update/:id").put(verifyToken, updatesocials);
router.route("/update/:id").delete(verifyToken, deletesocials);

module.exports = router;
