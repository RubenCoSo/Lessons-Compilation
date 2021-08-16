//SCOPE = Ambito de accion

//variable de scope global
let myGlobalVariable = 3;

//Esta funcion puede acceder a la variable global
const myFunc = () => {
  //Esta variable tiene scope local o de funcion
  let myInnerVar = 4;
  console.log("in of the func", myInnerVar);
  console.log(myGlobalVariable);
};

myFunc();

//La siguiente linea dara error porque myInnerVar fue declarada en el scope de la funcion
// console.log('out of the func', myInnerVar)

//LOS LOOPS & IFS NO TIENEN SCOPE PROPIO
// for (var i = 1; i <= 30; i++) {
// console.log(`Iteration number: ${i}`);
// }

// console.log(`After the loop: ${i}`);

//TRABAJANDO CON VARS

//Estas dos bloques son equivalentes
//Para var si se hace una declaracion de una variable que ya existe
//MODIFICA LA EXISTENTE (Y ESTO ES MALO)

var message = "Hello from the global scope!";
var message = "This is the second message.";

// OR

var message = "Hello from the global scope!";
message = "This is the second message.";

//Ejemplo de mal uso

var name = "Ironhacker";

if (true) {
  var name = "Ted";
  console.log(`Name inside if statement: ${name}`);
}

//Se carga el valor almacenado en el primer name
console.log(`Name outside if statement: ${name}`);

//TRABAJANDO CON LET Y CONST
//Trabajan con scope de bloque {}

for (let i = 1; i <= 30; i++) {
  // console.log(`Iteration number: ${i}`);
}

//Esto dara error Ya que no existe porque esta fuera de su bloque
// console.log(`After the loop: ${i}`);

let nameLet = "Ironhacker";

if (true) {
  let nameLet = "Ted";
  console.log(`Name inside if statement: ${nameLet}`);
}

console.log(`Name outside if statement: ${nameLet}`);

//No pueden ser declaradas dos veces
// THIS IS OKAY
let message2 = "This is the first message.";
message2 = "This is the second message."; // <== This is the second message.

// BUT THIS WILL THROW AN ERROR

// let message2 = 'This is the first message.';
// let message2 = 'This is the second message.'; // <== Duplicate declaration "message

//LAS CONST NO PUEDEN SER MODIFICADAS NI REDECLARADAS
// THIS WILL THROW AN ERROR
// const message3 = 'This is the first message.';
// message3 = 'This is the second message.'; // <== "message" is read-only

// AND THIS WILL THROW AN ERROR

// const message4 = 'This is the first message.';
// const message4 = 'This is the second message.'; // <== Duplicate declaration "message"

//CONST EN VARIABLES COMPLEJAS (OBJECTS, ARRAYS...) NO SIGNIFICA QUE NO PODAMOS CAMBIAR SU CONTENIDO.

//Bien escrito, accediendo a sus propiedades
const obj = {};
obj.name = "Ironhacker";

//mal escrito, se pretende una asignacion del objeto completo.
// obj = { name: 'Ironhacker' };

//AUNQUE TENGAMOS LA POSIBILIDAD DE HOISTING LA BUENA PRACTICA ES USAR LAS VARIABLES DESPUES DE SER DECLARADAS/INICIALIZADAS

//HOISTING O VARIABLES DECLARADAS ANTES DE TIEMPO
//Usando var la variable se crea undefined al principio de su scope
console.log("message5 ", message5); // => undefined
var message5 = "Hello from the global scope!";

//Usando let la variable se NO se crea NI se define
// console.log("message6 ", message6); // => ReferenceError: Cannot access 'message' before initialization
let message6 = "Hello from the global scope!";

//SHADOWING

let a = 1;
let b = 2;

function inner() {
  a = 4; // reassigned
  let b = 3; // declared in an inner scope
}

inner();

console.log("A:", a); // => 4
console.log("B:", b); // => 2
