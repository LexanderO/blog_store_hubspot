const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/auth/hubspot", authController.startAuthentication);
router.get("/oauth-callback", authController.handleCallback);

module.exports = router;
