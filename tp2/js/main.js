


const form = document.querySelector('form');
const succesMessage = document.querySelector('.success-message');
const firstNameInput = document.querySelector('input[name= "firstname"]');
const emailInput = document.querySelector('input[name = "email"]');
const phoneInput = document.querySelector('input[name="phone"]');

let isFormValid = false ;
let isValidationOn = false ;

const inputs = [firstNameInput,emailInput];


// reset inputs if i already taped in
const resetInputElm = (elm)=>{
    elm.classList.remove("firstname");
    elm.nextElementSibling.classList.add("hidden");
};

//  if input invalid so remove error
const invalidateInputElm =(elm) =>{
    elm.classList.add("firstname"); // if invalid
    elm.nextElementSibling.classList.remove("hidden");

};

// validation for the inputs 
const validateInputs = () => {

    if(!isValidationOn) return;

    // resetInputElm(firstNameInput);
    // resetInputElm(emailInput);

    inputs.forEach(resetInputElm);

    isFormValid = true ;

    if(!firstNameInput.value){
        invalidateInputElm(firstNameInput);
        isFormValid = false ;
    }

    if(! isValidEmail(emailInput.value)){
        invalidateInputElm(emailInput);
        isFormValid = false ;
    }

    if(! isValidPhone(phoneInput.value)){
        invalidateInputElm(phoneInput);
        isFormValid = false;
    }



};


form.addEventListener("submit" ,(e)=> {

   // e.preventdefault(); // not refrech the page
    e.preventDefault();
    isValidationOn = true ;
    validateInputs();

    if(isFormValid){
        form.remove();
      succesMessage.classList.remove("hidden");
        alert('thnks bro');
    }
});


// to catch errors in every input
inputs.forEach((input) =>{
input.addEventListener("input",(e)=>{
    e.preventDefault();
    validateInputs();

});

});


const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  const isValidPhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(phone).toLowerCase());
  };