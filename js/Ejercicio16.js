/*Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/

let texto = prompt("ingrese una cadena de texto para ordenarla al reves");
document.write(texto.reverse());

for(let i=texto.length-1; i>=0;i--){
    document.write(texto[i]);
}