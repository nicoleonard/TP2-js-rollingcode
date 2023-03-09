/* Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
*/

let texto = [];
texto = prompt("ingrese una cadena de texto para mostrar la posicion de la primera vocal");
texto.toLowerCase;
let indice = 0;

if(texto.indexOf("a")!= -1){
    indice = texto.indexOf("a");
}
if(texto.indexOf("e")!= -1){
    if(texto.indexOf("e")<indice){
        indice=texto.indexOf("e");
    }
}
if(texto.indexOf("i")!= -1){
    if(texto.indexOf("i")<indice){
        indice=texto.indexOf("i");
    }
}
if(texto.indexOf("o")!= -1){
    if(texto.indexOf("o")<indice){
        indice=texto.indexOf("o");
    }
}
if(texto.indexOf("u")!= -1){
    if(texto.indexOf("u")<indice){
        indice=texto.indexOf("u");
    }
}

if(texto.indexOf("a")== -1 && texto.indexOf("e")== -1 && texto.indexOf("i")== -1 && texto.indexOf("o")== -1 && texto.indexOf("u")== -1){
    document.write("el texto no tiene vocales");
}else{
    document.write(`la posicion de la primera vocal es: ${indice}`);
}
