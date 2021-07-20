//selecionar elemento
var title = document.querySelector("#title");
console.log(title);

//alterar texto
//innerHTML
title.innerHTML = "Testando o texto alterado";


//textContent (mais utilizado e recomendado/performático)
var subtitle = document.querySelector(".subtitle"); //ponto por ser classe
console.log(subtitle);

subtitle.textContent = "Testando o textContent";