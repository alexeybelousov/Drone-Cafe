const User = require('../models/user.js');

const create = (data, callback) => {
  new User(data).save()
    .then(res => callback(null, res))
    .catch(error => callback(error));
}

const findOne = (email, callback) => {
  User.findOne({ email: email }).exec()
    .then(user => callback(null, user))
    .catch(error => callback(error));
}

const updateCredits = (id, credits, callback) => {
  User.findOneAndUpdate( { '_id': id }, { $inc: { 'credits': credits } }, { 'new': true }).exec()
    .then(user => callback(null, user))
    .catch(error => callback(error));
}

module.exports = {
  create,
  findOne,
  updateCredits
};
