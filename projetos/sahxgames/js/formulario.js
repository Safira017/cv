const formulario = document.querySelector("form");

formulario.addEventListener("submit", enviarFormulario);

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerHTML = "Enviando...";
  const dadosForm = new FormData(formulario);
  // console.log(dadosForm.get("email"));
  fetch("./enviar.php", {
    method: "POST",
    body: dadosForm,
  }).then(formularioEnviado);
}

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p class='cor-0 font-2-s' style='grid-column: 1/-1; padding: 1rem; background: var(--cor-12); border-radius: 4px';><span style='color: green';>Sucesso!</span> Sua mensagem ou solicitação foi enviada para o nosso servidor. <br><span class='cor-5'>E responderemos em até 48 horas!</span></p>";
  } else {
    formulario.innerHTML =
      "<p class='cor-0 font-2-s' style='grid-column: 1/-1; padding: 1rem; background: var(--cor-12); border-radius: 4px';><span style='color: red';>Erro!</span> A mensagem ou solicitação não foi enviada.<br><span class='cor-5'>Em caso de persistência, entre em contato conosco através do nosso email ou por telefone.</p>";
  }
}
