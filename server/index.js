const express = require('express');
const bodyParset = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config.json');
const users = require('./routes/user');
const dishes = require('./routes/dish');
const orders = require('./routes/order');
const http = require('http');

// app
const app = express();
app.use(bodyParset.json());
app.use('/users', users);
app.use('/dishes', dishes);
app.use('/orders', orders);

// create web server
const server = http.createServer(app);

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${config.db.user}:${config.db.pass}@${config.db.host}/${config.db.name}`)
  .then(() =>  {
    console.log('mongo db connection succesful');

    server.listen(process.env.PORT || 5000, () => console.log(`Listening on port ${process.env.PORT || 5000}`));
  })
  .catch((err) => console.error(err));
