const boasVindas = document.getElementById("Boas-Vindas").textContent = "Boas-vindas";

const botaoArea = document.getElementById("botao");

const botaoDesafio = document.createElement("button");
botaoDesafio.textContent = "Inicie o desafio";
botaoDesafio.className = "botaoDesafio";
botaoDesafio.onclick = () => alertaBotao();
botaoArea.appendChild(botaoDesafio);

function alertaBotao(){
    let nome = prompt("Qual o seu nome?");
    while(nome == ""){
        alert("Informe seu nome");
        nome = prompt("Qual o seu nome?");
    }
    let idade = prompt("Olá "+nome+", qual a sua idade?");
    while(idade == ""){
        alert("Informe sua idade "+nome);
        idade = prompt("Ei "+nome+" qual a sua idade?");
    }
    let novaIdade = parseInt(idade);
    alert("Acabei de conhecer "+nome+", que tem "+novaIdade+" anos de idade");
}
