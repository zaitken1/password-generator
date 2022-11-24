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

var characterLength;

// Function to prompt user for password options
function getPasswordOptions() {
  characterLength = prompt("Enter your password length (10-64 characters)"); {
    if (characterLength == null){
      return null;
    }
    else if (characterLength < 10 || characterLength > 64 || isNaN(characterLength)) {
      alert("You must enter a numerical value between 10 and 64 characters"); {
        return null;
    }
    }

    var options = {
      includeSpecialChar: confirm("Would you like to use special characters in your password?"),
      includeNums: confirm("Would you like to include numbers in your password?"),
      includeUppercase: confirm("Would you like to include uppercase letters in your password?"),
      includeLowercase: confirm("Would you like to include lowercase letters in your password?")
    }
    
    charChoices = []
      if (options.includeSpecialChar == true) {
      charChoices = charChoices.concat(specialCharacters);
      }

      if (options.includeNums == true) {
      charChoices = charChoices.concat(numericCharacters);
      }
      
      if (options.includeLowercase == true) {
      charChoices = charChoices.concat(lowerCasedCharacters);
      }
      
      if (options.includeUppercase == true) {
      charChoices = charChoices.concat(upperCasedCharacters);
      }

      else if (options.includeSpecialChar == false && options.includeNums == false && options.includeLowercase == false && options.includeUppercase == false) {
        alert("Please choose at least one character type to generate password"); {
            getPasswordOptions()
        }
      }

    return [charChoices, options.characterLength, options.includeSpecialChar, options.includeNums, options.includeUppercase, options.includeLowercase];

    }

  }


// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();

  var passwordChar = "";
    while (passwordChar.length < characterLength) {
    var index = Math.floor(Math.random() * charChoices.length);
    passwordChar += charChoices[index];
  } 
  return passwordChar;
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