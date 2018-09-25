const  db = firebase.database();

var app = new Vue({
  el: '#app',
  firebase: {
    users: db.ref('users')
  }
});
