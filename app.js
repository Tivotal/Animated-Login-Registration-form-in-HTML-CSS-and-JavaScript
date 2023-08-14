/* Created by Tivotal */

let loginForm = document.querySelector("form.login");
let loginBtn = document.querySelector("label.login");
let signupForm = document.querySelector("form.signup");
let signupBtn = document.querySelector("label.signup");
let title = document.querySelector(".title-text .login");
let signUpLink = document.querySelector(".signup-link a");

signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  title.style.marginLeft = "-50%";
};

loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  title.style.marginLeft = "0%";
};

signUpLink.onclick = () => {
  signupBtn.click();
  return false;
};
