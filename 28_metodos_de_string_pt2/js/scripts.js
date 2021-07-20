//toLowerCase e toUpperCase

var frase = "Esta é a frase que vamos manipular";

var fraseCaixaAlta = frase.toUpperCase(); //frase cm caixa alta
console.log(fraseCaixaAlta);

console.log(frase.toLowerCase()); //frase com caixa baixa

//trim  - tirar espaços mesmo quando digitado com espaços

var nome = "      matheus           ";

var nomeTrim = (nome.trim());
console.log(nomeTrim);

//split -  transformar texto em array

console.log(frase.split(" ")); //espaço como parametro separador

var tags = "PHP, JavaScript, HTML, CSS";
console.log(tags.split(", "));

//lastIndexOf

var fraseDois = "Eu quero a última palavra teste desta frase teste";

console.log(fraseDois.indexOf("teste")); //esse metodo encontraria o  primeiro indice da primeira palavra "teste"

console.log(fraseDois.lastIndexOf("teste"));//pra encontrar o ultimo indice da palavra "teste"