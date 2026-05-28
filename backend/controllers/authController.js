const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");


exports.register = async (req, res) => {
  try {

    const { email, role } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    const otpExpires = new Date(Date.now() + 5 * 60 * 1000);

    const user = new User({
      email,
      role,
      otp,
      otpExpires,
      isVerified: false
    });

    await user.save();

    res.json({
      message: "Registered Successfully",
      otp
    });

  } catch (error) {
    res.status(500).json(error);
  }
};

exports.verifyOtp = async (req, res) => {

  try {

    const { email, otp } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }


    if (new Date() > user.otpExpires) {

      return res.status(400).json({
        message: "OTP Expired"
      });

    }

    if (String(user.otp) !== String(otp)) {
      return res.status(400).json({
        message: "Invalid OTP"
      });
    }

    user.isVerified = true;

    await user.save();

    res.json({
      message: "OTP Verified Successfully"
    });

  } catch (error) {
    res.status(500).json(error);
  }
};

exports.resendOtp = async (req, res) => {

  try {

    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {

      return res.status(404).json({
        message: "User not found"
      });

    }

    const otp = Math.floor(
      1000 + Math.random() * 9000
    ).toString();

    const otpExpires =
      new Date(Date.now() + 5 * 60 * 1000);

    user.otp = otp;

    user.otpExpires = otpExpires;

    await user.save();

    res.json({
      message: "OTP Resent Successfully",
      otp
    });

  } catch (error) {

    res.status(500).json(error);

  }

};

exports.createPassword = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    if (!user.isVerified) {
      return res.status(400).json({
        message: "OTP not verified"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;

    await user.save();

    res.json({
      message: "Password Created Successfully"
    });

  } catch (error) {
    res.status(500).json(error);
  }

};

exports.login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password"
      });
    }

    const token = jwt.sign(
      {
        userId: user._id
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );

    res.json({
      message: "Login Successful",
      token,
      profileCompleted: user.profileCompleted
    });

  } catch (error) {
    res.status(500).json(error);
  }

};