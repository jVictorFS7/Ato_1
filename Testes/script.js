const conteudoArea = document.getElementById("conteudo");

let input = document.createElement("input");
input.placeholder = "Área de inserção de texto";
conteudoArea.appendChild(input);

const botao = document.createElement("button");
botao.textContent = "Enviar";
botao.className = "botao";
botao.onclick = () => enviarDado();
conteudoArea.appendChild(botao);

const listaUl = document.createElement("ul");
conteudoArea.appendChild(listaUl);

const selecao = document.getElementById("selecao");
const selecaoBotao = document.createElement("button");
selecaoBotao.textContent = "SELECIONAR";

selecao.appendChild(selecaoBotao);

let lista = [];

function enviarDado(){
    let valor = input.value.trim();
    lista.push(valor);
    listaUl.innerHTML = "";
    for(let i = 0; i < lista.length; i++){
    let listaLi = document.createElement("li");
    listaLi.textContent = lista[i];
    selecaoBotao.onclick = () => selecionar(i);
    listaUl.appendChild(listaLi);
    }
}

function selecionar(i){
    let tarefa = prompt("Informe uma tarefa");
    let indice = lista.indexOf(tarefa);
    //alert("Indice: "+indice+" Tarefa: "+tarefa);
    
    const ulLista = document.createElement("ul");
    selecao.appendChild(ulLista);
    let liLista = document.createElement("li");
    liLista.textContent = "Tarefa: "+tarefa+" Indice: "+indice;
    ulLista.appendChild(liLista);
}   







