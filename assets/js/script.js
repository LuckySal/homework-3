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
    // Input validation
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Input must be a number between 8 and 128. Please try again.")
      isInvalid = true;
    }
  } while (isInvalid);
  do {
    isInvalid = true;
    // Lowercase characters?
    if (confirm("Do you want lowercase characters?")) {
      charAll = charAll + charLower;
      isInvalid = false;
    }

    // Uppercase characters?
    if (confirm("Do you want uppercase characters?")) {
      charAll = charAll + charUpper;
      isInvalid = false;
    }

    // Numeric characters?
    if (confirm("Do you want numeric characters?")) {
      charAll = charAll + charNumeric;
      isInvalid = false;
    }

    // Special characters?
    if (confirm("Do you want special characters?")) {
      charAll = charAll + charSpecial;
      isInvalid = false;
    }
    if (isInvalid) {
      alert("You must choose at least one character type. Please try again.");
      charAll = "";
    }
  } while (isInvalid);

  // Debug
  console.log(charAll);

  // Generate the new random password
  var newPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    newPassword = newPassword + charAll.charAt(Math.floor(Math.random() * charAll.length));
  }
  return newPassword;
}