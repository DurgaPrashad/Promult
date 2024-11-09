const express = require('express');
const { syncInventory } = require('../controllers/inventoryController');
const { createOrder } = require('../controllers/orderController');

const router = express.Router();

// Route to sync inventory
router.get('/sync-inventory', syncInventory);

// Route to create a new order
router.post('/create-order', createOrder);

module.exports = router;