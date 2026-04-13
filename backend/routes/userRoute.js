const express = require('express');
const router = express.Router();
const login = require('../controllers/userController.js');

/**
 * @route POST /api/user/login
 * @desc Login user with Google OAuth
 * @access Public
 */
router.post('/login', login);

module.exports = router;