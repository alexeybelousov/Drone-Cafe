const Order = require('../models/order.js');

const create = (data, callback) => {
  new Order(data).save()
    .then(order => callback(null, order))
    .catch(error => callback(error));
}

const findAll = (data, callback) => {
  Order.find(data)
    .populate('user')
    .populate('dish')
    .then(orders => callback(null, orders))
    .catch(error => callback(error));
}

const updateStatus = (id, status, callback) => {
  Order.findOneAndUpdate( { '_id': id }, { 'status': status }, { 'new': true })
    .then(order => callback(null, order))
    .catch(error => callback(error));
}

const remove = (id, callback) => {
  Order.remove({ '_id': id })
    .then(result => callback(null, result))
    .catch(error => callback(error));
}

module.exports = {
  create,
  findAll,
  updateStatus,
  remove
};
