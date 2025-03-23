//pega o elemento da pagia HTML pelo id e coloca na variavel
const botoes = document.getElementById("botoes");
//cria um botão que cria vários outros botões
const botaoDinamico = document.createElement("button");
botaoDinamico.textContent = "Criar botão";
botaoDinamico.className = "bot";
botaoDinamico.onclick = () => criarBotao();
botoes.appendChild(botaoDinamico);
//array para armazenar diversos botões
let numero = [];
//cria os botões e exibe uma mensagem pelo seu indice no array
function criarBotao(){
    const novoBotao = document.createElement("button");
    numero.push(novoBotao);
    for(let i = 0; i <= numero.length; i++){
    numero[i].textContent = "Botão numero: "+(i+1);
    numero[i].className = "bot";
    numero[i].onclick = () => alertaBotao(i);
    botoes.appendChild(novoBotao);
    }
}
//exibe uma mensagem de alerta baseado no botão clicado
function alertaBotao(i){
    alert("Você clicou no "+(i+1)+"° botão");
}
