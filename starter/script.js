// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLenght = 0;
  while (passwordLenght < 8 || passwordLenght > 128) {
    passwordLenght = prompt(
      "How long would you like the password to be? (8 - 128 characters)"
    );
    if (passwordLenght < 8) {
      console.log("Password too short!");
    } else if (passwordLenght > 128) {
      console.log("Password too long!");
    }
  }
  var lower = confirm(
    "Would you like your password to include lowercase characters? (Press 'OK' if you do and 'CANCEL' if you don't.)"
  );
  var upper = confirm(
    "Would you like your password to include uppercase characters? (Press 'OK' if you do and 'CANCEL' if you don't.)"
  );
  var numeric = confirm(
    "Would you like your password to include numeric characters? (Press 'OK' if you do and 'CANCEL' if you don't.)"
  );
  var special = confirm(
    "Would you like your password to include special characters? (Press 'OK' if you do and 'CANCEL' if you don't.)"
  );
  
}
getPasswordOptions();
// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
