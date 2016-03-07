var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 3000;
var router = express.Router();
app.use('/', router);
app.use(express.static(__dirname + '/app'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/libs', express.static(__dirname + '/node_modules'));
app.listen(port);