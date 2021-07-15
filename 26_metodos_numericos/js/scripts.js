//parseFloat - pegar um valor e transformar em float
//10.0
console.log(parseFloat('12.999')); //string com ponto flutuante pra number com ponto flutuante = float
console.log(Number.parseFloat('12.999'));

//parseInt - pegar uma string e transformar em int
console.log(parseInt('10'));
console.log(parseInt(16.96));

//toFixed - limitar casas decimais de um número
console.log(23.51515165.toFixed(1));

//isNaN - verifica se é/não é um number (is not a number)
console.log(isNaN("teste")); //retorna true porque não é numero
console.log(isNaN(12)); //retorna false porque é
console.log(isNaN("14")); 

//MAX_VALUE e MIN_VALUE - máximos e mínimos que o javascript aceita; acima
//disso é tratado como +infinity e abaixo disso como -infinity

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
