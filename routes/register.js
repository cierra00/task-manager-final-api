const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

// POST route to register a user
router.post('/', registerController.createUser);

module.exports = router;
