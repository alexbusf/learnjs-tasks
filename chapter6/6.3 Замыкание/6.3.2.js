"use strict"

//Объект счетсика. Будет ли он работать? Что покажет?

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

console.log( counter.up() ); // 1
console.log( counter.up() ); // 2
console.log( counter.down() ); // 1

/*
Работать будет. Лексическое окружение одно на все фунеции, поэтому все функции имеют доступ к одной и той же переменной
count при заданной последовательности вызовов будет выведено 1, 2, 1
*/