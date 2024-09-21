const express = require('express');
const router = express.Router();

// Handle incoming get requests to /orders
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "orders were fetched"
    });
});

router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quamtity
    };
    res.status(201).json({
        message: "orders were created",
        order: orderId
    });
});

router.get('/:orderId', (req, res, next) => {
    res.status(201).json({
        message: "orders details",
        orderId: req.params.orderId
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(201).json({
        message: "orders deleted",
        orderId: req.params.orderId
    });
});



module.exports = router;