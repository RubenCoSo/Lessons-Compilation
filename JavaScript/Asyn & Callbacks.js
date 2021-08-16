//Ejemplo basico de callback
function someCallbackFunction() {
  console.log("Hey there, Ironhackers!");
}
//. setTimeout(callBackOFuncionAEjecutar , retrasoEnMs)
// const timeoutId = setTimeout(someCallbackFunction, 3000);

//Vamos a parar la ejecucion del setTimeout
//Escribimos el callback como arrow function
const timeoutId2 = setTimeout(
  () => {
    console.log("Hey there, Ironhackers!");
  }, //1er param como arrow
  1000
);

clearTimeout(timeoutId2);

//Ejemplo de un setTimeout que no se para porque otro hilo ya ha tomado el control
let counter = 1;
const callbackFunction = function () {
  console.log(counter);
  setTimeout(callbackFunction, 1000);
  //No podriamos pararlo aqui porque el setTimeOut de la linea anterior ya esta volando y tiene el control.
  clearTimeout(timeoutId3);
  counter += 1;
};

// let timeoutId3 = setTimeout(callbackFunction, 3000);

//Ejemplo de codigo que es capaz de parar las iteracionea en 10
//Esto es porque el timeoutId se refiere a el hilo en curso
let counter2 = 1;
const callbackFunction2 = function () {
  console.log(counter2);
  timeoutId4 = setTimeout(callbackFunction2, 1000);
  counter2 += 1;

  if (counter2 > 10) {
    clearTimeout(timeoutId4);
  }
};

// let timeoutId4 = setTimeout(callbackFunction2, 1000);

//setInterval
//Mismo codigo anterior escrito con setInterval
let i = 1;
const intervalId = setInterval(function () {
  console.log(i);
  i++;
  if (i > 10) {
    clearInterval(intervalId);
  }
}, 1000);
