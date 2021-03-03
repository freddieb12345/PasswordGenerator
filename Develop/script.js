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

function lowercase() {
  var lowerCase = document.getElementById("lowercase").checked;
  console.log(lowerCase)
}

function uppercase() {
  var uppercase = document.getElementById("uppercase").checked;
  console.log(uppercase)
} 

function numeric() {
  var numeric = document.getElementById("numeric").checked;
  console.log(numeric)
} 

function specialCharacters() {
  var specialCharacters = document.getElementById("specialCharacters").checked;
  console.log(specialCharacters)
} 


function generatePassword() { //This function will randomly pick an element out of the previous array and place it into a new array
  passwordLength();
  lowercase();
  uppercase();
  numeric();
  specialCharacters();
}



//











// Add event listener to generate button
/* criteriaBtn.addEventListener("click", showForm); */

/* generateBtn.addEventListener("click", generatePassword); */

