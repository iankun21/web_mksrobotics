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
  res.render('admin/dashboard', {title:'Dashboard'});
});

app.get('/admin/', function(req,res) {
  res.redirect('/admin/dashboard');
});

app.get('/admin/blank', function(req,res) {
  res.render('admin/blank');
});


app.get('/admin/kategori', function(req,res) {

  res.render('admin/kategori', {title:'Kategori'});
});

app.post('/admin/kategori/edit', function(req, res) {
  var id_kategori = req.param('id');
  var nama_kategori = req.param('nama');
  var kode_kategori = req.param('kode');
  var detail_kategori = req.param('detail');

  res.send(id_kategori + ' ' + nama_kategori + ' ' + kode_kategori);
});


exports.apps = functions.https.onRequest(app);
