//Creates variables for the form and the button the shows the form
var myForm = document.getElementById("password");
var criteriaBtn = document.getElementById("criteria");

//Creates function that will hide/show the form on button click
function showForm() { 
  if(myForm.style.display == 'block'){
    myForm.style.display = "none";
    criteriaBtn.innerHTML = "Pick Criteria for Password";
  }
  else  {
    myForm.style.display ="block";
    criteriaBtn.innerHTML = "Hide Form";
  }
}

function generatePassword() { 
  //Creates arrays for the password criteria and password
  var passwordCriteria = [];
  var password = [];
  
  //Checks the values of the form inputs and saves them as variables.
  var lengthInput = document.getElementById("length").value;
  //Checks to see if theres a valid input for the password length
  if (lengthInput < 8 || lengthInput > 128){
    window.alert("Length must be between 8 and 128");
  } else {
    var lowerCase = document.getElementById("one").checked;
    var uppercase = document.getElementById("two").checked;
    var Numeric = document.getElementById("three").checked;
    var specialcharacters = document.getElementById("four").checked;
    var lengthInput = document.getElementById("length").value;
    var Numeric = document.getElementById("numeric").checked;
    var specialcharacters = document.getElementById("specialCharacters").checked;

    //Adds the required criteria to the passwordCriteria array
    if (lowerCase == true){
      lowercasealphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
      var passwordCriteria = lowercasealphabet.concat(passwordCriteria)
    }
    if (uppercase == true){
      uppercasealphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
      var passwordCriteria = uppercasealphabet.concat(passwordCriteria)
    }
    if (specialcharacters == true){
      var specialCharactersArray = "~`!@#$%^&*()-_+={}[]|\/:;<>,.?".split('') ;
      var passwordCriteria = specialCharactersArray.concat(passwordCriteria) 
    }  
    if (Numeric == true){
      var NumericArray = "1234567890".split('') ;
      var passwordCriteria = NumericArray.concat(passwordCriteria) 
    } 
    
    //Adds check to make sure at least one of the criteria is selcted
    if (Numeric == false && lowerCase == false && uppercase == false && specialcharacters == false){
      window.alert("Please select at least one criteria option")
    } 

    //Randomly selects an element from the passwordCriteria array and addds it to the password array. This repeats equal to the value that the user inputted for the password length
    for (let i=0; i<lengthInput; i++) {
      var random = passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)];
      password = password.concat(random);
    }
    document.getElementById("finalPassword").innerHTML = password.join("");
    }
}
















// Add event listener to generate button
/* criteriaBtn.addEventListener("click", showForm); */

/* generateBtn.addEventListener("click", generatePassword); */

