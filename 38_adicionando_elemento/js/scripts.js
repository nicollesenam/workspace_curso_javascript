//criar elememento com classe predefinida
//div com uma classe dentro
var el = document.createElement("div");

el.classList = "div-criada";
console.log(el);

//inserir elemento com appendChild na pagina HTML
//acessar container
var container = document.querySelector("#container");

//adicionar elemento "el" dentro do container 
//inserindo elemento filho
container.appendChild(el);

//insertBefore - outra forma de inserir um elemento na pagina/insere antes
var el2 = document.createElement("div");

el2.classList = "div-before";

//inserir antes da div criada
var el3 = document.querySelector("#container .div-criada");
console.log(el3);

container.insertBefore(el2,el3); //primeiro o que vai ser inserido e depois a referencia para inserir antes dele
//colocar o elemento pai antes de insertBefore