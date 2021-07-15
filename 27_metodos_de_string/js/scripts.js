//length - comprimento ou quantidade de caracteres que o elemento vai ter

var nome = "matheus";
console.log(nome.length);

var obj = "bola";
console.log(obj.length);

//indexOf - dar o indice de caractere ou string

console.log(nome[2]); //imprimir letra na posição 2

var frase = "o rato roeu a roupa do rei de Roma";
console.log(frase.indexOf("roeu")); //imprimir a posição que está essa palavra

//slice - retirar palavra da frase sabendo indice

var palavra = (frase.slice(7,11)); // r(7) o(8) e(9) u(10) e acrescentar + 1
console.log(palavra);

//replace - trocar uma palavra da string 
var novaFrase = frase.replace("roeu", "teste");
console.log(novaFrase);