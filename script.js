var charLength = 8;
// Creating an Array number which will store list of numbers
var number = [];
// Creating an Array upperCase which will store list of upperCaseletters
var upperCase = [];
// Creating an Array lowerCase which will store list of lowerCaseletters
var lowerCase = [];
// Creating an Array number which will store special characters
var specialChar = [];

function generatePassword(){
//The isNaN() function determines whether a value is NaN or Not a Number!'
  var passwordLength = prompt("How many characters you want your password to be?(8-128)characters?");
  if (isNaN(passwordLength)|| passwordLength < 8 || passwordlength >128){
    alert("should be a number between 8 - 28,Please try again");
    return;
  }
  var isUpperCase =confirm ("Would you like uppercase letters in your password?");
  var isLowerCase =confirm ("Would you like lower letters in your password?");
  var isSpecialchars=confirm("Would you like special characters in your password?");
  var isNumber = confirm("Would you like numbers in your password?");
  return;
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click",writePassword);

//Psuedocode//
//Prompt the user for the Password criteria.
//Validate the Password criteria least 8 characters and no more than 128 characters.
//prompt for character types numbers,letterupperCase,letterlowerCase,symbol or specialcharacters.
//Press OK to answer each prompt
//Validate the input when at least one character type should be selected.
//Alternate Psuedocode
//Define the variable.
//Assigning the value to the variable.
//Generate Random password by Math.floor(Math.random() * string.length) create a random number between 0 to length of string - 1.
//Define character types such as numbers,letterupperCase,letterlowerCase,symbol or specialcharacters.
//Use conditional Statement to validate the Password requirements.
//Conditional Statement will have a prompt//
 //- Click the generate password button ?
 //User will get a prompt "how would you like your password between(8-12 characters) "Ok  AND cancel button
 //When users clicks Ok nothing happens,they will see the same prompt"password should be bebetween(8-12 characters)"//
 //When User enters valid answer then ,prompt for a character types upperCase, lowerCase,specialcharacters, numbers
 //The prompt will have confirm or Cancel
 //When all prompts are answered, I should see a random password is generated displayed in the box.
