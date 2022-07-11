function showError(ErrorElement, ErrorMessage) {
  document.querySelector("." + ErrorElement).classList.add("display-error");
  document.querySelector("." + ErrorElement).innerHTML = ErrorMessage;
}

function clearError() {
  let errors = document.querySelectorAll(".error");
  for (let error of errors) {
    error.classList.remove("display-error");
  }
}

const button = document.getElementById("button");

button.addEventListener("click", (event) => {
  clearError();
  event.preventDefault();
  const nome = document.getElementById("fname");
  const sobrenome = document.getElementById("lname");
  const msg = document.getElementById("subject");
  const email = document.getElementById("email");
  let hasError = false;

  if (
    email.value.indexOf("@") == -1 ||
    email.value.indexOf(".") == -1 ||
    email.value.indexOf(".") - email.value.indexOf("@") == 1
  ) {
    email.classList.add("errorInput");
    showError("email-error", "Você precisa adicionar um email valido");
    hasError = true;
  } else {
    email.classList.remove("errorInput");
  }

  if (nome.value == "") {
    nome.classList.add("errorInput");

    showError("fname-error", "Você precisa adicionar um nome");
    hasError = true;
  } else {
    nome.classList.remove("errorInput");
  }
  if (sobrenome.value == "") {
    sobrenome.classList.add("errorInput");
    showError("lname-error", "Você precisa adicionar um sobrenome");
    hasError = true;
  } else {
    sobrenome.classList.remove("errorInput");
  }
  if (msg.value == "") {
    msg.classList.add("errorInput");
    showError("subject-error", "Você precisa adicionar uma mensagem");
    hasError = true;
  } else {
    msg.classList.remove("errorInput");
  }

  if (!hasError) {
    openMessageDialog("Sua mensagem foi enviada com sucesso!");
  }
});

const dialogMessage = document.getElementById("dialog-message");
function openMessageDialog(message) {
  const element = document.getElementById("dialog-message-text");
  element.textContent = message;
  dialogMessage.showModal();
}
document
  .getElementById("dialog-message-close")
  .addEventListener("click", function () {
    dialogMessage.close();
  });

function validar(campo) {
  const error = document.getElementById("erro");
  if (nome.value == "") {
    nome.classList.add("errorInput");
    error.textContent = "necessario um nome para o usuario";
  } else {
    nome.classList.remove("errorInput");
  }
}
