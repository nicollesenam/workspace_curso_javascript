var itensClasse = document.getElementsByClassName('item');
console.log(itensClasse); //acaba selecionando todos os que tem classe

//para resolver isso
//querySelectorAll - retorna uma lista de elementos presentes no cocumento - pegar varios elementos
var itensQuery = document.querySelectorAll('#lista2 li'); //selector all pra selecionar mais de um
console.log(itensQuery); //aparece so os itens de baixo porque foi escolhido so os elementos da lista 2

var itensQuery2 = document.querySelectorAll('#lista.item'); //selector all pra selecionar mais de um
console.log(itensQuery2); //itens da primeira lista


//querySelector - retorna o primeiro elemento dentro do documento que foi especificado pelo seletor. 
//aceita os atributos ids, classes e outros parametros de seleção.

var lista = document.querySelector('#lista'); 
console.log(lista);

var primeira = document.querySelector('ul');
console.log(primeira);

var span = document.querySelector('#paragrafo span');
console.log(span);

//pegar um elemento