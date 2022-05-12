// Assignment Code

function generatePassword(){
//The isNaN() function determines whether a value is NaN or Not a Number!'
  var passwordLength = prompt("How many characters you want your password to be?(8-128)characters?");
  if (isNaN(passwordLength)|| passwordLength < 8 || passwordlength >128){
    alert("should be a number between 8 - 28,Please try again");
    return;
  }
  confirm ("Would you like uppercase letters in your password?");

  }
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
