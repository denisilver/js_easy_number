
let b = 1003;


nextPrime:
for (let o = 2; o <= b; o++) { // Для всех i...

  for (let k = 2; k < o; k++) { // проверить, делится ли число..
    if (o % k === 0) continue nextPrime; // не подходит, берём следующее
  }

  console.log( o ); // простое число
}
console.log('Конец' + ' мультфильма')