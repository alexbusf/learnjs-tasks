"use strict"

/*
Добавьте toString в словарь
*/

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  console.log( this.name );
}

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();                        // Rabbit
Rabbit.prototype.sayHi();              // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi();              // undefined

/*
В первом вызове this == rabbit, во всех остальных this равен Rabbit.prototype, так как это объект перед точкой.

Так что только первый вызов выведет Rabbit, а остальные – undefined:
*/
