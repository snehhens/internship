const router = require("express").Router();
const authController = require("../controllers/authController");

router.post("/register", authController.register);

router.post("/verify-otp", authController.verifyOtp);

router.post("/create-password", authController.createPassword);

router.post("/login", authController.login);

module.exports = router;