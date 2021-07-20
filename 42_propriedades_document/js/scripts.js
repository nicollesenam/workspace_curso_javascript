//propriedades do objeto document
//acessar body, head, links e etc
console.log(document.body);
console.log(document.head);
console.log(document.links);

//acessar um link especifico
console.log(document.links[0]);
//alterar 
document.links[0].textContent = "Twitter"; //alterar texto com textContent do link da posição 0

//receber URL da página
console.log(document.URL);

//acessar titulo da pagina
console.log(document.title);

//alterar titulo da pagina
document.title = "Aula 42";
console.log(document.title);