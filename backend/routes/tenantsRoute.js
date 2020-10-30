const express = require('express');
const authenticateToken = require('../controllers/authenticateToken');
const router = express.Router();
const { getTenants, createTenant, updateTenant, deleteTenant } = require('../controllers/tenantsController');

router.get('/get', authenticateToken, getTenants);

router.post('/create', authenticateToken, createTenant);

router.put('/update', authenticateToken, updateTenant);

router.delete('/delete', authenticateToken, deleteTenant);

module.exports = router;
