const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userController = require('.userController');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());










app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

module.exports;