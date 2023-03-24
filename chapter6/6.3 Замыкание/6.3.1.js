"use strict"

//Независимы ли счётчики? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

console.log( counter2() ); // 0
console.log( counter2() ); // 1

/*
Второй счетчик так же показал 0 и 1 так как функции созданы разными вызовами makeCounter()
поэтому имеют независмые внешние лексические окружения, у каждого из который своя собственная переменная count.
*/