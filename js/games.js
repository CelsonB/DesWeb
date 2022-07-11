const carrinho = [];
const games = [
  {
    name: "Among Us",
    price: 10.89,
    image: "imagens/among.jpg",
    date: 2015,
    platform: "PC, Xbox, PlayStation",
    description:
      "Um jogo de trabalho em equipe e trairagem online ou em rede local para 4 a 15 jogadores... no espaço!",
  },
  {
    name: "Dark Souls Remastered",
    price: 129.9,
    image: "imagens/ds.jpg",
    date: 2022,
    platform: "PC, Xbox, PlayStation",
    description:
      "Mas então, fez-se o fogo. Experimente novamente o jogo aclamado pela crítica e definidor de gênero que foi o início tudo. Belamente remasterizado, volte a Lordran com detalhes em alta definição a 60fps",
  },
  {
    name: "Elden Ring",
    price: 249.99,
    image: "imagens/elden.jpg",
    date: 2021,
    platform: "PC, Xbox, PlayStation",
    description:
      "Levante-se, Maculado, e seja guiado pela graça para portar o poder do Anel Prístino e se tornar um Lorde Prístino nas Terras Intermédias.",
  },
  {
    name: "Euro Truck Simulator",
    price: 39.99,
    image: "imagens/euro.jpg",
    date: 2013,
    platform: "PC",
    description: "Viaje através da Europa como o rei da estrada!",
  },
  {
    name: "GTA The Trilogy",
    price: 319.9,
    image: "imagens/gta3.jpg",
    date: 2021,
    platform: "PC, Xbox, PlayStation",
    description:
      "Grand Theft Auto The Trilogy para PC oferece aos jogadores a opção de explorar o gigantesco e premiado mundo de Los Santos e Blaine County em resoluções de até 4K e além, assim como a chance de experimentar o jogo rodando a 60 FPS",
  },
  {
    name: "Life Is Strange",
    price: 36.9,
    image: "imagens/ls.jpg",
    date: 2015,
    platform: "PC, Xbox, PlayStation",
    description:
      "Life is Strange é uma premiada aventura em episódios, aclamada pela crítica, que permite ao jogador voltar no tempo e alterar passado, presente e futuro",
  },
  {
    name: "Red Dead Redemption 2",
    price: 240.99,
    image: "imagens/rdd.jpg",
    date: 2019,
    platform: "PC, Xbox, PlayStation",
    description:
      "Red Dead Redemption 2, a épica aventura de mundo aberto da Rockstar Games aclamada pela crítica e o jogo mais bem avaliado desta geração de consoles, agora chega aprimorado para PC com conteúdos inéditos no Modo História, melhorias visuais e muito mais.",
  },
  {
    name: "Stardew Valley",
    price: 24.99,
    image: "imagens/stardew.jpg",
    date: 2020,
    platform: "PC, PlayStation",
    description:
      "Você herdou a antiga fazenda do seu avô, em Stardew Valley. Com ferramentas de segunda-mão e algumas moedas, você parte para dar início a sua nova vida. Será que você vai aprender a viver da terra, a transformar esse matagal em um próspero lar?",
  },
  {
    name: "The Forest",
    price: 37.99,
    image: "imagens/theforest.jpg",
    date: 2014,
    platform: "PC, Xbox, PlayStation",
    description:
      "Como o único sobrevivente de um acidente de avião de passageiros, você se encontra em uma floresta misteriosa lutando para se manter vivo contra uma sociedade de mutantes canibais. Construa, explore, sobreviva neste aterrorizante simulador de terror de sobrevivência em primeira pessoa.",
  },
  {
    name: "The Last Of Us 2",
    price: 119.99,
    image: "imagens/tlou.png",
    date: 2020,
    platform: "PlayStation",
    description:
      "Um mundo belo, mas perigoso. Embarque na jornada de Ellie, levando-a das montanhas e florestas tranquilas de Jackson até as ruínas exuberantes e cobertas pela vegetação da área metropolitana de Seattle. Encontre novos grupos de sobreviventes, ambientes desconhecidos e traiçoeiros e evoluções terríveis dos infectados",
  },
  {
    name: "The Sims 4",
    price: 159.9,
    image: "imagens/sims4.webp",
    date: 2014,
    platform: "PC, Xbox",
    description:
      "Curta o poder de criar e controlar pessoas num mundo virtual onde não há regras. Seja poderoso e livre, divirta-se e jogue com a vida!",
  },
  {
    name: "Unpacking",
    price: 59.9,
    image: "imagens/unp.jpg",
    date: 2021,
    platform: "PC, Nintendo Switch",
    description:
      "Unpacking é um jogo relaxante sobre a experiência familiar de tirar pertences das caixas para arrumá-los em um novo lar. Meio quebra-cabeças de blocos, meio decoração de interiores, o jogo convida você a montar um lar aconchegante enquanto descobre pistas sobre a vida que está saindo das caixas.",
  },
];

