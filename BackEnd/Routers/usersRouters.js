const express = require("express");
const router = express.Router();
const {
  authUser,
  Adduser,
  updateuser,
  getusers,
  resetpass,
  updatepass
} = require("../Controllers/usersControllers");

const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/").post(authUser);
router.route("/add").post(Adduser);
router.route("/").get(getusers);
router.route("/update").put(verifyToken, updateuser);
router.route("/resetpassword").put(resetpass);
router.route("/updatepassword/:id").put(verifyToken,updatepass);

module.exports = router;
