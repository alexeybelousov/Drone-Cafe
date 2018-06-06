const express = require('express');
const bodyParset = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config.json');
const users = require('./routes/user');
const http = require('http');

// app
const app = express();
app.use(bodyParset.json());
app.use('/users', users);

// create web server
const server = http.createServer(app);

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${config.db.host}/${config.db.name}`)
  .then(() =>  {
    console.log('mongo db connection succesful');

    server.listen(config.port, () => console.log(`Listening on port ${config.port}`));
  })
  .catch((err) => console.error(err));
