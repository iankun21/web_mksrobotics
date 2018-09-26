const functions = require('firebase-functions');
//include library expressjs setelah install di folder functions : npm i --save firebase-functions
const express = require('express');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

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

app.get('/admin/barang', function(req,res) {
  res.render('admin/barang', {title:'Barang'});
});

app.get('/admin/akun', function(req,res) {
  res.render('admin/akun', {title:'Akun'});
});


// app.get('/admin/tes/:id', function(req,res) {
//   return admin.database().ref("/users/" + req.params.id).once('value').then(function(snapshot) {
//
//   res.send(snapshot.val());
//   // ...
// });
//
// });
//
// app.get('/admin/users', function(req,res) {
//   res.render('admin/users', {title:'Users'});
// });

app.get('/login', function(req,res) {
  res.render('admin/login');
});


exports.apps = functions.https.onRequest(app);


exports.newUser = functions.auth.user().onCreate((user) => {
  return admin.database().ref("/users/" + user.uid).set({
    email : user.email,
    alamat : '',
    no_hp : '',
    facebook : '',
    line : '',
    instagram : '',
    whatsapp : '',
    roles : 'member'
  });

});


exports.deleteUser = functions.auth.user().onDelete((user) => {
  return admin.database().ref("/users/" + user.uid).remove();
});
