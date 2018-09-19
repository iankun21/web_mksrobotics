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

app.get('/login', function(req,res) {
  res.render('admin/login');
});


functions.auth.user().onCreate(event => {

	const user = event.data;

	var userObject = {
		displayName : user.displayName,
		email : user.email,
		createdOn : user.metadata.createdAt
	};
	admin.database().ref('users/' + user.uid).set(userObject);
});

exports.apps = functions.https.onRequest(app);
