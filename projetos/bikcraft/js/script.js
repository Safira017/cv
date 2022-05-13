//Ativando links do menu
const links = document.querySelectorAll(".header-menu a");

links.forEach(function (link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
});

//Ativando itens do orçamento via parâmetros da URL
const parametros = new URLSearchParams(location.search);

parametros.forEach(function (parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
});

//Perguntas Frequentes
const perguntas = document.querySelectorAll(".perguntas button");

perguntas.forEach(function (pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
});

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

//Galeria de Bicicletas
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

galeria.forEach(function (img) {
  img.addEventListener("click", trocarImagem);
});

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width:1000px)").matches; //trues ou false
  if (media) {
    galeriaContainer.prepend(img);
  }
}

//Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
