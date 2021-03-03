// Assignment Code

var generateBtn = document.querySelector("#generate");

var myForm = document.getElementById("password")


// Write password to the #password input

function showForm() { //This function will show the user the form and then create the arrays that will store the values given by the user
  if(myForm.style.display == 'block'){
    myForm.style.display = "none"
  }
  else  {
    myForm.style.display ="block"
  }
}

function generatePassword() { //This function will randomly pick an element out of the previous array and place it into a new array
  

}

// Add event listener to generate button
/* criteriaBtn.addEventListener("click", showForm); */

/* generateBtn.addEventListener("click", generatePassword); */

