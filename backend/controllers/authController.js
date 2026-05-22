const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const { email, role } = req.body;

    const otp = "1234";

    const user = new User({
      email,
      role,
      otp
    });

    await user.save();

    res.json({
      message: "Registered",
      otp
    });

  } catch (error) {
    res.status(500).json(error);
  }
};