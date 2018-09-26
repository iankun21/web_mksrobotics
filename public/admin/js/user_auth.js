

function cekLogin(){
  var logged;

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

      $(".logged-user-name").text(user.displayName);
      $(".logged-user-email").text(user.email);
      logged = JSON.stringify(user);
      loggedUser = user;



    } else {
    // // No user is signed in.

       location.href = '/login';
       logged = "Tidak ada";

    }
    //console.log(logged);
    console.log(loggedUser);
    return logged;

  });

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
