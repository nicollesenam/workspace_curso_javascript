let pessoa = {
    nome: "matheus",
    idade: 29,
    falar: function(){
        console.log("olá, tudo bem?");
    },
    soma: function(a,b){
        return a + b;
    }
};
console.log(pessoa.nome);
pessoa.falar();

var soma = pessoa.soma(2,2);

console.log(soma);