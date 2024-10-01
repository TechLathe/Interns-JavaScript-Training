const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET requests to /orders',
  });
});

router.post('/', (req, res, next) => {
  const { productId, quantity } = req.body;
  if (!productId || !quantity) {
    res.status(400).json({
      message: 'Product ID and quantity are required',
    });
  } else {
    res.status(201).json({
      message: `Order created for product ${productId} with quantity ${quantity}`,
    });
  }
});

router.get('/:orderId', (req, res, next) => {
  const orderId = req.params.orderId;
  if (!orderId) {
    res.status(400).json({
      message: 'Order ID is required',
    });
  } else {
    res.status(200).json({
      message: `Order ${orderId} retrieved successfully`,
    });
  }
});

router.patch('/:orderId', (req, res, next) => {
  const orderId = req.params.orderId;
  const { status } = req.body;
  if (!orderId || !status) {
    res.status(400).json({
      message: 'Order ID and status are required',
    });
  } else {
    res.status(200).json({
      message: `Order ${orderId} updated to status ${status}`,
    });
  }
});

router.delete('/:orderId', (req, res, next) => {
  const orderId = req.params.orderId;
  if (!orderId) {
    res.status(400).json({
      message: 'Order ID is required',
    });
  } else {
    res.status(200).json({
      message: `Order ${orderId} deleted successfully`,
    });
  }
});

module.exports = router;


