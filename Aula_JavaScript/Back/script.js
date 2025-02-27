let nome = "Usando entrada de usuário";
document.getElementById("subtitulo").textContent = ""+nome;

function adicionarValor(){
    //Cria uma variável mensagem com o valor Muito Bom!
    let mensagem = "Muito bom!";
    //Pega o dado informado e enviado no input e o adiciona a variavel valorInput
    let valorInput = document.getElementById("input");
    //Cria uma nova variavel valor para pegar apenas o valor da variavel valorInput
    let valor = valorInput.value;
    //Vai até o documento(pagina HTML) pega o elemento de ID(mensagem) e adiciona um texto com o valor da variavel mensagem declarada anteriormente
    document.getElementById("mensagem").textContent = mensagem;
    //Limpa o campo do imput com espaço usando ""
    valorInput.value = "";
    //Cria uma variável para pegar o elemento de uma lista não ordenada UL
    let listarUl = document.getElementById("listarUl");
    //Cria uma variavel para criar uma lista ordenada LI
    let listarLi = document.createElement("li");
    //Adiciona a lista ordenada (LI) o valor da variavel valor;
    listarLi.textContent = valor;
    //Cria um elemento filho dentro do elemento pai
    listarUl.appendChild(listarLi);
    //Imprime no console o que está acontecendo quando o botão é clicado
    console.log(valor);
}