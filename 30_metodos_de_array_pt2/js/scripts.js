//splice - adicionar elemento no meio do array
var arr = [1,2,3,4,5];

arr.splice(2, 0, 999); // indice que quer adicionar elemento, deletar 0 elementos e adicionar 999

console.log(arr);

// - remover elemento epecífico
arr.splice(4, 1); //acessar indice 4 e remover 1 pra esquerda que, no caso, é o numero 4
console.log(arr);

//indexOf - acha o indice de um elemento
console.log(arr.indexOf(5));

//join - transformar arrays numa string

var arr2 = ["O", "rato", "roeu", "a", "roupa"];

console.log(arr2.join(" ")); //separador da palavra em espaços
