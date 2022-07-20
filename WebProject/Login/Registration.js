function validate(){
    let u = document.getElementById('username').value
    let e = document.getElementById('email').value
    let p = document.getElementById('Password').value
    let cp = document.getElementById('cpassword').value

    if(u == "") {
        document.getElementById('usernamemessage').innerHTML = "Please enter valid details"
        }
    if(e == ""){
        document.getElementById('emailMessage').innerHTML = "Please enter valid email"
    }
    if(p == ""){
        document.getElementById('PasswordMessage').innerHTML = "Please enter valid password"
    }
    if(p != cp){
        document.getElementById('cPasswordMessage').innerHTML = "Passwords are not matching"
    }
     return false;
    }