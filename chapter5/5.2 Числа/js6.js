"use strict"

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand); //округление в меньшую сторону
}

console.log( randomInteger(10, 15) );
console.log( randomInteger(10, 15) );
console.log( randomInteger(10, 15) );