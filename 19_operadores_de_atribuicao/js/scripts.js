var x = 1;
var y = 2;

//soma
console.log(x = x + y); //soma daria 3 || ex:  count = count + 1  
console.log(x += y);   // acrescentando o valor 2 de y a x, que vale 3, o resultado é 5
//x = 5

//subtração
//console.log(x = x - y);  
console.log(x -= y);  
// x = 5 - 2 = 3      //a soma fez o contador de x valer 5, subtraindo o valor 2 de y, fica igual a 3

//multiplicação
//console.log(x = x * y); 
console.log(x *= y);  
//x = 3 * 2 = 6         a subtração fez o contador de x valer 3, multiplicando o valor 2 de y, fica igual a 6


//divisão
//console.log(x = x / y); 
console.log(x /= y);
//x = 6 / 2 = 3;       a multiplicação fez o contador de x valer 6, dividindo o valor 2 de y, fica igual a 3


//loops
console.log(x++);
console.log(x--);

while(x <=100){
    console.log(x);

    x *= 2;
}
console.log(x);

while (x > 0){
    
    console.log(x);

    x -= 5;
}