let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.querySelector("form");
let textEmail = document.getElementById("textEmail");
let textPassword = document.getElementById("textPassword");
let btn = document.getElementById("btn");

form.addEventListener("submit", (e) => {
  if (email.value == "" && password.value == "") {
    textForm.textContent = "Você precisa preencher todos os campos!";
  } else if (
    validatorEmail(email.value) === true &&
    validatorPassword(password.value) === true
  ) {
    console.log(email.value);
    console.log(password.value);
    textEmail.textContent = "";
    textPassword.textContent = "";
  } else {
    console.log("Requisição não atendida");
  }

  e.preventDefault();
});

email.addEventListener("change", () => {
  if (validatorEmail(email.value) !== true) {
    textEmail.textContent = "Email inválido";
  } else {
    textEmail.textContent = "";
  }
});

password.addEventListener("change", () => {
  if (password.value.length < 6) {
    textPassword.textContent =
      "A senha deve ter no min 6 caracteres";
  } else {
    textPassword.textContent = "";
  }
});

function validatorEmail(email) {
  let emailPattern =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return emailPattern.test(email);
}