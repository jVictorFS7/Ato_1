// if (10 > 2)
//     //quando há apenas um comando de execução não é necessário colocar as chaves ({})
//     console.log("Numeral maior que 2");

const num1 = 9;
const num2 = 6;


if(num1 > num2){
    console.log(num1+" é maior que "+num2);
    if(num1%2==0){
        console.log(num1+" é par");
    }else if(num2%2==0){
        console.log(num2+" também é par");
    }
}else{
    console.log(num1+" é menor que "+num2)
}

console.log("Fim")