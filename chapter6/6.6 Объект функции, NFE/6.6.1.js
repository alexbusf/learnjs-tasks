"use strict"

function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = value => count = value;

  counter.decrease = () => count--;

  return counter;
}

let counter = new makeCounter(1);

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter.set(10));
