// HTML elemetn select 
const passwordBox = document.getElementById("password");
//how to lenght password
const lenght = 12;

// with which the password will be generated
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789";
const symbol = "@#$%^&*()_~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

// password generator function start
function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (lenght > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}
// password generator function end

// password copy function start
function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}
// password copy function end