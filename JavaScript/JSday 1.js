/console.log sirve para escribir info en la consola
//El ; sirve para indicar final de linea y es opcional
console.log("1. Hola, este es mi primer log!");
 




console.log("-------CREANDO, INICIALIZANDO Y MODIFICANDO VARIABLES---------");
/**
  Vamos a crear varias variables, las normas para nombrar las variables son:
    -Puedes usar letras mayus y minus, numeros, y los simbolos _ y $ 
    -No puede empezar el nombre con un numero => let 1alumnos => (MAL)
    -Las mayusculas importan: let age y let Age serian dos variables diferentes.
    -Variables de varias palabras usa camelCase => let miClaseFavorita
    -Pon nombres que se entienda lo que almacenan: myVariable => (MAL)
    (mas info en el curso)
**/


//Asi declaro una variable
let name
//Y ahora le asigno un valor de tipo string usando =
name = 'Curro'

//Tambien puedes declarar e inicializar a la vez: 
//var es otra manera de crear variables pero esta en desuso.
var surname = 'Jimenez'

//Mostramos las variables que acabo de crear (puedo unir texto libre y variables usando + o ,)
console.log("2.1 El valor de la variable name es: " , name , ' y surname: ' + surname);

//Podemos cambiar el valor de las variables cuanto queramos
name = 'Pedro'
console.log("2.2 He cambiado el valor de name a:", name);






console.log("-------CREANDO VARIAS VARIABLES A LA VEZ Y VIENDO SU TIPO---------");


//Podemos crear varias variables en una linea, inicializando las que queramos
let age, originCountry, residenceCountry='España', email

//Una variable se crea como undefined si no le asignas valor:
console.log('3.1 El valor de age sin inicializar es: ' ,age)

//residenceCountry ya la inicializamos en la primera linea:
console.log('3.1 El valor de residenceCountry se inicializo como: ' ,residenceCountry)

//Asignaremos a la edad un NUMERO 
age = 30
console.log('3.2 El valor de age despues de inicializarla es: ' ,age)

//Asignamos a originCountry un STRING
originCountry = 'Francia'

//podemos preguntar cual es el tipo de una variable usando typeof
console.log('3.3 La variable age es de tipo: ',typeof(age))
console.log('3.4 La variable originCountry es de tipo: ',typeof(originCountry))







console.log("-------USANDO CONSTANTES---------");
//Una constante sigue las mismas reglas que las variables, pero no pueden cambiar su valor.
const numeroPi = 3.12
console.log('La siguiente linea dara error porque estamos tratando de cambiar una constante')
numeroPi = 10


console.log("-------USANDO BOOLEANOS---------");

//Booleanos 

let isYoungerThan25 = true
let isAStriker = true
let isTallerThan180cm = false
let isADefender = true
let isLeftFooted = true

let age = 30


//Un defensa  Y   mas alto de 180 cm

let isAValidPlayer = isADefender && isTallerThan180cm

//Un delantero o que NO sea zurdo
let isAValidStriker = isAStriker || !isLeftFooted

let isYoungOrTall = isYoungerThan25 || isTallerThan180cm

//Un delantero Y (menor de 25  O mas alto de 180cm) Y que no sea de 30 años
let isAValidYoungStriker = isAStriker && isYoungOrTall && age !== 30