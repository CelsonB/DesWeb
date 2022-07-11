const cep = document.querySelector("#cep");

const showData = (result) => {
  for (const campo in result) {
    if (document.querySelector("#" + campo)) {
      if (campo != "cep") {
        document.querySelector("#" + campo).value = result[campo];
        document.getElementById(campo).readOnly = true;
      }
    }
  }
};

cep.addEventListener("blur", (e) => {
  let search = cep.value.replace("-", "");

  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };
  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then((response) => {
      response.json().then((data) => showData(data));
    })
    .catch((e) => console.log("deu erro" + e, message));
});
