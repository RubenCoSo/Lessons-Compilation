const array = [1, 2, 3];
 
const newArray = array.map((element) => {return element * 2});
 
// console.log(newArray); // [ 2, 4, 6 ]


const transformFunction = (element) => {return element * 2}
 
const newArray2 = array.map(transformFunction);
 
// console.log(newArray2); // [ 2, 4, 6 ]




const foods = ['pizza', 'sandwiches', 'ice cream'];


 
// ES6:
const capsFoods = foods.map(food => food.toUpperCase());
 
// console.log(capsFoods);


//////////
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

const finalGrades = students.map(
  theStudent => {
    const projectsAvg = (theStudent.firstProject + theStudent.secondProject) / 2;
    const finalGrade = theStudent.finalExam * 0.6 + projectsAvg * 0.4;
  return {
    name: theStudent.name,
    finalGrade: Math.round(finalGrade)
  };
});
 
// console.log(finalGrades);

const reduceArray =[2,5,7,2]
//Ejemplo de reducer
let reducedValue = 
  reduceArray.reduce(
                      function (accumulator, currentValue) {
                        return accumulator * currentValue
                      } ,
                      1
                    );

//Lo mismo con arrow function

// array.reduce((accumulator, currentValue) => accumulator + currentValue);

// console.log(reducedValue)


//Reduce usado en lista de objetos

const product = {
  name: 'AmazonBasics Apple Certified Lightning to USB Cable',
  price: 7.99,
  manufacturer: 'Amazon',
  reviews: [
    { user: 'Pavel Nedved', comments: 'It was really useful, strongly recommended', rate: 4 },
    { user: 'Alvaro Trezeguet', comments: 'It lasted 2 days', rate: 1 },
    { user: 'David Recoba', comments: 'Awesome', rate: 5 },
    { user: 'Jose Romero', comments: 'Good value for money', rate: 4 },
    { user: 'Antonio Cano', comments: 'It broked really fast', rate: 2 }
  ]
};

const totalReviews = product.reviews.reduce(function (acc, review) {
  return acc + review.rate;
}, 0); // starts acc to 0

const averageRate = totalReviews / product.reviews.length;
 
// console.log(`averageRate rate: ${averageRate}`); 


////////FILTER

const numbers = [1, 2, 3, 4, 5, 6];
 
const evenNumbers = numbers.filter(number => number % 3 === 0);

// const evenNumbers = numbers.filter(function (number) {
//   return number % 2 === 0;
// });
 
console.log(evenNumbers); 


const filterredReviews = product.reviews.filter(function(review){
  return review.rate > 3
})

// console.log(filterredReviews)


