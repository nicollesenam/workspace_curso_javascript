var el = document.createElement("h3");

el.classList = "testando-classe";

var texto = document.createTextNode("Esse é o texto do h3");

el.appendChild(texto);

console.log(el);

//trocar h1 por h3
//selecionar o elemento h1/elemento que quer trocar
var title = document.querySelector("#title");
console.log(title);

//selecionar o pai do elemento 
var pai = title.parentNode; //invocar pai do elemento title
/*
mesma coisa que 
var body = document.querySelector("body");
*/

//trocar os elementos
pai.replaceChild(el,title); //primeiro o que vai entrar, e segundo o que vai sair
                            //no caso entra o "el" (h3) e sai o "title" (h1)