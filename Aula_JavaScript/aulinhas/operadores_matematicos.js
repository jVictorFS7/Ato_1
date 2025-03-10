let num1 = 10, num2 = 5, resultado = []; //declaração de variaveis em uma só linha, com seus valores definidos
console.log("Primeiro valor: "+num1+" Segundo valor: "+num2);
let soma = num1 + num2; //soma das variaveis
let subtracao = num1 - num2; //subtração das variaveis
let divisao = num1 / num2; //divisão das variaveis
let resto = num1 % num2; //resto da divisão das variaveis
let multiplicacao = num1 * num2; //multiplicação das variaveis
let incremento = ++num2; //incremento da variavel + 1
let decremento = --num1; //decremento da variavel - 1
let incrementoX9 = num2 += 9; //incremento da variavel + 1 + (valor a ser especificado)
let decrementoX8 = num1 -= 8; //decremento da variavel - 1 - (valor a ser especificado)
resultado.push(soma, subtracao, divisao, resto, multiplicacao, incremento, decremento, incrementoX9, decrementoX8);//alocação de diversas variaveis em um vetor (array)    

for(let i = 0; i < 1; i++){
    console.log("Soma: "+resultado[0]+"\nSubtração: "+resultado[1]+"\nDivisão: "+resultado[2]+"\nResto: "+resultado[3]+"\nMultiplicação: "+resultado[4]+"\nIncremento: "+resultado[5]+"\nDecremento: "+resultado[6]+"\nIncremento de 10: "+resultado[7]+"\nDecremento de 9: "+resultado[8]);
}

console.log(resultado[7] + resultado[5]); //soma de dois itens dentro do vetor (array)

