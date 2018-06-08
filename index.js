const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
const config = require('./server/config.json');
const users = require('./server/routes/user');
const dishes = require('./server/routes/dish');
const orders = require('./server/routes/order');

// app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use('/users', users);
app.use('/dishes', dishes);
app.use('/orders', orders);

app.use(function(req, res){
	res.status(404).send('404 Not Found');
});

// create web server
const server = http.createServer(app);
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${config.db.user}:${config.db.pass}@${config.db.host}/${config.db.name}`)
  .then(() =>  {
    console.log('mongo db connection succesful');

    server.listen(port, () => console.log(`Listening on port ${port}`));
  })
  .catch((err) => console.error(err));
