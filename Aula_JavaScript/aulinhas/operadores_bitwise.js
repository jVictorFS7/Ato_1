
let num1 = 10;
let num2 = 15;

//formas de se usar os operadores (&&),(||) com calculo binário
let res1 = num1 & num2; // calculo binário, mantendo o bit 1 apenas onde há bit 1 em ambas as posições na comparação
let res2 = num1 | num2; // calculo binário, mantendo o bit 1 mesmo que comparado com o bit 0

let res3 = num1 ^ num2; // calculo binário, onde houver igualdade nas comparações retornará bit 0 e onde houver desigualdade retornará bit 1
let res4 = num1 << 1; // desloca 1 bit (ou mais dependo do numero especificado) para a esquerda e dobra o valor para cada bit
let res5 = num1 >> 2; // desloca dois bits (ou mais dependo do numero especificado) para a direita e corta pela metade o valor para cada bit

console.log(res5);