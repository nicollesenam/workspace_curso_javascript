//evento de mouseover
var title = document.querySelector("#title");

title.addEventListener("mouseover", function(){
    this.style.backgroundColor = "yellow"; //case sensitive no backgroundColor (camelCase)

});

//evento mouseout
title.addEventListener("mouseout", function(){
    this.style.backgroundColor = "white";
});
//eventos juntos fazem com que quando passa o mouse por cima fica com fundo amarelo, e quando sai, fica branco

//afetar outro elemento com mouseover
var subtitle = document.querySelector(".subtitle");
subtitle.addEventListener("mouseover", function(){
    var legenda = document.querySelector("#legenda");
    legenda.classList.remove("hide"); //quando passar o mouse pelo subtitulo mostra a legenda
});

var subtitle = document.querySelector(".subtitle");
subtitle.addEventListener("mouseout", function(){
    var legenda = document.querySelector("#legenda");
    legenda.classList.add("hide"); //quando sair do elemento subtitulo esconde a legenda
});