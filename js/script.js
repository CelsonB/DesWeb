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

function clearErrorInput() {
  let errors = document.querySelectorAll(".inputError");
  for (let error of errors) {
    error.classList.remove("errorInput");
  }
}

const button = document.getElementById("button");

button.addEventListener("click", (event) => {
  event.preventDefault();
  clearError();
  clearErrorInput();

  const email = document.getElementById("email");
  const cpf = document.getElementById("cpf");
  const nome = document.getElementById("nome");
  const numero = document.getElementById("numero");
  const senha = document.getElementById("senha");
  const cep = document.getElementById("cep");
  const logradouro = document.getElementById("logradouro");
  const localidade = document.getElementById("localidade");
  const bairro = document.getElementById("bairro");
  const uf = document.getElementById("uf");
  const idade = document.getElementById("date");
  let hasError = false;

  if (ValidarIdade(idade.value, 18) == true) {
  } else {
    idade.classList.add("errorInput");
    showError("date-error", "Você precisa ser maior de 18 anos");
    hasError = true;
  }

  if (cep.value == "") {
    cep.classList.add("errorInput");
    document.getElementById("cep").readOnly = false;
    document.getElementById("logradouro").readOnly = false;
    document.getElementById("localidade").readOnly = false;
    document.getElementById("bairro").readOnly = false;
    document.getElementById("uf").readOnly = false;
    showError("cep-error", "Você precisa adicionar um cep valido");
    hasError = true;
  }
  if (logradouro.value == "") {
    logradouro.classList.add("errorInput");
    showError("logradouro-error", "Você precisa adicionar uma rua valida");
    hasError = true;
  }

  if (localidade.value == "") {
    localidade.classList.add("errorInput");
    showError("localidade-error", "Você precisa adicionar uma cidade");
    hasError = true;
  }
  if (bairro.value == "") {
    bairro.classList.add("errorInput");
    showError("bairro-error", "Você precisa adicionar um bairro");
    hasError = true;
  }
  if (uf.value == "") {
    uf.classList.add("errorInput");
    showError("uf-error", "Você precisa adicionar uma unidade federativa");
    hasError = true;
  }

  if (TestaCPF(cpf.value) == true) {
    cpf.classList.remove("errorInput");
  } else {
    cpf.classList.add("errorInput");
    showError("cpf-error", "Você precisa adicionar um cpf valido");
    hasError = true;
  }

  if (email.value == "") {
    email.classList.add("errorInput");
    showError("email-error", "Você precisa adicionar um email valido");
    hasError = true;
  }

  var textLength = senha.value.length;
  if (senha.value == "" || textLength < 8) {
    showError(
      "password-error",
      "Você precisa colocar uma senha maior que 8 digitos"
    );
    senha.classList.add("errorInput");
    hasError = true;
  }

  if (
    email.value.indexOf("@") == -1 ||
    email.value.indexOf(".") == -1 ||
    email.value.indexOf(".") - email.value.indexOf("@") == 1
  ) {
    showError("email-error", "Você precisa adicionar um email valido");
    email.classList.add("errorInput");
    hasError = true;
  }

  if (nome.value == "") {
    showError("fname-error", "Você precisa de um nome");
    nome.classList.add("errorInput");
    hasError = true;
  }

  if (numero.value == "") {
    showError("number-error", "Você precisa adicionar o numero da casa");
    numero.classList.add("errorInput");
    hasError = true;
  }

  if (!hasError) {
    openMessageDialog("Cadastro realizado com sucesso!");
    sessionStorage.setItem("registered", "true");
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
    window.location.href = "index.html";
  });

function TestaCPF(strCPF) {
  var Soma;
  var Resto;
  Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i = 1; i <= 9; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(strCPF.substring(9, 10))) return false;

  Soma = 0;
  for (i = 1; i <= 10; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(strCPF.substring(10, 11))) return false;
  return true;
}

function ValidarIdade(dob, age) {
  var my_dob = new Date(dob);
  var today = new Date();
  var max_dob = new Date(
    today.getFullYear() - age,
    today.getMonth(),
    today.getDate()
  );
  return max_dob.getTime() > my_dob.getTime();
}
