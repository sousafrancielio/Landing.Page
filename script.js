var botoes = document.querySelectorAll(".filtro");
var itens = document.querySelectorAll(".item");
var grupos = document.querySelectorAll(".grupo");
var secoes = document.querySelectorAll(".secao");
var aviso = document.getElementById("aviso");

function aplicarFiltro(tipo) {
  for (var j = 0; j < botoes.length; j++) {
    botoes[j].classList.remove("ativo");
    if (botoes[j].getAttribute("data-tipo") == tipo) {
      botoes[j].classList.add("ativo");
    }
  }

  for (var k = 0; k < itens.length; k++) {
    var tipoItem = itens[k].getAttribute("data-tipo");
    var mostrar = false;

    if (tipo == "todos" || tipoItem == tipo) {
      mostrar = true;
    }

    if (mostrar) {
      itens[k].classList.remove("escondido");
      itens[k].style.display = "";
    } else {
      itens[k].classList.add("escondido");
      itens[k].style.display = "none";
    }
  }

  for (var g = 0; g < grupos.length; g++) {
    if (tipo == "todos" || grupos[g].getAttribute("data-tipo") == tipo) {
      grupos[g].classList.remove("escondido");
      grupos[g].style.display = "";
    } else {
      grupos[g].classList.add("escondido");
      grupos[g].style.display = "none";
    }
  }

  for (var s = 0; s < secoes.length; s++) {
    if (tipo == "todos" || secoes[s].getAttribute("data-tipo") == tipo) {
      secoes[s].style.display = "";
    } else {
      secoes[s].style.display = "none";
    }
  }
}

for (var i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", function () {
    var tipo = this.getAttribute("data-tipo");
    aplicarFiltro(tipo);
    var nomeTipo = tipo.charAt(0).toUpperCase() + tipo.slice(1);
    aviso.textContent = "Mostrando: " + nomeTipo;
  });
}

for (var n = 0; n < itens.length; n++) {
  itens[n].addEventListener("click", function () {
    for (var m = 0; m < itens.length; m++) {
      itens[m].classList.remove("marcado");
    }
    this.classList.add("marcado");

    var nome = this.querySelector("h3");
    if (!nome) {
      nome = this.querySelector("figcaption");
    }
    if (!nome) {
      nome = this.querySelector("h2");
    }
    aviso.textContent = "você escolheu o " + nome.textContent;
  });
}
