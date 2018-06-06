const Order = require('../models/order.js');

const create = (data, callback) => {
  new Order(data).save()
    .then(order => callback(null, order))
    .catch(error => callback(error));
}

const findAll = (data, callback) => {
  Order.find(data)
    .then(orders => callback(null, orders))
    .catch(error => callback(error));
}

module.exports = {
  create,
  findAll
};
