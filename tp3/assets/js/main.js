

const form = document.querySelector('form');
const succesMessage = document.querySelector('.success-message');
const firstNameInput = document.querySelector('input[name= "firstname"]');
const lastNameInput = document.querySelector('input[name= "lastname"]');
const emailInput = document.querySelector('input[name = "email"]');
const birthInput = document.querySelector('input[name = "birthday"]');
const phoneInput = document.querySelector('input[name="phone"]');
const adressInput = document.querySelector('input[name="address"]');
const modal = document.getElementById('myModal');
let dataModel =  document.getElementById('all-info');

let isFormValid = false ;
let isValidationOn = false ;

const inputs = [firstNameInput,lastNameInput,emailInput,birthInput,phoneInput,adressInput];


const resetInputElm = (elm)=>{
    elm.classList.remove("invalid");
    elm.nextElementSibling.classList.add("hidden");
};

const invalidateInputElm =(elm) =>{
    elm.classList.add("invalid"); 
    elm.nextElementSibling.classList.remove("hidden");
};

const validateInputs = () => {

    if(!isValidationOn) return;

    inputs.forEach(resetInputElm);
    isFormValid = true ;

    if(!firstNameInput.value || firstNameInput.value.length >= 20){
        invalidateInputElm(firstNameInput);
        isFormValid = false ;

        console.log(firstNameInput.value);
    }

    if(!lastNameInput.value || lastNameInput.value.length >= 20){
         invalidateInputElm(lastNameInput);
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

    if(!adressInput.value){
        invalidateInputElm(adressInput);
        isFormValid = false;
    }

    if(!birthInput.value){
        invalidateInputElm(birthInput);
        isFormValid = false;
    }

};


form.addEventListener("submit" ,(e)=> {

   // e.preventdefault(); // not refrech the page
    e.preventDefault();
    isValidationOn = true ;
    validateInputs();

    if(!isFormValid){

      //  var myModal = new bootstrap.Modal(document.getElementById('myModal'));

     // $("#myModal").modal("show");

      //  alert('thnks bro');
       // myModal.show();
      //  alert('thnks bro');


       // let dataModel = $('#all-info');
     //   modal.modal("show");
     //   dataModel.text("your name is : "+ firstName.value+" "+lastName.value + " your birthday is : "+birthDay.value +" your email is : "+email.value+" your address is : "+address.value);

        // form.remove();
        // succesMessage.classList.remove("hidden");
        // alert('thnks bro');
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

    // const isValiddate = (date) => {
    // const re = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
    // return re.test(String(date).toLowerCase());rn re.test(String(date).toLowerCase());
    // }







// $(document).ready(() => {


//    // console.log('readyyyy');
//  //   alert('thks for using me');

//     let firstName = $("#firstname");
//     let lastName = $("#lastname");
//     let birthDay = $("#birthDay");
//     let email = $("#email");
//     let address = $("#address"); 
//     let phone = $("#phone");

//     $("#submit").on("click",(e) =>{


//         verifyInput = (firstName, lastName,birthDay, email,address ,phone) => {
//             return firstName === "" | lastName === "" | birthDay === "" | email === "" | address === "" | phone === "" ;
//         }
        
//        let verify = (verifyInput(firstName.val(), lastName.val(),birthDay.val(),email.val(),address.val(),phone.val())) ? false : true;

//        console.log("verify is "+ verify);

//   // let verify = true ;

//   let dataModel = $('#all-info');


//     if(verify) {
//         $("#myModal").modal("show");
//         dataModel.text("your name is : "+ firstName.val()+" "+lastName.val() + " your birthday is : "+birthDay.val() +" your email is : "+email.val()+" your address is : "+address.val());
//      }else{

//         alert("please enter your infos !");
//      }
 
//     });
//     }); 




