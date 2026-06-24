//const readline = require("readline/promises");
//
//const { stdin: input, stdout: output } = require("process");
//
//const rl = readline.createInterface({input, output});
//
////async function iniciar() {
////    const nombre = await rl.question("Digite su nombre:");
////    console.log(`El nombre escrito fue: ${nombre}`);
////    rl.close();
////}
//
////Utilizando expresiones regulares
//async function iniciar() {
//    const nombre = await rl.question("Digite su nombre:");
//  const valLetras = /^([a-zA-Z]\s?)+$/; //El +, significa que almenos uno
//    if (valLetras.test(nombre)) {
//        console.log(`El nombre escrito fue: ${nombre}`);
//    } else{ 
//    console.log(`El nombre escrito fue: ${nombre}`);
//    }
//}
//
//
//iniciar();


//Actividad Ciclos y Flujo de Control

//A
for (let i = 1; i <= 30; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}

//B

const listNumb = [12, 5, 88, 3, 42, 7, 100];

for (let i = 0; i < listNumb.length; i++) {
  if (listNumb[i] > 50) {
    console.log("Lugar: " + i);
    break;
  }
}

//C
const nums = [10,-3,7,-1,5,8,-2];
let suma = 0;
for (let n of nums) { 
  if (n < 0) continue;
  suma += n;
}
console.log(suma); 


//D
const contrasena = "1684";
let intentos = 0, ingresado;
do {
  ingresado = prompt("Ingresa tu PIN:");
  intentos++;
  if (ingresado !== contrasena && intentos < 3)
    alert("Incorrecto. Intente de nuevo.");
} while (ingresado !== contrasena && intentos < 3);
if (ingresado === contrasena) alert("Acceso");
else alert("Bloqueado");

