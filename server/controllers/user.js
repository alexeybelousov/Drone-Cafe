const User = require('../models/user.js');

const create = (data, callback) => {
  new User(data).save()
    .then(user => callback(null, user))
    .catch(error => callback(error));
}

const findOne = (email, callback) => {
  User.findOne({ email: email })
    .then(user => callback(null, user))
    .catch(error => callback(error));
}

const updateCredits = (id, credits, callback) => {
  User.findOneAndUpdate( { '_id': id }, { $inc: { 'credits': credits } }, { 'new': true })
    .then(user => callback(null, user))
    .catch(error => callback(error));
}

module.exports = {
  create,
  findOne,
  updateCredits
};
