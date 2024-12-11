const express = require('express');
const router = express.Router();
const logInController = require('../../controllers/logInController'); // Adjust path if necessary

// Route for login
router.post('/', logInController.handleLogin);

module.exports = router;
