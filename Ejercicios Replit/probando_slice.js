
let frase = 'Esto mia es una frase cualquiera'; 

let index = frase.indexOf(" ");

let corte = frase.slice(index+1);

let index2 = corte.indexOf(" ");

let frase2 = corte.length-index2;

let frase_final = corte.slice(corte, -frase2);

console.log(frase_final);


