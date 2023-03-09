/* Realiza un script que genere un número aleatorio entre 1 y 99
*/
let random = 0;
do{
    random = Math.trunc(Math.random()*100);
}while(random == 0);


document.write(random);
