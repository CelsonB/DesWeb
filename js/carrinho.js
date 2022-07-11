const carrinho = JSON.parse(localStorage.getItem("carrinhoGame"));
var novoarray = [];
var qtde = 0;

const elements1 = {};
carrinho.map(function (game) {
  if (elements1[game.name]) {
    elements1[game.name].count++;
  } else {
    elements1[game.name] = game;
    elements1[game.name].count = 1;
  }
});

const elements = Object.values(elements1).map(function (game) {
  const divCardCartBody = document.createElement("div");
  const divCartCardSection = document.createElement("div");
  const h4 = document.createElement("h4");
  const img = document.createElement("img");
  const divCartCardCectionCartInfo = document.createElement("div");
  const p = document.createElement("p");
  const h5 = document.createElement("h5");
  const pPrice = document.createElement("p");
  const divCartCardSections = document.createElement("div");
  const h4QTDE = document.createElement("h4");
  const btmais = document.createElement("button");
  const btmenos = document.createElement("button");

  divCardCartBody.className = "card-cart-body";
  divCartCardSection.className = "cart-card-section";
  divCartCardCectionCartInfo.className = "cart-card-section cart-info";

  h4.className = "cart-subtitle";
  h4.textContent = game.name;

  img.src = game.image;
  img.alt = `Capa do Jogo ${game.name}`;
  img.className = "card-image";

  p.className = "cart-subtitle";
  p.textContent = game.description;

  h5.className = "cart-subtitle";

  pPrice.className = "price";
  pPrice.id = "preco";

  h4QTDE.className = "cart-subtitle";

  var count = carrinho.reduce((counter, obj) => {
    if (obj.name === game.name) counter += 1;
    return counter;
  }, 0);

  h4QTDE.textContent = "Qtde " + count;

  pPrice.textContent = game.price.toLocaleString("pt-br", {
    currency: "BRL",
    style: "currency",
  });

  btmais.textContent = "+";
  btmenos.textContent = "-";

  divCardCartBody.append(divCartCardSection);
  divCartCardSection.append(h4);
  divCartCardSection.append(img);
  divCardCartBody.append(divCartCardCectionCartInfo);
  divCartCardCectionCartInfo.append(p);
  divCartCardSections.append(h5);
  divCartCardSections.append(pPrice);
  divCartCardSections.append(h4QTDE);
  divCartCardSections.append(btmais);
  divCartCardSections.append(btmenos);
  divCardCartBody.append(divCartCardSections);

  btmenos.addEventListener("click", () => {
    count = remove(count);
    game.count = count;
    if (count > 0) {
      h4QTDE.textContent = "Qtde " + count;
      var preco = game.price * count;
      pPrice.textContent = preco.toLocaleString("pt-br", {
        currency: "BRL",
        style: "currency",
      });
    } else divCardCartBody.remove();

    atualizarValorTotal();
  });

  btmais.addEventListener("click", () => {
    count = add(count);
    game.count = count;
    h4QTDE.textContent = "Qtde " + count;
    var preco = game.price * count;
    pPrice.textContent = preco.toLocaleString("pt-br", {
      currency: "BRL",
      style: "currency",
    });

    atualizarValorTotal();
  });

  return divCardCartBody;
});
const finalizarCompra = document.createElement("button");
const cupomDesconto = document.createElement("button");
const divBotao = document.getElementById("botao");
const sectionCart = document.getElementById("cart-container");
const valorTotal = document.createElement("h3");
valorTotal.className = "cart-subtitle";

finalizarCompra.className = "card-button";
cupomDesconto.className = "card-button";
finalizarCompra.textContent = "Finalizar Compra";
cupomDesconto.textContent = "Inserir Cupom";

function atualizarValorTotal(desconto) {
  var total = Total();
  total = total - total * (desconto ? desconto : 0);
  valorTotal.textContent = "Valor total: R$ " + total.toFixed(2);
}

atualizarValorTotal();

divBotao.append(cupomDesconto);
divBotao.append(finalizarCompra);
divBotao.append(valorTotal);

cupomDesconto.addEventListener("click", () => {
  dialogCoupon.showModal();
});

finalizarCompra.addEventListener("click", () => {
  if (sessionStorage.getItem("registered")) {
    sectionCart.remove();
    openMessageDialog("Seu pedido de compra foi gerado com sucesso!");
    valorTotal.textContent = "";
    localStorage.clear();
  } else {
    openMessageDialog("Você precisa estar logado para finalizar a compra!");
  }
});

elements.map(function (element) {
  sectionCart.appendChild(element);
});

function add(count) {
  return count + 1;
}

function remove(qtde) {
  return qtde - 1;
}

function Total() {
  return Object.values(elements1).reduce(function (total, valor) {
    return total + valor.price * valor.count;
  }, 0);
}

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

const dialogCoupon = document.getElementById("dialog-coupon");
document
  .getElementById("dialog-coupon-close")
  .addEventListener("click", function () {
    const value = document.getElementById("dialog-coupon-value").value;
    if (value == "UTFPR") {
      atualizarValorTotal(0.15);
      openMessageDialog("Desconto Aplicado");
    }

    dialogCoupon.close();
  });
