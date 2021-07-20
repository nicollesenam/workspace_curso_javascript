//selecionar elemento
var title = document.querySelector("#title");
//adicionar estilo css
title.style.color = "red";

//background-color 
title.style.backgroundColor = "yellow"; //js é caseSensitive entao precisa tirar o traço e colocar a regra camelCase

//adicionar varios estilos de uma vez
//selecionar elemento
var subtitle = document.querySelector(".subtitle");
subtitle.style.cssText = "color: blue; background-color: pink; font-size: 50px";