//removendo elemento filho - removeChild(); dentro do container
//selecionar elemento pai/container
var container = document.querySelector("#container");
//selecionar elemento filho/elemento que vai remover dentro da div
var p = document.querySelector("#container p");
//remover
container.removeChild(p);

//remover o elemento em si
var subtitle = document.querySelector(".subtitle");
subtitle.remove();