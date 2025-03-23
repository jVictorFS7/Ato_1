// funções são blocos de comandos que eu posso executar em um momento oportuno ou quando eu quiser

// function soma(n1,n2){
//    return n1+n2
// }
// console.log(soma(10,5));

// function parOuimpar(){
//    const a = 10;
//    const b = 7;
//    const c = a+b;
//    if(c%2==0){
//       //retorna algo e para a execução
//       return "Par";
//    }else{
//       return "Impar";
//    }
// }
// console.log(parOuimpar());

//Parametros REST = forma de passar parametros sem especificar a quantidade de parametros usando a função spread(...)
// function soma (...valores){
//    let res = 0;
//    for(let v of valores){
//        res+=v;
//    }
//    return res;
// }
// console.log(soma(10,5));

//função anonima = não tem um nome para ser chamada(não está na memória, só vai ser executada no tempo de execução), então a função deve ser associada a uma variavel / função construtor = função anonima, usando o operador new(para mudar a contrução da função que serve para funções mais simples) e iniciando a função com F maiusculo(Function) e passando tudo para dentro do parametro da função(argumentos e o corpo da função)

// let f = function(...valores){ // funcao anonima
//    let res = 0;
//    for(let v of valores){
//       res+=v;
//    }
//    return res;
// }
// console.log(f(10,5));

// let fn = new Function("p1","p2","p3","return p1+p2+p3");//Função construtor anonima
// console.log(fn(5,5,5));

//arrow function (=>) = mecanismos usados para representar funções anonimas

// const soma = (v1,v2) => {return v1+v2}; // arrow => substitui a palavra function
// console.log(soma(10,5));

// const sub = (v1,v2) => v1-v2; // em caso de operações simples não é necessário o uso de chaves({}corpo) ou return
// console.log(sub(10,5));

// const multi = m => m*10; // em caso de apenas UM parametro não é necessário o uso de parenteses()
// console.log(multi(10));