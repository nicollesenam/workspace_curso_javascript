//acessando elementos do dom
//tag
var titulo = document.getElementsByTagName('h1')[0]; // -> document é usado pra acessar algo; e getElementsByTagName é pra acessar a tag, no caso h1
console.log(titulo);                 //o 0 é pra acessar o primeiro elemento do html colletions

var liS = document.getElementsByTagName('li')[3];
console.log(liS);

//id
var paragrafo = document.getElementById('paragrafo'); //element no singular porque so se pode ter 1 id no codigo html por pagina
console.log(paragrafo);

//class
var itensDaLista = document.getElementsByClassName('item');
console.log(itensDaLista); 