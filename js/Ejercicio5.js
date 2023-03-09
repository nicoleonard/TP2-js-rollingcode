/* Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
*/ 

let dni = 0;
let letra= "";
const letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
do{
    do{ 
        if(!Number.isInteger(dni) || (dni<0 && dni>100000000)){
            alert("ingreso incorrecto");
        }
        dni = parseInt(prompt("ingrese un numero de dni entre 0 y 99.999.999"));
    }while(!Number.isInteger(dni) || (dni<0 && dni>100000000))

    document.write(letras[dni%23]);

}while(confirm("Desea ingresar otro numero?"));
