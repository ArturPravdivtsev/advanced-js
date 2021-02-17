function generatePassword() {
    var len = document.getElementById("passwordLength").value;
    var password = "";
    var symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < len; i++) {
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    document.getElementById("info").innerHTML = password;
}