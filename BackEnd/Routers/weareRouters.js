const express = require("express");
const router = express.Router();
const {
  AddWeAre,
  updateWeAre,
  getweare,
  deleteweare,
  getweareBytitle,
} = require("../controllers/weareControllers");

const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(AddWeAre);
router.route("/").get(verifyToken, getweare);
router.route("/title").get(verifyToken, getweareBytitle);
router.route("/update/:id").put(verifyToken, updateWeAre);
router.route("/delete/:id").delete(verifyToken, deleteweare);

module.exports = router;
