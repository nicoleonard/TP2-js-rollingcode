/* Realiza un script que cuente el número de vocales que tiene un texto.
*/

let texto = prompt("ingrese una cadena de texto para contar las vocales");
let contador = 0;
for(let i=0;i<texto.length;i++){
    switch(texto[i].toLowerCase()){
        case "a":   contador++; break;
        case "e":   contador++; break;
        case "i":   contador++; break;
        case "o":   contador++; break;
        case "u":   contador++; break;
    }
}
document.write(`<h1> la cantidad de vocales es ${contador}`);