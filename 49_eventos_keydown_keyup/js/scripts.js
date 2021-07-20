//keydown
document.addEventListener("keydown", function(event){ //parametro event vai ter informacoes sobre o evento
    //console.log(event); da varias informacoes sobre o que foi apertado
    console.log(event.key); //aqui diz qual que foi apertado
    
    if(event.key === "Enter"){
        console.log("apertou enter");
    }
});

//keyup
document.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        console.log("soltou o Enter");
    }
});