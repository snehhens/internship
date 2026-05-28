const User = require('../models/User');

exports.completeProfile =
async (req, res) => {

  try {

    const {
      email,
      contactNumber,
      username,
      bio,
      instagram,
      followers
    } = req.body;

    const user =
      await User.findOne({ email });

    if(!user) {

      return res.status(404).json({
        message: 'User not found'
      });

    }

    user.contactNumber =
      contactNumber;

    user.username =
      username;

    user.bio =
      bio;

    user.instagram =
      instagram;

    user.followers =
      followers;

    user.profileCompleted =
      true;

    await user.save();

    res.status(200).json({

      message:
        'Profile completed successfully',

      profileCompleted: true

    });

  }

  catch(error) {

    console.log(error);

    res.status(500).json({
      message: 'Server error'
    });

  }

};