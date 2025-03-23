//quebra um array, quebrar um conjunto de elementos e o devolve elemento por elemento (espalha) HtmlCollection => Array de elementos HTML (Array de elementos) 

// const jogador1 = {nome:"João", energia:100, vidas:3, magia:75}; elementos (dados) repitidos (comuns) ele não restorna (concatenação)
// const jogador2 = {nome:"Victor", energia:100, vidas:5, mana: 80};
// const jogador3 = {...jogador1,...jogador2};

// console.log(jogador3);

// const soma = (v1,v2,v3) =>{
//     return v1+v2+v3;
// }

// console.log(soma(5,5,5));
// const valores = [3,3,3];
// console.log(soma(...valores)) // espalha os valores do vetor fazendo com que as propriedades na variavel soma sejam preenchidos


// const objs1 = document.getElementsByTagName("div");
// const objs2 = [...document.getElementsByTagName("div")];

// objs2.forEach(element  =>
// {
//     element.innerHTML = "loucura";
// }
// )

// console.log(objs1);
// console.log(objs2);

// let perfil1 = {nome:"João", idade:28, altura:165};
// let perfil2 = {sobrenome:"Ferreira", pais:"Brasil", peso:60};
// let juncao = {...perfil1,...perfil2};

// console.log(juncao);

const soma = (v1,v2,v3) => {
    return v1+v2+v3
};

const numeros = [10,20,30];
console.log(soma(...numeros));