// Creating an Array number which will store list of numbers
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];
// Creating an Array upperCase which will store list of upperCaseletters
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// Creating an Array lowerCase which will store list of lowerCaseletters
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// Creating an Array specialCharArr which will store special characters
var specialCharArr = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

function generatePassword(){
  let finalPassword=[];
  let userChoiceArr=[];
  // var counter = 0;//keeping track of how many times we add characters before we get to the for loop
  //prompt for character length
  var charLength = prompt("How many characters you want your password to be?(should be 8-128)characters");
  //The isNaN() function determines whether a value is NaN or Not a Number!'
  //if it's not a number or less than 8 or greater than 128 characters, throw an alert
  if (isNaN(charLength)|| charLength < 8 || charLength >128){
    alert("should be a number between 8 - 128.Let's try again!!");
    //return to generatePassword function
    return generatePassword();
  }
  //ask for character types and storing the password in userChoiceArr based on user's choice
  if (confirm ("Would you like uppercase letters in your password?")){
    userChoiceArr = userChoiceArr.concat(upperCaseArr);
  }
  if(confirm ("Would you like lowercase letters in your password?")){
    userChoiceArr = userChoiceArr.concat(lowerCaseArr);
  }
  if(confirm("Would you like special characters in your password?")){
    userChoiceArr = userChoiceArr.concat(specialCharArr);
  }
  if(confirm("Would you like numbers in your password?")){
    userChoiceArr = userChoiceArr.concat(numberArr);
  }
  //for loop to randomly generate password based on user inputs
  for (i=0; i < charLength;i++){
    finalPassword.push(userChoiceArr[Math.floor(Math.random() * userChoiceArr.length)])
  }
  return finalPassword.join("")//Converts an array into the string and it will not change the original array
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


