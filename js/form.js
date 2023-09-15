// Form -----> 
const forms = document.querySelector('.container-forms'),
  home = document.querySelector('.home'),
  pwdShowHide = document.querySelectorAll('.fa-eye-slash'),
  links = document.querySelectorAll('.links');
  
pwdShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwField = eyeIcon.parentElement.parentElement.querySelectorAll('.password');
  pwField.forEach(password => {
  if(password.type === "password"){
    password.type = "text";
    eyeIcon.classList.replace('fa-eye-slash', 'fa-eye');
    return;
  }
  password.type = "password";
  eyeIcon.classList.replace('fa-eye', 'fa-eye-slash');
  return;
})
})
})  
  
links.forEach(link => {
link.addEventListener("click", e => {
  e.preventDefault();
  forms.classList.toggle("show-signup");
})
})
// ----- <> ----- //

// Loader ---->
var scrollY = window.scrollY;
window.onscroll = function() {
  window.scrollTo(0, scrollY);
};
setTimeout(function() {
  window.onscroll = null;
}, 2000);