
///////////////Arrays y sus funciones///////////

let alumns = [
  'Rosa',
  'Jaime',
  'Manuel'
]

//Se puede obtener los valores escribiendo array[indice]
//Empieza en 0 el indice

// console.log(alumns[0])

//Cada elemento puede ser de diferente tipo

const arrayNames = ['Pedro', 2, true];

// console.log(arrayNames[2])

//Esto dara indefinido porque la lista no es tan grande

// console.log(arrayNames[99])

// console.log('Alumnos antes de modificar: ', alumns)

//Anade al final
alumns.push('Pepe')
//Anade al principio
alumns.unshift('Ana')

// console.log('Alumnos v2: ', alumns)
// console.log(alumns)

//Splice elimina elementos (donde empieza y cuantos elementos)
//y opcionalmente anade elementos
const deletedAlumns = alumns.splice(2,0,'Oriol');
// console.log("deletedAlumns", deletedAlumns)


//Elimina el ultimo
alumns.pop();

//Elimina el primero
alumns.shift();



console.log(alumns)



///////////////Recorriendo arrays///////////

//Recorriendo por indice
for (let i = 0; i < alumns.length; i++) {
  let currentAlumn = alumns[i]
  // console.log(currentAlumn, ' en el indice: ', i)
}

//for each + arrow functions
alumns.forEach(
  (currentAlumn, index) => {
    // console.log(currentAlumn, ' en el indice: ', index)
  }
);

//for each + traditional functions
alumns.forEach(function (currentAlumn, index) {
  // console.log(currentAlumn, ' en el indice: ', index)
});

//For ... of
for(let currentAlumn of alumns){
  //  console.log(currentAlumn)
}

//For ... in
for(let currentIndex in alumns){
   console.log(alumns[currentIndex])
}


//for each con llamada a una funcion

function printStars(howMany) {
  // console.log('*'.repeat(howMany));
}
 
[1, 2, 3, 4, 5].forEach(function (num) {
  printStars(num);
});

//Ejemplo de split
let phrase = "This is long enough for a string to count it words";
//Convierteme este string en un array separando cada vez que haya un espacio
let words = phrase.split(" ");

console.log(words);
//['This','is'....]
console.log(words[0]);
console.log(words.length);


//Ejemplo de copia por valor

let string1 = 'hola'

let string2 = string1


///Copia por referencia 
let alumns2 = alumns

//Copiar objetos complejos POR VALOR

let alumns3 = JSON.parse(JSON.stringfy(alumns))
