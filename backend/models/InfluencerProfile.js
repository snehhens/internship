const mongoose = require('mongoose');

const influencerProfileSchema =
  new mongoose.Schema({

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true
    },

    contactNumber: String,

    username: String,

    bio: String,

    category: String,

    country: String,

    instagramFollowers: Number,

    youtube: String,

    youtubeFollowers: Number,

    twitter: String,

    twitterFollowers: Number

  });

module.exports =
  mongoose.model(
    'InfluencerProfile',
    influencerProfileSchema
  );