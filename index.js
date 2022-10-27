var express = require('express');
var app = express();
//morgan
var morgan = require('morgan');
// body-parser
var bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(function (req, res, next) {
  console.log(`The actual date is ${new Date()}`);
  next();
});

app.get('/', function (req, res) {
  res.send({ name: 'pATRICK', age: '24' });
});

app.get('/:id', function (req, res) {
  res.send(`You requested ${req.params.id}`);
});

app.get('*', function (req, res) {
  res.send('404 not found');
});

app.post('/hello', function (req, res) {
  res.send(req.body);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
