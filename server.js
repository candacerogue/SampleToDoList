const mongoose = require('mongoose');
const express = require('express');
const app = express();
var router = express.Router();
var path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userController = require('./userController');
const PORT = 3000;

mongoose.connect('mongodb://onlyforcodesmith:ilovetesting!1@ds119355.mlab.com:19355/users');
mongoose.connection.once('open', (err, success) => {
  if (err) console.log('NOOOOOOOO', err);
  console.log('CONNECTED!');
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname)));

app.post('/login', userController.createUser, function (req, res) {
  return res.redirect('/todo');
})

app.get('/todo', (req, res) => {
  res.sendFile(__dirname + '/todo.html');
});




// app.get('/', userController.getUser);

// app.put('/', userController.updateUser);

// app.delete('/', userController.deleteUser);




const server = app.listen(3000, function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
  });

module.exports;