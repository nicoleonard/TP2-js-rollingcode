/* Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/
let numeros =[];
let numero = 0;
let suma = 0;

do{
    numero = parseInt(prompt("Ingrese un numero"));
    if(Number.isInteger(numero)){
        numeros.push(numero);
    }else{
        alert("no se ingreso un numero");
    }
   
}while(confirm("Desea ingresar otro numero?"));

numeros.forEach(elemento => suma = suma + elemento);
document.write(suma);

