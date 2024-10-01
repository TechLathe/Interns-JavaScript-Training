const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET requests to /products',
  });
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'Handling POST requests to /products',
  });
});

router.get('/:productID', (req, res, next) => {
  const id = req.params.productID;
  if (id === 'special') {
    res.status(200).json({
      message: 'You discovered a special ID',
      id: id,
    });
  } else {
    res.status(200).json({
      message: `You passed ID ${id}`,
    });
  }
});

router.post('/:productID', (req, res, next) => {
  const id = req.params.productID;
  res.status(201).json({
    message: `Updated Product ${id}`,
  });
});

router.delete('/:productID', (req, res, next) => {
  const id = req.params.productID;
  res.status(200).json({
    message: `Deleted Product ${id}`,
  });
});

module.exports = router;
