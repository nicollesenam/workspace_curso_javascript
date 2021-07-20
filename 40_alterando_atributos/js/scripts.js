//adicionar atributo - setAttribute
var title = document.querySelector("#title");
title.setAttribute("class", "testando-atributo"); //adicionando atributo tipo classe com nome de "testando-atributo"

console.log(title);

var btn =  document.querySelector("#btn");
btn.setAttribute("disabled", "disabled"); //atributo pra desabilitar o botao e valor pra dizer que está desabilitado

var subtitle = document.querySelector(".subtitle");
subtitle.setAttribute("id", "titulo-2"); 

//remover atributo - removeAttribute
var lista = document.querySelector("#lista");
lista.removeAttribute("id");