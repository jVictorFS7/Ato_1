let num1 = 10;
let num2 = 5;
let num3 = 8;
let num4 = 15;

let and = num1 > num2 && num3 < num4; //comparação que retorna Verdadeiro apenas se ambas as afirmações forem verdadeiras 
let or = num1 > num2 || num3 > num4; //comparação que retorna Verdadeiro quando uma ou mais afirmações forem verdadeiras
let negaAND = !(num1 < num2) && (num4 > num3); //nega ou inverte o resultado da comparação
let negaOR = (num1 < num2) || !(num3 < num4); //nega ou inverte o resultado da comparação

let resultados = [];
resultados.push(and, or, negaAND, negaOR);

for(let i = 0; i < 1; i++){
    console.log("Verdadeiro: "+resultados[0]+"\nVerdadeiro: "+resultados[1]+"\nVerdadeiro: "+resultados[2]+"\nFalso: "+resultados[3])
}