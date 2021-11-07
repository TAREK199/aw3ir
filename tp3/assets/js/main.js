
$(document).ready(() => {


   // console.log('readyyyy');
 //   alert('thks for using me');

    let firstName = $("#firstname");
    let lastName = $("#lastname");
    let birthDay = $("#birthDay");
    let email = $("#email");
    let address = $("#address"); 
    let phone = $("#phone");




    
    $("#submit").on("click",(e) =>{


        verifyInput = (firstName, lastName,birthDay, email,address ,phone) => {
            return firstName === "" | lastName === "" | birthDay === "" | email === "" | address === "" | phone === "" ;
        }
        
       let verify = (verifyInput(firstName.val(), lastName.val(),birthDay.val(),email.val(),address.val(),phone.val())) ? false : true;

       console.log("verify is "+ verify);

  // let verify = true ;

  let dataModel = $('#all-info');


    if(verify) {
        $("#myModal").modal("show");
        dataModel.text("your name is : "+ firstName.val()+" "+lastName.val() + " your birthday is : "+birthDay.val() +" your email is : "+email.val()+" your address is : "+address.val());
     }else{

        alert("please enter your infos !");
     }
 
    });
    }); 





// let isFormValid = false ;
// let isValidationOn = false ;

// const inputs = [firstNameInput,lastNameInput,emailInput,phoneInput];


// // reset inputs if i already taped in
// const resetInputElm = (elm)=>{
//     elm.classList.remove("invalid");
//     elm.nextElementSibling.classList.add("hidden");
// };

// //  if input invalid so remove error
// const invalidateInputElm =(elm) =>{
//     elm.classList.add("invalid"); // if invalid
//     elm.nextElementSibling.classList.remove("hidden");
// };

// // for check the valiaton of the inputs
// const validateInputs = () => {

//     if(!isValidationOn) return;

//     // resetInputElm(firstNameInput);
//     // resetInputElm(emailInput);

//     inputs.forEach(resetInputElm);
//     isFormValid = true ;

//     if(!firstNameInput.value || firstNameInput.value.length >= 20){
//         invalidateInputElm(firstNameInput);
//         isFormValid = false ;

//         console.log(firstNameInput.value);
//     }

//     if(!lastNameInput.value || lastNameInput.value.length >= 20){
//          invalidateInputElm(lastNameInput);
//          isFormValid = false ;
//     }
   
//     if(! isValidEmail(emailInput.value)){
//         invalidateInputElm(emailInput);
//         isFormValid = false ;
//     }

//     if(! isValidPhone(phoneInput.value)){
//         invalidateInputElm(phoneInput);
//         isFormValid = false;
//     }



// };


// form.addEventListener("submit" ,(e)=> {

//    // e.preventdefault(); // not refrech the page
//     e.preventDefault();
//     isValidationOn = true ;
//     validateInputs();

//     if(isFormValid){
//         form.remove();
//       succesMessage.classList.remove("hidden");
//         alert('thnks bro');
//     }
// });
 
// // to catch errors in every input
// inputs.forEach((input) =>{
// input.addEventListener("input",(e)=>{
//     e.preventDefault();
//     validateInputs();
// });
// });


// const isValidEmail = (email) => {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
//   };
  
//   const isValidPhone = (phone) => {
//     const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
//     return re.test(String(phone).toLowerCase());
//   };