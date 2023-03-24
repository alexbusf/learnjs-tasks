"use strict"

//Задерживающий декоратор

function f(x) {
  console.log(x);
}

function delay(f, ms) {

  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };

}

// обертка
let f1500 = delay(f, 1500);

f1500("test"); // показывает "test" после 1500 мс