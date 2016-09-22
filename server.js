var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two', function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/profile', function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'profile.html'));
});

app.get('/vin', function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'vin.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.cs==js'));
});

app.get('/ui/Ppps.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Ppps.jpg'));
});

app.get('/ui/BG.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'BG.jpg'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
