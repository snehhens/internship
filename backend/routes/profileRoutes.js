const express = require('express');

const router = express.Router();

const {
  completeProfile
} = require('../controllers/profileController');

router.post(
  '/complete-profile',
  completeProfile
);

module.exports = router;