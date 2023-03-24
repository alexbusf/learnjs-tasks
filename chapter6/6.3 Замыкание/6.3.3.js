"use strict"

//Функция в if Посмотрите на код. Какой будет результат у вызова на последней строке?

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi();

/*
Ошибка Uncaught ReferenceError: sayHi is not defined Функция не определена, так как находится внутри блока if
*/