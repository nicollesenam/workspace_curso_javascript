//inserir click
var btn = document.querySelector("#btn");

console.log(btn);

btn.addEventListener("click", function(){
    console.log("clicou");

    console.log(this); //o this nos eventos vira o proprio elemento

    this.style.color = "red"; //ira alterar o estilo do botao porque this vira o click

}); // addEventListener - evento que espera algo do usuario | tipo de evento: click ; e callback que vai fazer uma ação a partir do click do usuario

var title = document.querySelector("#title");
console.log(title);

title.addEventListener("click", function(){
    console.log("clicou");
    
    var subtitle = document.querySelector(".subtitle");
    subtitle.style.display = "none";
});

//double click
var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("dblclick", function(){
    console.log("click duplo");

});