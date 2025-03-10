const botao = document.getElementById("botao");

const botaoTroco = document.createElement("button");
botaoTroco.textContent = "Calcule o troco";
botaoTroco.className = "botao";
botaoTroco.onclick = () => alertaTroco();
botao.appendChild(botaoTroco);

function alertaTroco(){
    let nome = prompt("Qual produto você está comprando?");
    let preco = prompt("Quanto custa o "+nome+" que você está comprando?");
    let dinheiro = prompt("Qual o valor você deu para pagar "+nome);
    let troco = dinheiro - preco;
    alert("Você comprou "+nome+" que custou R$ "+preco+" deu R$ "+dinheiro+" e vai receber R$ "+troco+" de troco Volte sempre!");
}
