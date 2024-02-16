

const fill = document.querySelectorAll(".text-input");
const btn = document.getElementById("btn");

const firstInvalid = document.getElementById("first-invalid")
const first = document.getElementById("first");
const firstInputStyle = document.getElementById("first-input");

const lastInvalid  = document.getElementById("last-invalid");
const last = document.getElementById("last");
const lastInputStyle = document.getElementById("last-input")

const EmailInvalid  = document.getElementById("email-invalid");
const email = document.getElementById("email");
const emailInputStyle = document.getElementById("email-input")

const passwordInvalid  = document.getElementById("password-invalid");
const password = document.getElementById("password");
const passwordInputStyle = document.getElementById("password-input")




// empty fill 
function fillEmpty(){
    const firstInput = firstInputStyle.value;
    const lastInput = lastInputStyle.value;
    const emailInput = emailInputStyle.value;
    const passwordInput = passwordInputStyle.value;

    if (firstInput === "" && lastInput === "" && emailInput === "" && passwordInput === ""){
        fill.forEach(function(empty){
        empty.style.border = "2px solid hsl(0, 100%, 74%)";
        empty.parentElement.classList.add("error")
       
    })

         firstInvalid.innerText = "Cannot be empty";
         lastInvalid.innerText = "Cannot be empty";
         EmailInvalid.innerText = "Cannot be empty";
         passwordInvalid.innerText = "Cannot be empty";
         }else{
            passwordInvalid.innerText = "";
            EmailInvalid.innerText = "";
            lastInvalid.innerText = ""
            firstInvalid.innerText = "";
            fill.forEach(function(empty){
                empty.style.border = "";
                empty.parentElement.classList.remove("error");
            })
            alert("Success");
}               
}
//  name invalid 
function validateFirstName() {
    const firstInput =  firstInputStyle.value;
    const name = firstInput.trim();
    if (/\d/.test(name)){
        firstInputStyle.style.border = "2px solid hsl(0, 100%, 74%)"
                first.innerText = "Look like this is not a name"
                
                firstInputStyle.parentElement.classList.add("error");
                passwordInvalid.innerText = "";
                EmailInvalid.innerText = "";
                lastInvalid.innerText = ""
                firstInvalid.innerText = "";
                
            }else{
                firstInputStyle.parentElement.classList.remove("error");
                
                first.innerText = "";
                firstInputStyle.style.border = "";
            }
    }
//  last name invalid 
function validateLastName() {
    const lastInput =  lastInputStyle.value;
    const nameLast = lastInput.trim();
    if (/\d/.test(nameLast)){
        lastInputStyle.style.border = "2px solid hsl(0, 100%, 74%)"
                last.innerText = "Look like this is not a name"
                
                lastInputStyle.parentElement.classList.add("error");
                passwordInvalid.innerText = "";
                EmailInvalid.innerText = "";
                lastInvalid.innerText = ""
                firstInvalid.innerText = "";
            }else{
                lastInputStyle.parentElement.classList.remove("error");
                last.innerText = "";
                lastInputStyle.style.border = "";
            }
    }

//  email invalid 
function emailInvalid() {
    const emailInput =  emailInputStyle.value;
    const emailWrite = emailInput.trim();
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(emailWrite)){
        email.innerText = "";
        emailInputStyle.parentElement.classList.remove("error");
                emailInputStyle.style.border = "";
                console.log("error")
            }else{
                emailInputStyle.parentElement.classList.add("error");
                emailInputStyle.style.border = "2px solid hsl(0, 100%, 74%)"
                email.innerText = "Look like this is not an email"
                passwordInvalid.innerText = "";
                EmailInvalid.innerText = "";
                lastInvalid.innerText = ""
                firstInvalid.innerText = "";
            }
    }
// password invalid 
function passwordWrong(){
    const passwordInput = passwordInputStyle.value;
    const passwordType = passwordInput.trim();
    var regex = /.{8,}/;

    if(!regex.test(passwordType)){
        passwordInputStyle.parentElement.classList.add("error");
        passwordInputStyle.style.border = "2px solid hsl(0, 100%, 74%)"
        password.innerText = "password must be 8 digits"
        passwordInvalid.innerText = "";
        EmailInvalid.innerText = "";
        lastInvalid.innerText = ""
        firstInvalid.innerText = "";
    }else{
        password.innerText = "";
        passwordInputStyle.parentElement.classList.remove("error");
                passwordInputStyle.style.border = ""; 
    }
}










