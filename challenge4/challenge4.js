const passForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const pass = document.querySelector('.pass')
const passConfirm = document.querySelector('.passConfirm')
const username = document.querySelector('.username')


passForm.addEventListener('submit', checkForm);


function checkForm(e){ 
    e.preventDefault();

   if(passForm.username.value == ' ' || passForm.pass.value == ' ' || passForm.passConfirm.value == ' ') {
      alert("Please fill in all your fields");
      return false; 
    }
    if(passForm.pass.value !== passForm.passConfirm.value) {
        alert("Your passwords MUST match")
      return false;
    } else {
      
    }
      return true;
        
};
