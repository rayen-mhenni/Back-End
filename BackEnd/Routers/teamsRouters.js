const express = require("express");
const router = express.Router();
const {
  Addteams,
  updateteams,
  getteams,
  deleteteams,
} = require("../controllers/teamsControllers");

const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(Addteams);
router.route("/").get(verifyToken, getteams);
router.route("/update/:id").put(verifyToken, updateteams);
router.route("/update/:id").delete(verifyToken, deleteteams);

module.exports = router;