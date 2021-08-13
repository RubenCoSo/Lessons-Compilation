of let i = 40;
 
while (i <= 100 ) {
  // console.log(i);
  i++; // this is the same as i = i + 1
}

let j = 110;

do {
  // console.log(j);
  j++; 
} while (j <= 100 );

//for(condicionInicial; hasta cuando lo hace; accion a ejecutar cada bucle)
for (let i = 0; i <= 100; i++) {
  // console.log(i);
}

//for ... of es valido para ITERABLES, String, Listas
const texto = 'amsterdam';
 
for (let letra of texto) {
  // console.log(letra);
}


let x = 20;

while (x <= 100 ) {
  if(x === 30) {
    break //Sale de TODO el while
  }
  // console.log(x)
  x++;
}


let z = 20;

while (z <= 100 ) {
  if(z%2 === 0) {
    z++;
    continue //Sale de la iteracion
  }
  console.log(z)
  z++;
}

