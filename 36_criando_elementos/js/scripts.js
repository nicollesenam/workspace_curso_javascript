//passos para inserir elemento no body
//criar a tag
var novoParagrafo = document.createElement("p");

//criar o texto
var texto = document.createTextNode("Este é o conteúdo do parágrafo");

//colocar texto no paragrafo 
novoParagrafo.appendChild(texto);
console.log(novoParagrafo);

//inserir texto no HTML
var body = document.querySelector("body");
console.log(body);

body.appendChild(novoParagrafo);

//passos para inserir em um container/div

var container = document.querySelector("#container"); //pode ser o getElementById
console.log(container);

var span =  document.createElement("span");

span.appendChild(document.createTextNode("texto do span"));

/*
mesma coisa que:
var span =  document.createElement("span");
var textoSpan = document.createTextNode("texto do span");

span.appendChild(textoSpan);
*/
console.log(span);

container.appendChild(span);