/* Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.
*/

let nombre1 = "";
let edad1 = 0;

let nombre2 = "";
let edad2 = 0;

let nombre3 = "";
let edad3 = 0;

nombre1 = prompt("ingrese el nombre de la primera persona");
edad1 = parseInt(prompt("ingrese la edad de la primera persona"));

nombre2 = prompt("ingrese el nombre de la segunda persona");
edad2 = parseInt(prompt("ingrese la edad de la segunda persona"));

nombre3 = prompt("ingrese el nombre de la tercera persona");
edad3 = parseInt(prompt("ingrese la edad de la tercera persona"));

Math.max(edad1,edad2,edad3)
document.write("la persona de mayor edad es: ");
switch(Math.max(edad1,edad2,edad3)){
    case edad1: document.write(nombre1);
                break;
    case edad2: document.write(nombre2);
                break;
    case edad3: document.write(nombre3);
                break;
    default: break;
}