const botaoArea = document.getElementById("botao");

const botao = document.createElement("button");

botao.textContent = "Antecessor e Sucessor";
botao.className = "botao";
botao.onclick = () => alertaBotao();
botaoArea.appendChild(botao);

function alertaBotao(){
    let numero = prompt("Informe um número inteiro");
    let numeroInt = parseInt(numero);
    let antecessor = numeroInt - 1;
    let sucessor = numeroInt + 1;
    alert("Antes de "+numero+", temos "+antecessor+"\nDepois de "+numero+", temos "+sucessor);
}
