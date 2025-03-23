"use strict";

const s = 1;
const sb = 2;
const d = 3;
const m = 4;

const valores = [5,10,15];

switch(s){
    case 1 :
        const soma = (v1,v2,v3) =>{
            return v1+v2+v3;
        }
        console.log(soma(...valores));
        break;
    case 2 :
        const subtracao = (v1,v2,v3) => {
            return v1-v2-v3;
        }
        console.log(subtracao(...valores));
        break;
    case 3 :
        const divisao = (v1,v2,v3) =>{
            return v1/v2/v3;
        }
        console.log(divisao(...valores));
        break;
    case 4 : case 5 : case 6: //é possível colocar vários cases juntos 
        const multiplicacao = (v1,v2,v3) =>{
            return v1*v2*v3;
        }
        console.log(multiplicacao(...valores));
        break;
    default :
        console.log("Operação indisponivel");
}