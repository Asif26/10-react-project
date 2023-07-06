//retriving HTML elements from Dom
const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const cPassword = document.getElementById("c-password")


// Function to update class an show errror meassage
function showError(input, message){
    // Get the parent element of the input field (.form-control)
    const formControl = input.parentElement;
    //Overide the class - add error class
    formControl.className = 'form-control error';
    //Get the small element for the error mesage
    const small = formControl.querySelector('small');
    // Overide the text for small element using the input message
    small.innerText = message;

}

// Function to update class for success
function showSuccess(input){
     // Get the parent element of the input field (.form-control)
     const formControl = input.parentElement;
     //Overide the class - add success class
     formControl.className = 'form-control success';

}
// Event listnera
 // Create event listner sumbit button
  form.addEventListener('submit', (e)=>{
    //stop refresh page on submit
    e.preventDefault()


    //Check to see required fiels are empty
    //check if user input is empty

    if(username.value === ''){
        showError(username, "Username is required")

    }else{
        showSuccess(username);
    }
    // check if email input field is empty
    if(email.value === ''){
        showError(email, "email is required")

    }else{
        showSuccess(email);
    }
    // check if password input field is empty
    if(password.value === ''){
        showError(password, "Password is required")

    }else{
        showSuccess(password);
    }
    // check if Confrim input field is empty
    if(cPassword.value === ''){
        showError(cPassword, "Confirm is required")

    }else{
        showSuccess(cPassword);
    }


})

console.log(cPassword)