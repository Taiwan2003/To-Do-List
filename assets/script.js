var i = 0;
var indice;

function criar(){
    var textAdd = document.getElementById("inputTextAdd").value;
    var newTasks = document.createElement("p");
    newTasks.textContent = textAdd;

    var listaTotal = document.getElementById("listaTotal");
    var lista = document.createElement("div");
    var botoes = document.createElement("div");
    botoes.id = "botoes";
    lista.id = "lista"+i;
    i++;

    listaTotal.appendChild(lista);
    lista.appendChild(newTasks);
    lista.appendChild(botoes);

    newTasks.setAttribute("id", "novasTasks");

    var botaoDeOk = document.createElement("input");
    botaoDeOk.type = "button";
    botaoDeOk.value = "✓";
    botaoDeOk.id = "botaoDeOk";

    botoes.appendChild(botaoDeOk);

    var botaoDeExcluir = document.createElement("input");
    botaoDeExcluir.type = "button"
    botaoDeExcluir.value = "X";
    botaoDeExcluir.id = "botaoDeExcluir";

    botoes.appendChild(botaoDeExcluir);

    var botaoDeEditar = document.createElement("input");
    botaoDeEditar.type = "button"
    botaoDeEditar.value = "✏️";
    botaoDeEditar.id = "botaoDeEditar";
    lista.classList.add("lista");

    botoes.appendChild(botaoDeEditar);

    indice = lista.id;

    botaoDeExcluir.addEventListener("click", function() {
        delet(lista.id);
    });

}

function delet(indice){
    var a = document.getElementById(indice);
    a.remove();
}

