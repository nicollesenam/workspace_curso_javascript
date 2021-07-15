var lista = ['laranja', 'maçã', 'pera', 'jaca','limão'];

var listaUl = document.createElement('ul');

var body = document.getElementsByTagName('body'); //pegar todos os elementos com a tag body
//é criado uma coleção de html que tem um body dentro

//console.log(body[0]); //tag 0 tem acesso a tag 0 de fato

body[0].appendChild(listaUl); //adicionar um elemento filho, no caso essa listaUl ao body

var listaNoBody = document.getElementsByTagName('ul'); //pegar os elementos do ul

console.log(listaNoBody[0]);

for(var i = 0; i < lista.length; i++){  //começando em 0, com parada quando for menor que o comprimento da lista e ir
                                                    //incrementando
    var lifor = document.createElement('li');

    var textoLi = document.createTextNode(lista[i]); 

    lifor.appendChild(textoLi); //adicionar texto da lista dentro da li

    listaNoBody[0].appendChild(lifor);

    console.log(lista[i]);  //passar por toods os elementos da lista
}