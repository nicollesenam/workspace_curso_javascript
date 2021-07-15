function primeiraFuncao(){

    console.log("teste de funções");
}

primeiraFuncao(); //invocar função

function dizerNome(nome){

    console.log("o nome é " + nome);

}

dizerNome("Matheus");
dizerNome("Pedro");
dizerNome("Xavier");

var nomeDoBancoDeDados = "João";

dizerNome(nomeDoBancoDeDados);

function soma (a,b){
    var soma = a + b;
    return soma;
}

var somaUm = soma(2,5);

console.log(somaUm);

var somaDois = soma(5,5);

console.log(somaDois);

console.log(soma(4,5));

