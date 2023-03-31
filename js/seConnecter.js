function text() {
    // Retrieving data 
    var uid = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("password").value;
    let Data = {
      user : "superadmin",
      email : "superadmin@gmail.com",
      psw : 123456
    }
    localStorage.setItem("user", JSON.stringify(Data))

// storing data
    var user = localStorage.getItem("user");
    user = JSON.parse(user)

    if( user.user == uid && user.email == email && user.psw == pwd  ){
      window.location.href = "../html/superAdmin.html"
    }
    else{
         alert("Identifiant incorrecte")
    }

}
