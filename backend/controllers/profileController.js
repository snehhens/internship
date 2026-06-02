const User = require('../models/User');

const InfluencerProfile =
  require('../models/InfluencerProfile');

const BrandProfile =
  require('../models/BrandProfile');


exports.completeProfile =
async (req, res) => {

  try {

    const { email } = req.body;

    const user =
      await User.findOne({ email });

    if (!user) {

      return res.status(404).json({
        message: 'User not found'
      });

    }

    if (user.role === 'influencer') {

      const profile =
        new InfluencerProfile({

          userId: user._id,

          contactNumber:
            req.body.contactNumber,

          username:
            req.body.username,

          bio:
            req.body.bio,

          category:
            req.body.category,

          country:
            req.body.country,

          instagramFollowers:
            req.body.instagramFollowers,

          youtube:
            req.body.youtube,

          youtubeFollowers:
            req.body.youtubeFollowers,

          twitter:
            req.body.twitter,

          twitterFollowers:
            req.body.twitterFollowers

        });

      await profile.save();

    }

    if (user.role === 'brand') {

      const profile =
        new BrandProfile({

          userId: user._id,

          firstName:
            req.body.firstName,

          lastName:
            req.body.lastName,

          contactNumber:
            req.body.contactNumber,

          brandDescription:
            req.body.brandDescription,

          website:
            req.body.website,

          industry:
            req.body.industry,

          budgetMin:
            req.body.budgetMin,

          budgetMax:
            req.body.budgetMax

        });

      await profile.save();

    }

    user.profileCompleted = true;

    await user.save();

    return res.status(200).json({

      message:
        'Profile completed successfully',

      profileCompleted: true

    });

  }

  catch (error) {

    console.log(error);

    return res.status(500).json({
      message: 'Server error'
    });

  }

};