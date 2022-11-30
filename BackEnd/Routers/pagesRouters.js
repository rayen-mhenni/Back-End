const express = require("express");
const { getpages, Addpages, updatepages, deletepages } = require("../Controllers/pagesControllers");

const router = express.Router();


const verifyToken = require("../Middellware/AuthMiddelware");

router.route("/add").post(Addpages);
router.route("/").get(getpages);
router.route("/update/:id").put(verifyToken, updatepages);
router.route("/delete/:id").delete(verifyToken, deletepages);

module.exports = router;
