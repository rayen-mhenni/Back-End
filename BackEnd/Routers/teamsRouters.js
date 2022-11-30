const express = require("express");
const router = express.Router();
const {
  Addteams,
  updateteams,
  getteams,
  deleteteams,
} = require("../Controllers/teamsControllers");

const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(Addteams);
router.route("/").get( getteams);
router.route("/update/:id").put(verifyToken, updateteams);
router.route("/delete/:id").delete(verifyToken, deleteteams);

module.exports = router;
