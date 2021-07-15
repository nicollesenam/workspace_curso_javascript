var idade = 16;
var nome = "joão";

if(nome == "joão" && idade == 16){
    console.log("joão pode entrar na aula");
}else{
    console.log("este não é o joão");
}

if(1 == 1 && 3 > 2 && true){
    console.log("passou");
}

if((1 == 1 && 3 > 3) && true){ //isolar operações para calcular um valor primeiro
    //(true  x    false ) x true = false 
    console.log("passou");
}else if(nome === "joão" && idade >= 14){
    console.log("aqui passa!");
}