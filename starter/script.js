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
  // Variable for the length of the password
  var passwordLenght = 0;
  // Loop that verifies if the password has more than 8 characters but no more than 128
  while (passwordLenght < 8 || passwordLenght > 128) {
    // Prompt for the user to enter the length of the password
    passwordLenght = prompt(
      "How long would you like the password to be? (8 - 128 characters)"
    );
    // Alert to let the user know if the password is too short
    if (passwordLenght < 8) {
      console.log("Password too short!");
    // Alert to let the user know if the password is too long
    } else if (passwordLenght > 128) {
      console.log("Password too long!");
    }
  }
  // Variables for each kind of characters
  var lower = false;
  var upper = false;
  var numeric = false;
  var special = false;
  // Variable to check if all the character variables are false
  var allFalse = true;
  // Loop used to obtain the character types the user wants to use and to verify that at least one of them is selected
  while (allFalse) {
    // Alert to inform the user to choose at least one type of characters
    alert("Please to select at least one type of characters:");
    // Confirmation of use of the lowercase characters
    var lower = confirm(
      "Would you like your password to include lowercase characters? (Press 'OK' if you do and 'CANCEL' if you don't.)"
    );
    // Confirmation of use of the uppercase characters
    var upper = confirm(
      "Would you like your password to include uppercase characters? (Press 'OK' if you do and 'CANCEL' if you don't.)"
    );
    // Confirmation of use of the numeric characters
    var numeric = confirm(
      "Would you like your password to include numeric characters? (Press 'OK' if you do and 'CANCEL' if you don't.)"
    );
    // Confirmation of use of the special characters
    var special = confirm(
      "Would you like your password to include special characters? (Press 'OK' if you do and 'CANCEL' if you don't.)"
    );
    // If statement to change the status of the variable that checks if all the character variable are false
    if (lower == true || upper == true || numeric == true || special == true) {
      allFalse = false;
    }
  }
  // Object for user input
  var passwordOptions = {
    Length: parseInt(passwordLenght),
    Lowercase: lower,
    UpperCase: upper,
    Numeric: numeric,
    Special: special,
  };
  // Return statement of the object
  return passwordOptions;
}


// Function for getting a random element from an array
function getRandom(arr) {
  // Variable for the random funtion
  var randomElement = Math.floor(Math.random() * arr.length);
  // Return statement of the variable
  return randomElement;
}

// Function to generate password with user input
function generatePassword() {
  // Variable for the call of the getPasswordOptions function
  var passwordOptions = getPasswordOptions();
  // Variable for the password
  var password = "";
  // Variable for the character arrays to be used
  var differentCharacters = [];
  // If statements for the user selected character arrays
  if (passwordOptions.Special == true) {
    differentCharacters.push(specialCharacters);
  }
  if (passwordOptions.Numeric == true) {
    differentCharacters.push(numericCharacters);
  }
  if (passwordOptions.Lowercase == true) {
    differentCharacters.push(lowerCasedCharacters);
  }
  if (passwordOptions.UpperCase == true) {
    differentCharacters.push(upperCasedCharacters);
  }
  // For loop to generate the password
  for (i = 0; i < passwordOptions.Length; i++) {
    // Variable for a random integer of the array to be selected each loop
    var chooseArray = getRandom(differentCharacters);
    // Variable for a random integer of the character to be selected each loop from the selected array
    var chooseCharacter = getRandom(differentCharacters[chooseArray]);
    // Password creation
    password += differentCharacters[chooseArray][chooseCharacter];
  }
  // Return of the password
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Variable for the password created
  var password = generatePassword();
  // Variable for selecting the html element
  var passwordText = document.querySelector("#password");
  // Write the password into the html element
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
