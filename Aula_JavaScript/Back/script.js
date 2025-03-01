//Cria uma variavel nome com o valor em aspas
let nome = "Usando entrada de usuário";
//Adiciona a variavel nome no elemento com id subtitulo, exibindo assim seu valor
document.getElementById("subtitulo").textContent = ""+nome;

  //array para listar
  let lista = [];

function adicionarValor(){

    //Cria uma variável mensagem com o valor Muito Bom!
    let mensagem = document.getElementById("mensagem");
    //Pega o dado informado e enviado no input e o adiciona a variavel valorInput
    let valorInput = document.getElementById("input");
    //Cria uma nova variavel valor para pegar apenas o valor da variavel valorInput
    let valor = valorInput.value.trim();
    if(valor == ""){
        let mensagemErro = "Informe algo";
        mensagem.textContent = mensagemErro;
        mensagem.style.color = "#A34743";
    }else{
    //Vai até o documento(pagina HTML) pega o elemento de ID(mensagem) e adiciona um texto com o valor da variavel mensagem declarada anteriormente
    //document.getElementById("mensagem").textContent = mensagem;
    let mensagemSucesso = "Muito bom!";
    mensagem.textContent = mensagemSucesso;
    //adicionando os valores de valor na lista  
    lista.push(valor);
    renderizarLista();
    }
    //Limpa o campo do imput com espaço usando ""
    valorInput.value = "";
    //Imprime no console o que está acontecendo quando o botão é clicado
    //console.log(valor);
}
function renderizarLista(){
    //Cria uma variável para pegar o elemento de uma lista não ordenada UL
    const listarUl = document.getElementById("listarUl");
    listarUl.innerHTML = "";

    for(let i = 0; i < lista.length; i++){
    //Cria uma variavel para criar uma lista ordenada LI
    let listarLi = document.createElement("li");
    //Adiciona a lista ordenada (LI) o valor da variavel valor;
    listarLi.textContent = lista[i];

    let botaoRemover = document.createElement("button");
    botaoRemover.className = "remover";
    botaoRemover.textContent = "Remover";
    botaoRemover.onclick = () => removerAlgo(i);

    let botaoEditar = document.createElement("button");
    botaoEditar.className = "editar";
    botaoEditar.textContent = "Editar";
    botaoEditar.onclick = () => editarAlgo(i);

    listarLi.appendChild(botaoRemover);
    listarLi.appendChild(botaoEditar);
    //Cria um elemento filho dentro do elemento pai
    listarUl.appendChild(listarLi);
    }
}
function removerAlgo(i){
    lista.splice(i, 1);
    renderizarLista();
}
function editarAlgo(i){
   let edicao = prompt("edite aqui");
   if(edicao.trim() !== ""){
    lista[i] = edicao;
    renderizarLista();
   }
}
function limparTudo(){
    lista.length = 0;
    renderizarLista();
    let mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Tudo limpo";
}