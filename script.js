var nameError=document.getElementById('name-error');
var emailError=document.getElementById('email-error');
var phoneError=document.getElementById('phone-error');
var messageError=document.getElementById('message-error');
var submitError=document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;

    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;

}
function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;

    }
     if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'email is invalid';
        return false;
     }
     if(email == 'farseenmltr786@gmail.com'){
        emailError.innerHTML = 'you cannot use this email-id';
        return false;

     }
    emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;

}
function validatePhone(){
    console.log(phone);
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'phone no is required';
        return false;

    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'phone number should be 10 digits';
        return false;
    }
     if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML = 'only digits please';
        return false;
     }
    phoneError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;

}
function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 20;
    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + 'More characters  required';
        return false;

    }
   
    messageError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;

}
function validateForm(){
    if(!validateName() || !validateEmail() || !validateSubject() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'please fix error submit';
        setTimeout(function(){submitError.style.display = 'none';},3000);
        return false;

    }
}