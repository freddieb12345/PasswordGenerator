// Assignment Code

var generateBtn = document.querySelector("#generate");

var myForm = document.getElementById("password");

var criteriaBtn = document.getElementById("criteria");


  

// Write password to the #password input

function showForm() { //This function will show the user the form and then create the arrays that will store the values given by the user
  if(myForm.style.display == 'block'){
    myForm.style.display = "none";
    criteriaBtn.innerHTML = "Pick Criteria for Password";
  }
  else  {
    myForm.style.display ="block";
    criteriaBtn.innerHTML = "Hide Form";
  }
}

function passwordLength() { //Saves user input into a variable
  var lengthInput = document.getElementById("length").value;
  console.log(lengthInput);
}


function uppercase() {
  var uppercase = document.getElementById("uppercase").checked;
  console.log(uppercase)
} 

function numeric() {
  var Numeric = document.getElementById("numeric").checked;
  console.log(Numeric)
} 

function specialCharacters() {
  var specialcharacters = document.getElementById("specialCharacters").checked;
  console.log(specialcharacters)
} 

function generatePassword() { //This function will randomly pick an element out of the previous array and place it into a new array
  var passwordCriteria = [];

  passwordLength();

  var lowerCase = document.getElementById("lowercase").checked;
  console.log(lowerCase)
  var uppercase = document.getElementById("uppercase").checked;
  console.log(uppercase);
  var specialcharacters = document.getElementById("specialCharacters").checked;
  console.log(specialcharacters );
  var Numeric = document.getElementById("numeric").checked;
  console.log(specialcharacters );

  numeric();
  specialCharacters();

  /* for (let i=0; i<lengthInput; i++){ */
    if (lowerCase == true){
      lowercasealphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
      var passwordCriteria = lowercasealphabet.concat(passwordCriteria)
      console.log(passwordCriteria)
    /* } */
    }
    if (uppercase == true){
      uppercasealphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
      var passwordCriteria = uppercasealphabet.concat(passwordCriteria)
      console.log(passwordCriteria)
    }
    if (specialcharacters == true){
      var specialCharactersArray = "~`!@#$%^&*()-_+={}[]|\/:;<>,.?".split('') ;
      var passwordCriteria = specialCharactersArray.concat(passwordCriteria) 
      console.log(passwordCriteria)
    }  
    if (Numeric == true){
      var NumericArray = "1234567890".split('') ;
      var passwordCriteria = NumericArray.concat(passwordCriteria) 
      console.log(passwordCriteria)
    }  

}















// Add event listener to generate button
/* criteriaBtn.addEventListener("click", showForm); */

/* generateBtn.addEventListener("click", generatePassword); */

