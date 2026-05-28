const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
    unique: true
  },

  role: {
    type: String,
    enum: ['influencer', 'brand'],
    required: true
  },

  otp: String,

  otpExpires: Date,

  isVerified: {
    type: Boolean,
    default: false
  },

  password: String,

  profileCompleted: {
    type: Boolean,
    default: false
  },

  contactNumber: String,

  username: String,

  bio: String,

  instagram: String,

  followers: Number,

});

module.exports =
  mongoose.model("User", userSchema);