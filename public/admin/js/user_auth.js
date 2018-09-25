

function cekLogin(){
  var logged;

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      //console.log(user);
      $(".logged-user-name").text(user.displayName);
      $(".logged-user-email").text(user.email);
      logged = user;
    //  console.log(logged);


    } else {
    // // No user is signed in.

       location.href = '/login';
       logged = "Tidak ada";
    }

  });

  return logged;
}



function logout(){
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
    console.log("Logout Berhasil");
    location.href ='/login';
  }).catch(function(error) {
    // An error happened.
    console.log("Terjadi Kesalahan : " + error);
  });
}
