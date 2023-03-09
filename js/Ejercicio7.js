/* Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

let i = parseInt(prompt("ingrese un numero del 1 al 50 para graficar una piramide"));
while(i<0 || i>50){
    i = parseInt(prompt("el numero a ingresar debe ser del 1 al 50"));
}
for(i;i>=1;i--){
    for(let j=1;j<=i;j++){
        document.write(i);
    }
    document.write("<br>")
}