const express = require('express');
const mongoose = require('mongoose');
const Order = require('../controllers/order.js');

const router = express.Router();

router.get('/', (req, res) => {
  Order.findAll(req.query, (err, data) => {
    if (err) {
      return res.status(500).send({
        message: err.message
      });
    } else {
      if (!data || !data.length) {
        return res.status(404).send({
          message: 'Orders not found'
        });
      }
      res.status(200).json(data);
    }
  });
});

router.post('/', (req, res) => {
  Order.create(req.body, (err, data) => {
    if (err) {
      return res.status(500).send({
        message: err.message
      });
    } else {
      res.status(200).json(data);
    }
  });
});

router.delete('/:id', (req, res) => {
  Order.remove(eq.params.id, (err, data) => {
    if (err) {
      return res.status(500).send({
        message: err.message
      });
    } else {
      res.status(200).json(data);
    }
  });
});

module.exports = router;
