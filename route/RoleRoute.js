const express = require('express');
const router = express.Router();
const roleController = require('../controller/RoleController');

router.post('/create', roleController.createRole);  // Example line

module.exports = router; // Add this line
