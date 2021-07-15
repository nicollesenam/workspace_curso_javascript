for(var i = 10; i > 0; i--){
    console.log(i);

    if(i == 5){
        break;
    }

}
console.log("break");

var x = 10;

while(x < 100){

    x += 10;

    if(x == 60 || x == 90){
        console.log("comando continue");
        continue; //pular 60 pro 70 e continuar contando
    }
    console.log("testando continue " + x);
}