var express = require('express');
var app = express();
var fs = require('fs');

var getAllItems = require('./routes/getAllItems');
app.use('/', getAllItems);

var getItem = require('./routes/getItem');
app.use('/', getItem);

var deleteItem = require('./routes/deleteItem');
app.use('/', deleteItem);

var addItem = require('./routes/addItem');
app.use('/', addItem);

app.listen(3000);