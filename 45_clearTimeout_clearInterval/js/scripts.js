//clearTimout
//executa um timer que imprime que x é igual a 0 quando passar 1,5seg mas antes de passar o tempo, muda-se
//o valor da variavel para 5 e se faz uma verificação que limpa/para o Timeout
var x = 0;

var myTimer = setTimeout(function(){
    console.log("o x é 0");
}, 1500);

x = 5; 

if(x > 0){
    clearTimeout(myTimer);  
    console.log("o x passou de 0");
}

//clearInterval
//execução a cada meio segundo imprimindo interval e depois de um segundo e meiovai ter uma limpa por causa do clearInterval
var myInterval = setInterval(function(){
    console.log("imprimindo interval");
}, 500); //meio segundo

setTimeout(function(){
    console.log("não precisamos mais repetir");
    clearInterval(myInterval);
}, 1500);