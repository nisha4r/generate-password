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

// this function generates random password with specified criteria
var generatePassword = function () {
  // password length 8 > 128 character
  var passwordLength = window.prompt("Enter password length min 8 to max 128 characters.");
  var characters = "";
  // If user pressed Cancel, immediately end function
  if (!passwordLength) {
    return;
  }

  // validating not a number, empty length, numbers < 8 or > 128 characters length
  if (isNaN(passwordLength) || passwordLength == "" || (passwordLength < 8 || passwordLength > 128)) {
    window.alert("Please enter numbers between 8 and 128 character length.");
    return;
  }

  // Uppercase 
  var upperCase = window.confirm("Do you want an uppercase in your password?");
  if (upperCase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log("UpperCase: Y");
  }

  // Lowercase
  var lowerCase = window.confirm("Do you want a lowercase in your password?");
  if (lowerCase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
    console.log("LowerCase: Y");
  }


  // Specialcharacters
  var specialCharacters = window.confirm("Do you want a special character in your password?");
  if (specialCharacters) {
    characters += "!@#$%^&*()";
    console.log("SpecialCharacter: Y");
  }

  // Numbers
  var numbers = window.confirm("Do you want a number in your password?");
  if (numbers) {
    characters += "0123456789";
    console.log("Numbers: Y");
  }
  var pwd = "";
  console.log("characters.length: " + characters.length);
  for (var i = 0; i < passwordLength; i++) {
    // Get random index from array of characters
    var index = Math.floor(Math.random() * characters.length); // generates random number for character length
    pwd += characters.substring(index, index + 1);
  }
  console.log("pwd " + pwd);

  return pwd;

}
