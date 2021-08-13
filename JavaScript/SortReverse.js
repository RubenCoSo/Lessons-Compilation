//Reverse 
const arr1 = ['one', 'two', 'three'];
const arr2 = arr1.reverse();
 
console.log(arr1);

//Filter
// return -> true / false

//Reduce 
// return valor

//map
//La nueva celda transformada

//sort (a,b)
// return NEGATIVO (a va primero)
// return  POSITIVO (b va primero)
//return 0 (son iguales)

//Sort sin mas es capaz de ordenar Strings

const words =['as', 'rrr', 'ert']
words.sort();
 
console.log(words);


const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];
 
// ES5
numbers.sort(function (a, b) {
  if (a < b) return 1; 
  if (a > b) return -1;
  if (a === 0) return 0;
});
 
 
console.log(numbers.reverse());



const students = [
  {
    name: 'Tony Parker',
    firstProject: 80,
    secondProject: 75,
    finalExam: 90
  },
  {
    name: 'Marc Barchini',
    firstProject: 84,
    secondProject: 65,
    finalExam: 65
  },
  {
    name: 'Claudia Lopez',
    firstProject: 45,
    secondProject: 95,
    finalExam: 99
  },
  {
    name: 'Alvaro Briattore',
    firstProject: 82,
    secondProject: 92,
    finalExam: 70
  },
  {
    name: 'Isabel Ortega',
    firstProject: 90,
    secondProject: 32,
    finalExam: 85
  },
  {
    name: 'Francisco Martinez',
    firstProject: 90,
    secondProject: 55,
    finalExam: 78
  },
  {
    name: 'Jorge Carrillo',
    firstProject: 83,
    secondProject: 77,
    finalExam: 90
  },
  {
    name: 'Miguel López',
    firstProject: 80,
    secondProject: 75,
    finalExam: 75
  },
  {
    name: 'Carolina Perez',
    firstProject: 85,
    secondProject: 72,
    finalExam: 67
  },
  {
    name: 'Ruben Pardo',
    firstProject: 89,
    secondProject: 72,
    finalExam: 65
  }
];

//Pensemos en studentA y studentB como CUALQUIERA de los estudiantes
const orderredStudents =students.sort(function (studentA, studentB) {
  const studentAFirstProject = studentA.firstProject 
  const studentBFirstProject = studentB.firstProject 

  //sort (a,b)
// return NEGATIVO (a va primero)
// return  POSITIVO (b va primero)
//return 0 (son iguales)

  if(studentAFirstProject > studentBFirstProject){
    return -1  
  } else if(studentAFirstProject < studentBFirstProject){
    return 1
  }else {
    return 0
  }
});
 

 console.log(orderredStudents)