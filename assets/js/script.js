// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const charLower = "abcdefghijklmnopqrstuvwxyz",
  charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  charNumeric = "0123456789",
  charSpecial = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

const generatePassword = function () {
  // All of the characters the user has selected
  var charAll = "";

  // Password length?
  do {
    var isInvalid = false;
    var passwordLength = prompt("How many characters for your password?");
    // TODO: Input validation
  } while (isInvalid);

  // Lowercase characters?
  if (confirm("Do you want lowercase characters?")) {
    charAll = charAll + charLower;
  }

  // Uppercase characters?
  if (confirm("Do you want uppercase characters?")) {
    charAll = charAll + charUpper;
  }

  // Numeric characters?
  if (confirm("Do you want numeric characters?")) {
    charAll = charAll + charNumeric;
  }

  // Special characters?
  if (confirm("Do you want special characters?")) {
    charAll = charAll + charSpecial;
  }

  // Debug
  console.log(charAll);


}