const functions = require('firebase-functions');
//include library expressjs setelah install di folder functions : npm i --save firebase-functions
const express = require('express');

//inisialisasi apps expressjs
const app = express();

//set template engine ke ejs setelah install di folder functions : npm install ejs -save
app.set('view engine', 'ejs');
//set folder static ke public untuk menyimpan file statis
app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res) {
  res.render('index');
});

app.get('/admin/dashboard', function(req,res) {
  res.render('admin/index');
});

app.get('/admin/', function(req,res) {
  res.redirect('/admin/dashboard');
});


app.get('/admin/kategori', function(req,res) {
  res.render('admin/kategori');
});


exports.apps = functions.https.onRequest(app);
