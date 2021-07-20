//length - saber o comprimento do array / quantidade de elementos que tem
var arr = [1,2,3,4,5];
console.log(arr.length);

//push - adicionar elementos ao array
arr.push(6);
arr.push("qualquer coisa");
console.log(arr);

//pop -  remover elemento do fim do array
arr.pop();
console.log(arr);

//unshif - adicionar elemento no começo
arr.unshift(0);
arr.unshift('teste');
console.log(arr);

//shift - remover elemento do começo
arr.shift();
console.log(arr);

//acessar o último elemento do array
console.log(arr[arr.length - 1]);

//isArray
console.log(Array.isArray(5)); //retorna false
console.log(Array.isArray(arr)); //retorna true