/*Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
 */

let m = parseInt(prompt("ingrese un numero para las filas"));
let n =parseInt(prompt("ingrese un numero para las columnas"));

let elementos=m*n;
document.write(` <ul class="container text-center">`)
for(let i=1;i<=m;i++){
    document.write(` <div class="row">`)
    for(let j=1;j<=n;j++){
        document.write(`<li class="col list-group-item">  ${elementos--}  </li>`);

    }
    document.write(` </div>`)
    document.write("<br>")
}
document.write(` </ul>`)