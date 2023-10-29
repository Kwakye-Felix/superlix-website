
//  referencing the id 

const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const password= document.getElementById("password")
const password2 = document.getElementById("password2")


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();

})

function checkInput(){

    //  getting the values of the input
    const usernameValue = username.value.trim ();
    const emailValue = email.value.trim ();
    const passwordValue = password.value.trim ();
    const password2Value= password2.value.trim ();


    //   Username validation
    if(usernameValue === ''){
        setErrorFor(username, "username can not be blank");
    }

    else if( usernameValue.length < 6){
        setErrorFor(username, "username must be at lest 6 characters long");

    }

    else{
        setSuccessFor(username);
    }

    // Email validation

    if ( emailValue === ""){
        setErrorFor(email, ' Email can not be blank')
    }
    

    else{
        setSuccessFor(email)
    }

    //   Pasword validation
    if(passwordValue === ""){
        setErrorFor(password, 'The password can not be blank')
    }

    else if (passwordValue.length <8){
        setErrorFor(password, " Password must be at least  8 chracters long")
    }

    else {
        setSuccessFor(password)
    }

    
    //     confirm password validation
    if( password2Value === ""){
        setErrorFor(password2, "Confirm password can not be blank")
    }

    else if (passwordValue !== password2Value){
        setErrorFor(password2, " The password does not match")
    }

    else{
        setSuccessFor(password2)
    }  
    
}

function setErrorFor( input, message){
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');
       // Adding error class
    formControl.className = 'form-control error';
    //  adding error message inside samll

    small.innerText = message;

}


function setSuccessFor(input){
    const formControl = input.parentElement; //.form-control

      // Adding error class
    formControl.className = 'form-control success' ;




}


