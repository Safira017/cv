/*perguntas frequentes*/
const perguntas = document.querySelectorAll(".perguntas button");

perguntas.forEach(function (pergunta) {
  pergunta.addEventListener("click", mostrarResposta);
});

function mostrarResposta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

/*galeria*/
const fotos = document.querySelectorAll(".galeria img");
const containerFotos = document.querySelector(".galeria");

fotos.forEach(function (foto) {
  foto.addEventListener("click", trocarFoto);
});

function trocarFoto(event) {
  fotoAtual = event.currentTarget;
  const limitador_troca = matchMedia("(min-width: 400px)").matches;
  if (limitador_troca) {
    containerFotos.prepend(fotoAtual);
  }
}

/*link do menu selecionado de acordo com a página*/
const links = document.querySelectorAll(".header-menu a");

links.forEach(function (link) {
  const url_pagina = location.href;
  const href_link = link.href;
  if (url_pagina.includes(href_link)) {
    link.classList.add("ativo");
  }
});

/*pegando os parametros da URL para serem checados na página de comprar*/
const parametros = new URLSearchParams(location.search); //ps5, ps4, xboxone ou xboxseriesx

parametros.forEach(function (parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
});

/* Simple Anime inicialização */
if (window.SimpleAnime) {
  new SimpleAnime();
}
