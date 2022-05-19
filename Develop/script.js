// First I have to assign the variables a value or values

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialCar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", ":", ";", ",", ".", "/", "?", "~", "", "<", ">", "\\", "\"", " "];
var numbers = [0,1,2,3,4,5,6,7,8,9];




// Ask user for their choice

var userChoice = window.prompt("Choose the lenght of your password. Between 8 and 128 characters");


var userChoice = window.prompt ('Do you want to use lower case?');

 
var userChoice = window.prompt("Do you want to use numbers?");


var userChoice = window.prompt("Do you want to use upper case?");


var userChoice = window.prompt("Do you want to use special characters?");


//  Get random index from upperCase array of options 

  var index = Math.floor(Math.random() * upperCase.length);
  var computerChoice = upperCase[index];

  window.alert("The computer chose " + computerChoice);

//  Get random index from lowerCase array of options

  var index = Math.floor(Math.random() * lowerCase.length);
  var computerChoice = lowerCase[index];

  window.alert("The computer chose " + computerChoice);

//  Get random index from numbers array of options

var index = Math.floor(Math.random() * numbers.length);
var computerChoice = numbers[index];

window.alert("The computer chose " + computerChoice);

//  Get random index from specialCar array of options

var index = Math.floor(Math.random() * specialCar.length);
var computerChoice = specialCar[index];

window.alert("The computer chose " + computerChoice);


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



