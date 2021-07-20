//setTimeout - executar função depois de um tempo
console.log("Antes do setTimeout");
setTimeout(function(){

    console.log("testando o setTimeout");

}, 2000); //unidade em milissegundo, 2000 sao 2 segundos

console.log("Depois do setTimeout");

//setInterval
setInterval(function(){

    console.log("testando setInterval");

}, 1000); //executando função a cada 1 segundo