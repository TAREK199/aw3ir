

const form = document.getElementById('form'); 
const firstName = document.getElementById('inputFirstName');
const lastName = document.getElementById('inputLastName');
const date = document.getElementById('date');
const email = document.getElementById('email');
const phone = document.getElementById('phoneNumber'); 


form.addEventListener('submit',(e)=>{

    e.preventDefault();
    validite();
});

function validate(){


    // get values from input 

    firstNameValue = firstName.value.trim();
    lastNameValue = lastName.value.trim();
    emailValue = email.value.trim();
    phoneValue = phone.value.trim();

    if(firstNameValue ===''){
        firstName.setCustomValidity('Ener your name pls');
    }if (firstNameValue.leng >= 20){
        firstName.setCustomValidity('please Enter a Real Name');
    }
    else{
        firstName.setCustomValidity('');
    }

    if(latNameValue ===''){
        lastName.setCustomValidity('Ener your name pls');
    }if (firstNameValue.leng >= 20){
        lastName.setCustomValidity('please Enter a Real Name');
    }
    else{
        lastName.setCustomValidity('');
    }

    if(phoneValue ===''){
        phone.setCustomValidity('Ener your phonepls');
    }if (firstNameValue.leng >= 10){
        phone.setCustomValidity('please enter a valid phone');
    }
    else{
        phone.setCustomValidity('');
    }
}


// function setErrorFor(input) {
// 	// const formControl = input.parentElement;
// 	// //const small = formControl.querySelector('small');
// 	// formControl.className = 'form-control error';
// 	// //small.innerText = message;

//     textbox.setCustomValidity('please enter your name ');
// }

// function setSuccessFor(input) {
// 	// const formControl = input.parentElement;
// 	// formControl.className = 'form-control success';
//     textbox.setCustomValidity('Required email address');

// }
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}




