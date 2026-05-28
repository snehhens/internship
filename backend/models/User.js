const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  role: String,
  otp: String,
  otpExpires: Date,
  isVerified: {
    type: Boolean,
    default: false
  },
  password: String,
  contactNumber: String,
  instagram: String,
  profileCompleted: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("User", userSchema);