var charLength = 8; 
// Creating an Array number which will store list of numbers
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];
// Creating an Array upperCase which will store list of upperCaseletters
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// Creating an Array lowerCase which will store list of lowerCaseletters
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// Creating an Array specialCharArr which will store special characters
var specialCharArr = ['!','@','#','$','%','^','&','*','(',')'];
//This is an empty array storing user's choice
var userChoiceArr = [];
var passwordArr=[];//This is an empty array

function generatePassword(){
//The isNaN() function determines whether a value is NaN or Not a Number!'
  var counter = 0;//keeping track of how many times we add characters before we get to the for loop
  var charLength = prompt("How many characters you want your password to be?(should be 8-128)characters");
  if (isNaN(charLength)|| charLength < 8 || charLength >128){
    alert("should be a number between 8 - 128.Let's try again!!");
    return;
  }
  if (confirm ("Would you like uppercase letters in your password?")){
    userChoiceArr = userChoiceArr.concat(upperCaseArr);
    passwordArr.push(upperCaseArr[Math.floor(Math.random() * upperCaseArr.length)])//
    counter ++;
  }
  if(confirm ("Would you like lowercase letters in your password?")){
    userChoiceArr = userChoiceArr.concat(lowerCaseArr);
    passwordArr.push(lowerCaseArr[Math.floor(Math.random() * lowerCaseArr.length)])//
    counter ++;
  }
  if(confirm("Would you like special characters in your password?")){
    userChoiceArr = userChoiceArr.concat(specialCharArr);
    passwordArr.push(specialCharArr[Math.floor(Math.random() * specialCharArr.length)])//
    counter ++;
  }
  if(confirm("Would you like numbers in your password?")){
    userChoiceArr = userChoiceArr.concat(numberArr);
    passwordArr.push(numberArr[Math.floor(Math.random() * numberArr.length)])//
    counter ++;
  }
  for (i=0; i < charLength-counter;i++){
    passwordArr.push(userChoiceArr[Math.floor(Math.random() * userChoiceArr.length)])
  }
  return passwordArr.join("")//Converts an array into the string and it will not change the original array
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
