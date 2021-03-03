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
  console.log(lengthInput);
  //Checks to see if theres a valid input for the password length
  if (lengthInput < 8 || lengthInput > 128){
    window.alert("Length must be between 8 and 128");
  } else {
    var lowerCase = document.getElementById("lowercase").checked;
    console.log(lowerCase)
    var uppercase = document.getElementById("uppercase").checked;
    console.log(uppercase);
    var specialcharacters = document.getElementById("specialCharacters").checked;
    console.log(specialcharacters );
    var Numeric = document.getElementById("numeric").checked;
    console.log(specialcharacters );
    var lengthInput = document.getElementById("length").value;
    console.log(specialcharacters );
    var Numeric = document.getElementById("numeric").checked;
    console.log(Numeric);
    var specialcharacters = document.getElementById("specialCharacters").checked;
    console.log(specialcharacters);

    //Adds the required criteria to the passwordCriteria array
    if (lowerCase == true){
      lowercasealphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
      var passwordCriteria = lowercasealphabet.concat(passwordCriteria)
      console.log(passwordCriteria)

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
    
    //Adds check to make sure at least one of the criteria is selcted
    if (Numeric == false && lowerCase == false && uppercase == false && specialcharacters == false){
      window.alert("Please select at least one criteria option")
    } 

    //Randomly selects an element from the passwordCriteria array and addds it to the password array. This repeats equal to the value that the user inputted for the password length
    for (let i=0; i<lengthInput; i++) {
      var random = passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)];
      password = password.concat(random);
    }
    console.log(password.join(""));
    document.getElementById("finalPassword").innerHTML = password.join("");
    }
}
















// Add event listener to generate button
/* criteriaBtn.addEventListener("click", showForm); */

/* generateBtn.addEventListener("click", generatePassword); */

