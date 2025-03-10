"use strict"

let copo = "cheio";

let resultado = (copo == "vazio" ? "Verdadeiro" : "Falso"); // operador ternario (?) realiza a comparação e volta verdadeiro ou falso

let n = 10; 

let calculo = (!(n%2) ? "Par" : "Impar"); //em caso de resto de divisões caso dê zero(0) retornará falso(impar) e se der um(1) retornará verdadeiro(Par)

console.log(resultado);
console.log(calculo);