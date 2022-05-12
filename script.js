// Assignment Code

var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var passwordlength = prompt("Would you like your password between (8-128)characters?");
  if (passwordlength < 8 || passwordlength >128){
    alert("Your Password should be between (8-128)characters");
    return;
  }
  var number = prompt("Would you like numbers?");
  if(number){
    prompt("Enter the number");
    return;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

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
