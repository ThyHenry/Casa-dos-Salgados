let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.querySelector("form");
let textEmail = document.getElementById("textEmail");
let textPassword = document.getElementById("textPassword");

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

email.addEventListener("keyup", () => {
  if (validatorEmail(email.value) !== true) {
    textEmail.textContent = "O email deve ser Ex: nome@gmail.com";
  } else {
    textEmail.textContent = "";
  }
});

password.addEventListener("keyup", () => {
  if (validatorPassword(password.value) !== true) {
    textPassword.textContent =
      "A senha deve ter no min 6 caracteres, um número e um caractere especial";
  } else {
    textPassword.textContent = "";
  }
});

function validatorEmail(email) {
  let emailPattern =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return emailPattern.test(email);
}

function validatorPassword(password) {
  let passwordPattern =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return passwordPattern.test(password);
}