const express = require("express");
const router = express.Router();
const {
  authUser,
  Adduser,
  updateuser,
  getusers,
  resetpass,
  updatepass
} = require("../controllers/usersControllers");

const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/").post(authUser);
router.route("/add").post(Adduser);
router.route("/").get(verifyToken, getusers);
router.route("/update").post(verifyToken, updateuser);
router.route("/resetpassword").post(resetpass);
router.route("/updatepassword/:id").post(verifyToken,updatepass);

module.exports = router;
