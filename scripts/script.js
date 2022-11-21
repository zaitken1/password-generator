// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var characterLength = prompt("Enter your password length (10-64 characters)"); {
    if (characterLength == null){
      return null;
    }
    else if (characterLength < 10 || characterLength > 64 || isNaN(characterLength)) {
      alert("You must enter a numerical value between 10 and 64 characters"); {
        return null;
      }
    }
    var includeSpecialChar = confirm("Would you like to use special characters in your password?");
    var includeNums = confirm("Would you like to include numbers in your password?");
    var includeUppercase = confirm("Would you like to include uppercase letters in your password?");
    var includeLowercase = confirm("Would you like to include lowercase letters in your password?");
    
    return [characterLength, includeSpecialChar, includeNums, includeUppercase, includeLowercase];
  }
}


// Function for getting a random element from an array
function getRandom(arr) {
  var index = [Math.floor(Math.random() * arr.length)];
  return arr[index];
}

// Function to generate password with user input
function generatePassword() {
  
  var options = getPasswordOptions();
  var passwordLength = options.characterLength;

  var charChoices = [];
  charChoices = charChoices.concat(specialCharacters);
  charChoices = charChoices.concat(numericCharacters);
  charChoices = charChoices.concat(lowerCasedCharacters);
  charChoices = charChoices.concat(upperCasedCharacters);

  console.log(charChoices);

  while (password.length < passwordLength) {
    if (includeSpecialChar || includeNums || lowerCasedCharacters || upperCasedCharacters) {
    index = Math.floor(Math.random() * charChoices.length);
    password += charChoices[index];
  
      if (includesSpecialChar === true) {
        charChoices = charChoices.concat(specialCharacters);
      }
      if (includeNums === true) {
        charChoices = charChoices.concat(numericCharacters);
      }
      if (lowerCasedCharacters === true) {
        charChoices = charChoices.concat(lowerCasedCharacters);
      }
      if (upperCasedCharacters === true) {
        charChoices = charChoices.concat(upperCasedCharacters);
      }
    }

    else {
      alert("Please choose at least one character type to generate password");
    }
  }
    var password = "";

    return[options, passwordLength, password];
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);