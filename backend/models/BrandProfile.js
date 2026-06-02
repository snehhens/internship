const mongoose = require('mongoose');

const brandProfileSchema =
  new mongoose.Schema({

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true
    },

    firstName: String,

    lastName: String,

    contactNumber: String,

    brandDescription: String,

    website: String,

    industry: [String],

    budgetMin: Number,

    budgetMax: Number

  });

module.exports =
  mongoose.model(
    'BrandProfile',
    brandProfileSchema
  );