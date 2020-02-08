// // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// This is the button function that is setting the prompts

// var randomFunc = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   number: getRandomNumber,
//   symbol: getRandomSymbol


// };
// console.log(lower);
// // function generatePassword(lower, upper, number, symbol) {
// //   var = generatePassword = ' '

// // }

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+"];
console.log(specialCharacters);
var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// console.log(numericCharacters);
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// console.log(lowerCaseCharacters);
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];







// =====================================================================
function  generatePassword () {
  var passwordLength = parseInt(prompt("How many characters would you like your password to contain?"));
  // console.log(passwordLength)
  for (var i = 0; i < 1; i++) {
    if (passwordLength > 8 && passwordLength < 128) {
      // console.log(passwordLength);
      continue;
    }
    else {
      alert("Password must be between 8 to 128 characters");
      return;
    }

  }


  var specialCharactersResponse = confirm("Click OK including special characters");
  //  console.log(specialCharactersResponse);


  var numericCharactersResponse = confirm("Click OK including numeric characters");

  //  console.log(numericCharactersResponse);

  var lowerCaseCharactersResponse = confirm("Click OK including lowercase characters");
  //  console.log(lowerCaseCharactersResponse);

  var upperCaseCharactersResponse = confirm("Click OK including uppercase characters");

  //  console.log(upperCaseCharactersResponse);


  // ======================================================================

  // create an array all po ssible characters based on the inputs
  var bigArray = []



  if (specialCharactersResponse == true) {
    bigArray = bigArray.concat(specialCharacters);
  }

  if (numericCharactersResponse === true) {
    bigArray = bigArray.concat(numericCharacters);
  }

  if (lowerCaseCharactersResponse === true) {
    bigArray = bigArray.concat(lowerCaseCharacters);
  }

  if (upperCaseCharactersResponse === true) {
    bigArray = bigArray.concat(upperCaseCharacters);

  }

  console.log(bigArray);


  // used that "big array to create password"
  var generatePassword = "  "

  for (var i = 0; i < passwordLength; i++) {
    generatePassword = generatePassword + bigArray[Math.floor(Math.random() * bigArray.length)];
  }

  return generatePassword;
}
// =====================================================================

// function getRandomLower() {
//    String.fromCharCode(Math.floor(Math.random() * 26) + 97);




// }

// function getRandomUpper() {
//    String.fromCharCode(Math.floor(Math.random() * 26) + 65);

// }

// function getRandomNumber() {
//    String.fromCharCode(Math.floor(Math.random() * 10) + 48);

// }

// function getRandomSymbol() {
//   const symbols = "!@#$%^&*()_+{}|:<";
//   console.log([0])
//    symbols = [Math.floor(Math.random() * symbols)];



// }


// console.log(String.fromCharCode(97));
