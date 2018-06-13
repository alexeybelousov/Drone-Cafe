const express = require('express');
const mongoose = require('mongoose');
const drone = require('netology-fake-drone-api');
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


      console.log(req.io);
      console.log('her');
      //req.io.emit('order created');

      res.status(200).json(data);
    }
  });
});

router.put('/:id', (req, res) => {
  Order.updateStatus(req.params.id, req.body.status, (err, data) => {
    if (err) {
      return res.status(500).send({
        message: err.message
      });
    } else {
      if (!data) {
        return res.status(404).send({
          message: 'Order not found'
        });
      }
      res.status(200).json(data);

      if (req.body.status === 'delivering') {
        drone
          .deliver()
          .then(() => {
            Order.updateStatus(req.params.id, 'delivered', (err, data) => {
              if (data) {
                // socket
              }
            });
          })
          .catch(() => {
            Order.updateStatus(req.params.id, 'problem', (err, data) => {
              if (data) {
                // socket

                // refund credits to user

                // find order by id, get user and change credits
              }
            });
          });
      }
    }
  })
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
