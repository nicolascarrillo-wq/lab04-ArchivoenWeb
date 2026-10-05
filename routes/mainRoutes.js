const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.home);
router.get("/about", mainController.about);
router.get("/contact", mainController.contact);
router.get("/services", mainController.services);
router.post("/contact", mainController.postContact);

module.exports = router;