let order = "AF";

function sortAlphabetic(a, b) {
  return a.name.localeCompare(b.name);
}

function sortPriceLower(a, b) {
  return a.price - b.price;
}

function sortPriceHigher(a, b) {
  return b.price - a.price;
}

function adicionarGame(objetoGames) {
  carrinho.push(objetoGames);
  localStorage.setItem("carrinhoGame", JSON.stringify(carrinho));
  openMessageDialog(
    "O Jogo " + objetoGames.name + " foi adicionado no carrinho"
  );
}

function openGameInfoDialog(game) {
  const dialog = document.getElementById("game-info");
  const div = document.createElement("div");
  div.id = "dialog-content";
  const img = document.createElement("img");
  img.src = game.image;
  div.append(img);
  const info = document.createElement("div");
  info.id = "dialog-info";
  const name = document.createElement("h3");
  name.textContent = game.name;
  info.append(name);
  const date = document.createElement("h4");
  date.textContent = `Lançamento: ${game.date}`;
  info.append(date);
  const platform = document.createElement("h4");
  platform.textContent = `Plataformas: ${game.platform}`;
  info.append(platform);
  const description = document.createElement("p");
  description.textContent = game.description;
  info.append(description);
  const buttons = document.createElement("div");
  buttons.className = "dialog-buttons";
  const close = document.createElement("button");
  close.className = "card-button";
  close.textContent = "Fechar";
  close.addEventListener("click", function () {
    dialog.close();
  });
  buttons.append(close);
  const add = document.createElement("button");
  add.textContent = "Add";
  add.className = "card-button";
  add.addEventListener("click", () => {
    adicionarGame(game);
  });
  buttons.append(add);
  info.append(buttons);
  div.append(info);
  dialog.replaceChildren(div);
  dialog.showModal();
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

function render(order) {
  const orderedGames = [...games];
  switch (order) {
    case "PD":
      orderedGames.sort(sortPriceHigher);
      break;
    case "PC":
      orderedGames.sort(sortPriceLower);
      break;
    default:
      orderedGames.sort(sortAlphabetic);
      break;
  }

  const elements = orderedGames.map(function (game) {
    const div = document.createElement("div");
    div.className = "card-body";
    const h4 = document.createElement("h4");
    h4.textContent = game.name;
    h4.addEventListener("click", openGameInfoDialog.bind(this, game));
    div.append(h4);
    const img = document.createElement("img");
    img.src = game.image;
    img.alt = `Capa do Jogo ${game.name}`;
    img.className = "card-image";
    img.addEventListener("click", openGameInfoDialog.bind(this, game));
    div.append(img);
    const p = document.createElement("p");
    p.className = "price";
    p.textContent = game.price.toLocaleString("pt-br", {
      currency: "BRL",
      style: "currency",
    });
    div.append(p);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "card-button";
    const a = document.createElement("a");
    a.textContent = "Adicionar";
    a.addEventListener("click", () => {
      adicionarGame(game);
    });
    button.append(a);
    div.append(button);
    return div;
  });

  const rows = [];

  for (let i = 0; i < elements.length; i += 4) {
    rows.push(elements.slice(i, i + 4));
  }

  const container = document.getElementById("games");
  const sections = [];

  rows.forEach(function (row) {
    const section = document.createElement("section");
    section.className = "card-container";
    row.forEach(function (cell) {
      section.append(cell);
    });
    sections.push(section);
  });
  container.replaceChildren(...sections);
}

document
  .getElementById("select-order")
  .addEventListener("change", function (event) {
    const value = event.target.value;
    render(value);
  });
render("AF");
