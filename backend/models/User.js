const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  role: String,
  otp: String,
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