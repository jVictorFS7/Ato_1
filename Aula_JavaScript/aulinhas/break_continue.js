let numero = 0;
const max = 1000;
let pares = 0;
for(let i = numero; i < max; i++){
    if(i%2==0){
        //para a iteração atual e passa para a próxima iteração
        continue;
    }
    pares++
    if(pares==10){
        //para a execução do loop
        break;
    }
}
console.log(pares);