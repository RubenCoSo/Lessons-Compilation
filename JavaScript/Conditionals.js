             
let age = 15
let hasSpanishCitizenship = true

if(age > 35){
  // console.log('Tu puedes ser vacunado')
} else if(age < 16){
  // console.log('No hay plan para vacunar a esta edad')
} else {
  // console.log('No te toca todavia')
}


//Se vacunan a mayores de 60 años en cualquier caso
//A menores de 60 anos con cuidadania

if(age > 60){
  // console.log('Tu puedes ser vacunado')
} else {
  if(hasSpanishCitizenship){
    // console.log('Tu puedes ser vacunado')
  } else {
    // console.log('No te toca todavia')
  }
}


//Dependiendo del idioma muesta hola en espanol , frances y si no lo recnoce en ingles
const idiomaEscogido = 'FR' // 'ES' || 'FR'



if(idiomaEscogido === 'ES'){
  // console.log("Buenos días")
} else if(idiomaEscogido === 'FR'){
  // console.log("Bonjour")
} else{
  // console.log("Hello")
}


//Dime cuantos dias tiene el mes
const mes ='octubre'

switch (mes) {
  case 'enero':
  case 'marzo':
  case 'mayo':
  case 'julio':
  case 'agosto':
  case 'octubre':
  case 'diciembre':
    // console.log(31)
    break;
  case 'febrero':
    // console.log(28)
    break;
  case 'abril':
  case 'junio':
  case 'septiembre':
  case 'noviembre':
    // console.log(30)
    break;
  default:
  // console.log('Mes no soportado')
}

