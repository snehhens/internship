const router = require("express").Router();
const authController = require("../controllers/authController");
const { body } = require("express-validator");
const authMiddleware = require("../middleware/authMiddleware");

router.post(

    "/register",

    [

        body("email")
            .notEmpty()
            .withMessage("Email required")

            .isEmail()
            .withMessage("Invalid email"),

        body("role")
            .notEmpty()
            .withMessage("Role required")

    ],

    authController.register
);

router.post("/verify-otp", authController.verifyOtp);

router.post("/create-password", authController.createPassword);

router.post("/login", authController.login);

router.post("/resend-otp", authController.resendOtp);

router.get("/profile", authMiddleware, authController.getProfile);

module.exports = router;