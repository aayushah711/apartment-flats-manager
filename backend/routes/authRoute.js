const express = require('express');
const router = express.Router();
const { registerManager, loginManager } = require('../controllers/managerController');

router.post('/register', registerManager);

router.post('/login', loginManager);

module.exports = router;
