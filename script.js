//Arrays of characters
  //nb - string split function used to creat arrays for: lowercase alphabet, uppercase alphabet, numbers and special characters.
  var str1 = "abcdefghijklmnopqrstuvwxyz";

      var alphaArray = str1.split("");

      var alphaUpperArray = str1.toUpperCase().split("");

  var str2 = "0123456789";
  
      var numArray = str2.split("");

  var str3 = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

      var specCharArray = str3.split("");

//Intitial variables
var passwordLenth = 0;
var incAlphaLower = true;
var incAlphaUpper = true;
var incNumber = true;
var incSpec = true;
var generateBtn;
var password = [];
var generatedPassword;


//Event listener assigned to 'Generate Password' button
document.getElementById("generateBtn").addEventListener("click", function () {
//Use input and validation - password length
do {
  var passwordLenth = prompt("Please enter a number (between 8-128) to indicate the desired password length.");
  if (isNaN(passwordLenth)) {
    alert("Input must be numerals between 8-128. Please try again.");
  }
}
while (passwordLenth < 8 || passwordLenth > 128 || isNaN(passwordLenth));

//User input and validation - Character types
do {
  alert("Please select the character types to include in your password.")
  var incAlphaLower = confirm("Include lower case letters?"); 
  var incAlphaUpper = confirm("Include upper case letters?");
  var incNumber = confirm("Include numbers?");
  var incSpec = confirm("Include special characters?");
  }
  while (incAlphaLower == false && incAlphaUpper == false && incNumber == false && incSpec == false);

//Creation of concatenated array from which to draw the types of characters selected by user for their password

var concatArray = [];

if(incAlphaLower === true) {
  concatArray.push.apply(concatArray, alphaArray);
}
if(incAlphaUpper === true) {
  concatArray.push.apply(concatArray, alphaUpperArray);
}
if(incNumber === true) {
  concatArray.push.apply(concatArray, numArray);
}
if(incSpec === true) {
  concatArray.push.apply(concatArray, specCharArray);
}

//Confirmation of user selection prior to code generation
  var selectionConfirmation = confirm("Requirements: \n   Password Length = " + passwordLenth + " characters\n   Include lower case letters: " + incAlphaLower + "\n   Include upper case letters: " + incAlphaUpper + "\n   Include numbers: " + incNumber + "\n   Include sepcial characters: " + incSpec);

//Generation of password
  if (selectionConfirmation === true) {
    for (var i = 0; i < passwordLenth; i++) {
      var rand = concatArray[Math.floor(Math.random() * concatArray.length - 1)];
      password.push(rand);
    }
    document.getElementById("password").textContent = password.join(""); 
  }
//Request to restart if details are incorrect  
  else {
    alert("Please try again");
  }
});