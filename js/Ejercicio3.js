/*Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
 */

let cadena =[];
do{
   cadena.push(prompt("ingrese una cadena de caracteres"));
}while(confirm("Desea ingresar otra cadena?"));

document.write(cadena.join('-'));