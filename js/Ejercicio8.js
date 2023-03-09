/*Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……

*/
let filas = parseInt(prompt("ingrese un numero del 1 al 50 para graficar una piramide"));
while(filas<0 || filas>50){
    filas = parseInt(prompt("el numero a ingresar debe ser del 1 al 50"));
}
for(let i=0;i<=filas;i++){
    for(let j=1;j<=i;j++){
        document.write(j);
    }
    document.write("<br>")
}