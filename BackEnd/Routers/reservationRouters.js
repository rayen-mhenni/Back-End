const express = require("express");
const {
  Addreservation,
  updatereservation,
  deletereservation,
  getreservation,
  updatereservationStatus,
} = require("../Controllers/reservationControllers");

const router = express.Router();

const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(Addreservation);
router.route("/").get(verifyToken, getreservation);
router.route("/status/:id").put(verifyToken, updatereservationStatus);
router.route("/update/:id").put(verifyToken, updatereservation);
router.route("/delete/:id").delete(verifyToken, deletereservation);

module.exports = router;
