function multiplicarDosNumeros(numero1, numero2) {
  if(numero1 === 0 || numero2 === 0 ){
    return 0
  }
  return numero1 * numero2
}
const numeroMultlipcado = multiplicarDosNumeros(2,3)

// console.log('numeroMultiplicado: ', numeroMultlipcado)


function diHola() {
  console.log('Hola')
}

// let valorRetornadoDeHola = diHola()

// console.log('valorRetornadoDeHola: ', valorRetornadoDeHola)


function getUserInfo(firstNameParam, lastNameParam) {
  const userInfo = {
    firstName: firstNameParam,
    lastName: lastNameParam,
    role: 'admin'
  };
 
  return userInfo;
}
 
const userObject = getUserInfo('ana', 'martinez'); 

// console.log(userObject)


function getFavorites(fav1, fav2, fav3) {
  const favorites = [fav1, fav2, fav3];
 
  return favorites;
}
 
// console.log(getFavorites('javascript', 'html', 'css'))

function avg(array) {
  // !array.length is the same as writing array.length === 0
  if (!array.length) return;
  
  let sum = 0
 
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}



const params =[1,2,3]

avg(params)

//Estas dos funciones son un refactor de la funcion anterior (SIMPLIFICAR)

function sum(array) {
  if (!array.length) return;
 
  for (let sum = 0, i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
 
function avgRefactored(array) {
  if (!array.length) return;
 
  return sum(array) / array.length;
}


//Maneras de crear funciones
function diAlgo(queDigo) {
  console.log(queDigo)
}

const diAlgo2 = function(queDigo) {
  console.log(queDigo)
}


const diAlgo3 = (queDigo) => {
  console.log(queDigo)
}

diAlgo('1')
diAlgo2('2')
diAlgo3('3')
