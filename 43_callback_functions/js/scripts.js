function exibir(num){
    console.log("a operação resultou em "+ num);
}

function soma(a,b, callback){ //nome do parametro é opcional
    var op = a + b;
    callback(op);
}
function multiplicacao(a,b, cb){  //cb = callback
    var op = a * b;
    cb(op);
}
soma(2,2, exibir);
multiplicacao(2,4, exibir);