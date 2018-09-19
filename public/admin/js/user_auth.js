function cekLogin(){

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user);
     //location.href = '/admin';
    } else {
    // // No user is signed in.
       console.log("Tidak ada user yang login");
    }
  });
}



function logout(){
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
    console.log("Logout Berhasil");
    location.href ='/login'
  }).catch(function(error) {
    // An error happened.
    console.log("Terjadi Kesalahan : " + error);
  });
}
