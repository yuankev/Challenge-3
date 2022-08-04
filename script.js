// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];
  if (!options) return null;
  return result.join('');
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = "#password";
}

// Add event listener to generate button
addEventListener ("click",writePassword)


