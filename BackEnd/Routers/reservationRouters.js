const express = require("express");
const { Addreservation, updatereservation, deletereservation, getreservation } = require("../Controllers/reservationControllers");

const router = express.Router();


const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(Addreservation);
router.route("/").get(verifyToken, getreservation);
router.route("/update/:id").post(verifyToken, updatereservation);
router.route("/delete/:id").post(verifyToken, deletereservation);

module.exports = router;
