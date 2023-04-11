function text() {
    // Retrieving data 
    var uid = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("password").value;
    let Data = {
      user : "admin",
      email : "admin@gmail.com",
      psw : 123456
    }
    localStorage.setItem("user", JSON.stringify(Data))

// storing data
    var user = localStorage.getItem("user");
    user = JSON.parse(user)

    if( user.user == uid && user.email == email && user.psw == pwd  ){
      window.location.href = "../html/admin.html"
    }
    else{
         alert("Identifiant incorrecte")
    }

}
function text() {
    // Retrieving data 
    var uid = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("password").value;
    let Data = {
      user : "admin",
      email : "admin@gmail.com",
      psw : 12345618
    }
    localStorage.setItem("user", JSON.stringify(Data))

// storing data
    var user = localStorage.getItem("user");
    user = JSON.parse(user)

    if( user.user == uid && user.email == email && user.psw == pwd  ){
      window.location.href = "../html/admin.html"
    }
    else{
         alert("Identifiant incorrecte")
    }

}
