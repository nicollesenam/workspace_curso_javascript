var teste = 5;

console.log(this.teste);
console.log(teste);

let pessoa = {
    nome: "matheus",
    idade: 29,
    falar: function(){
        console.log("olá, tudo bem?");
    },
    dizerNome: function(){
        console.log("o meu nome é " + this.nome);
    },
    aniversario: function(){
        this.idade +=1;
    },
    saudacao: function(){
        return "Sr. " + this.nome;
    }
};
pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.aniversario();

console.log(pessoa.idade);

pessoa.saudacao();
console.log(pessoa.saudacao());