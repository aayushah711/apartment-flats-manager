const express = require('express');
const authenticateToken = require('../controllers/authenticateToken');
const router = express.Router();
const { getFlats, createFlat } = require('../controllers/flatsController');

router.get('/get', authenticateToken, getFlats);

router.post('/createFlat', authenticateToken, createFlat);

module.exports = router;
